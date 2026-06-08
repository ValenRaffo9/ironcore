import {
  auth, db, onAuthStateChanged,
  collection, addDoc, getDocs, deleteDoc,
  doc, setDoc, query, orderBy
} from './firebase.js';

// ── ESTADO ──
let userId        = null;
let pesoData      = [];
let medidasData   = [];
let workoutsData  = [];
let nutricionData = [];
let prsData       = {};
let prsTemp       = [];
let aguaData      = { fecha: '', ml: 0 };

let chartPeso        = null;
let mesActual        = new Date().getMonth();
let anioActual       = new Date().getFullYear();
let tipoSeleccionado = null;
const META_AGUA_ML   = 3000;

// ── INIT ──
onAuthStateChanged(auth, async user => {
  if (user) {
    userId = user.uid;
    await cargarDesdeFirestore();
  } else {
    userId = 'anonimo';
    cargarDesdeLocal();
  }
  initUI();
});

// ── CARGAR FIRESTORE ──
async function cargarDesdeFirestore() {
  try {
    const [pesoSnap, medidasSnap, workoutsSnap, nutricionSnap, prsSnap] = await Promise.all([
      getDocs(query(collection(db, 'usuarios', userId, 'peso'),      orderBy('fecha'))),
      getDocs(query(collection(db, 'usuarios', userId, 'medidas'),   orderBy('fecha'))),
      getDocs(query(collection(db, 'usuarios', userId, 'workouts'),  orderBy('fecha'))),
      getDocs(query(collection(db, 'usuarios', userId, 'nutricion'), orderBy('fecha'))),
      getDocs(collection(db, 'usuarios', userId, 'prs')),
    ]);

    pesoData      = pesoSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    medidasData   = medidasSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    workoutsData  = workoutsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    nutricionData = nutricionSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    prsData       = {};
    prsSnap.docs.forEach(d => { prsData[d.id] = d.data(); });

    cargarAguaLocal();
  } catch(e) {
    console.error('Error Firestore:', e);
    cargarDesdeLocal();
  }
}

// ── CARGAR LOCAL ──
function cargarDesdeLocal() {
  const k = n => `ironcore_${n}_${userId}`;
  pesoData      = JSON.parse(localStorage.getItem(k('peso'))      || '[]');
  medidasData   = JSON.parse(localStorage.getItem(k('medidas'))   || '[]');
  workoutsData  = JSON.parse(localStorage.getItem(k('workouts'))  || '[]');
  nutricionData = JSON.parse(localStorage.getItem(k('nutricion')) || '[]');
  prsData       = JSON.parse(localStorage.getItem(k('prs'))       || '{}');
  cargarAguaLocal();
}

function cargarAguaLocal() {
  const hoy   = getHoy();
  const saved = JSON.parse(localStorage.getItem(`ironcore_agua_${userId}`) || '{"fecha":"","ml":0}');
  aguaData    = saved.fecha === hoy ? saved : { fecha: hoy, ml: 0 };
}

// ── GUARDAR FIRESTORE ──
async function guardarDoc(coleccion, datos) {
  if (userId === 'anonimo') {
    const k   = `ironcore_${coleccion}_anonimo`;
    const arr = JSON.parse(localStorage.getItem(k) || '[]');
    const id  = Date.now().toString();
    arr.push({ id, ...datos });
    localStorage.setItem(k, JSON.stringify(arr));
    return id;
  }
  const ref = await addDoc(collection(db, 'usuarios', userId, coleccion), datos);
  return ref.id;
}

async function eliminarDoc(coleccion, id) {
  if (userId === 'anonimo') {
    const k   = `ironcore_${coleccion}_anonimo`;
    let arr   = JSON.parse(localStorage.getItem(k) || '[]');
    arr       = arr.filter(d => d.id !== id);
    localStorage.setItem(k, JSON.stringify(arr));
    return;
  }
  await deleteDoc(doc(db, 'usuarios', userId, coleccion, id));
}

// ── UI INIT ──
function initUI() {
  setFechaHoy('peso');
  setFechaHoy('med');
  setFechaHoy('workout');
  setFechaHoy('nutri');

  actualizarResumen();
  renderHistorialPeso();
  renderGraficoPeso();
  renderHistorialMedidas();
  renderHistorialWorkouts();
  renderHistorialNutricion();
  renderCalendario();
  renderAgua();
  renderListaPRs();
  renderPRsTemp();
  mostrarNotificacionRacha();


  const notaPeso = document.getElementById('peso-nota');
  if (notaPeso) notaPeso.addEventListener('keydown', e => {
    if (e.key === 'Enter') window.guardarPeso();
  });
}

// ── UTILS FECHA ──
function getHoy() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function setFechaHoy(prefijo) {
  const hoy = new Date();
  const dEl = document.getElementById(`${prefijo}-dia`);
  const mEl = document.getElementById(`${prefijo}-mes`);
  const aEl = document.getElementById(`${prefijo}-anio`);
  if (dEl) dEl.value = hoy.getDate();
  if (mEl) mEl.value = hoy.getMonth() + 1;
  if (aEl) aEl.value = hoy.getFullYear();
}

function getFechaDesdeInputs(prefijo) {
  const diaRaw  = document.getElementById(`${prefijo}-dia`)?.value;
  const mesRaw  = document.getElementById(`${prefijo}-mes`)?.value;
  const anioRaw = document.getElementById(`${prefijo}-anio`)?.value;
  if (!diaRaw || !mesRaw || !anioRaw) return null;
  const dia  = parseInt(diaRaw);
  const mes  = parseInt(mesRaw);
  const anio = parseInt(anioRaw);
  if (isNaN(dia)  || dia  < 1  || dia  > 31)    return null;
  if (isNaN(mes)  || mes  < 1  || mes  > 12)    return null;
  if (isNaN(anio) || anio < 2020 || anio > 2099) return null;
  if (String(anioRaw).length < 4)                return null;
  const diasEnMes = new Date(anio, mes, 0).getDate();
  if (dia > diasEnMes) return null;
  return `${anio}-${String(mes).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
}

function validarFecha(str) {
  if (!str) return false;
  if (str > getHoy()) return false;
  return !isNaN(new Date(str).getTime());
}

function validarFechaInput(input, min, max) {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (!input.value) return;
  let val = parseInt(input.value);
  if (isNaN(val)) { input.value = ''; return; }
  if (input.value.length >= 2 && val < min) input.value = min;
  if (val > max) input.value = max;
}

function validarAnioInput(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value.length > 4) input.value = input.value.slice(0, 4);
  if (input.value.length === 4) {
    let val       = parseInt(input.value);
    const anioHoy = new Date().getFullYear();
    if (val < 2020)    input.value = 2020;
    if (val > anioHoy) input.value = anioHoy;
  }
}

function formatFecha(str) {
  if (!str) return '—';
  const [y, m, d] = str.split('-');
  return `${d}/${m}/${y}`;
}

function formatFechaCorta(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-');
  return `${d}/${m}`;
}

// ── TABS ──
window.switchTab = function(tab, btn) {
  document.querySelectorAll('.prog-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.prog-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`panel-${tab}`).classList.add('active');
  if (tab === 'calendario') renderCalendario();
};

window.cambiarValorProg = function(id, delta) {
  const input = document.getElementById(id);
  if (!input) return;
  const min = parseFloat(input.min) || 0;
  const max = parseFloat(input.max) || 9999;
  let val   = parseFloat(input.value) || 0;
  val = Math.round((val + delta) * 100) / 100;
  val = Math.min(max, Math.max(min, val));
  input.value = val;
};

// ── MENSAJES ──
function mostrarSuccess(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3000);
}

function mostrarError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent   = '⚠️ ' + msg;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}

// ── GUARDAR PESO ──
window.guardarPeso = async function() {
  const val   = parseFloat(document.getElementById('peso-input').value);
  const fecha = getFechaDesdeInputs('peso');
  const nota  = document.getElementById('peso-nota').value.trim();

  if (!val)                { mostrarError('peso-error', 'Ingresá el peso'); return; }
  if (!validarFecha(fecha)) { mostrarError('peso-error', 'Ingresá una fecha válida'); return; }

  const existente = pesoData.find(d => d.fecha === fecha);
  if (existente) {
    await eliminarDoc('peso', existente.id);
    pesoData = pesoData.filter(d => d.fecha !== fecha);
  }

  const id = await guardarDoc('peso', { fecha, peso: val, nota });
  pesoData.push({ id, fecha, peso: val, nota });
  pesoData.sort((a, b) => a.fecha.localeCompare(b.fecha));

  document.getElementById('peso-input').value = '';
  document.getElementById('peso-nota').value  = '';

  mostrarSuccess('peso-success');
  actualizarResumen();
  renderHistorialPeso();
  renderGraficoPeso();
};

// ── GUARDAR MEDIDAS ──
window.guardarMedidas = async function() {
  const fecha = getFechaDesdeInputs('med');
  if (!validarFecha(fecha)) { mostrarError('medidas-error', 'Ingresá una fecha válida'); return; }

  const entrada = {
    fecha,
    pecho:   parseFloat(document.getElementById('med-pecho').value)   || null,
    cintura: parseFloat(document.getElementById('med-cintura').value) || null,
    cadera:  parseFloat(document.getElementById('med-cadera').value)  || null,
    brazoD:  parseFloat(document.getElementById('med-brazo-d').value) || null,
    brazoI:  parseFloat(document.getElementById('med-brazo-i').value) || null,
    musloD:  parseFloat(document.getElementById('med-muslo-d').value) || null,
    musloI:  parseFloat(document.getElementById('med-muslo-i').value) || null,
  };

  const tieneAlgo = Object.entries(entrada).some(([k, v]) => k !== 'fecha' && v !== null);
  if (!tieneAlgo) { mostrarError('medidas-error', 'Ingresá al menos una medida'); return; }

  const existente = medidasData.find(d => d.fecha === fecha);
  if (existente) {
    await eliminarDoc('medidas', existente.id);
    medidasData = medidasData.filter(d => d.fecha !== fecha);
  }

  const id = await guardarDoc('medidas', entrada);
  medidasData.push({ id, ...entrada });
  medidasData.sort((a, b) => a.fecha.localeCompare(b.fecha));

  ['med-pecho','med-cintura','med-cadera','med-brazo-d','med-brazo-i','med-muslo-d','med-muslo-i']
    .forEach(elId => { const el = document.getElementById(elId); if (el) el.value = ''; });

  mostrarSuccess('medidas-success');
  renderHistorialMedidas();
};

// ── GUARDAR WORKOUT ──
window.selTipo = function(tipo, btn) {
  tipoSeleccionado = tipo;
  document.querySelectorAll('.workout-tipo-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
};

window.guardarWorkout = async function() {
  if (!tipoSeleccionado) { mostrarError('workout-error', 'Seleccioná el tipo de entrenamiento'); return; }

  const fecha = getFechaDesdeInputs('workout');
  if (!validarFecha(fecha)) { mostrarError('workout-error', 'Ingresá una fecha válida'); return; }

  const entrada = {
    fecha,
    tipo:     tipoSeleccionado,
    duracion: parseFloat(document.getElementById('workout-duracion').value) || null,
    notas:    document.getElementById('workout-notas').value.trim(),
  };

  const id = await guardarDoc('workouts', entrada);
  workoutsData.push({ id, ...entrada });
  workoutsData.sort((a, b) => a.fecha.localeCompare(b.fecha));

  tipoSeleccionado = null;
  document.querySelectorAll('.workout-tipo-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('workout-duracion').value = '';
  document.getElementById('workout-notas').value    = '';

  // Procesar PRs si hay alguno cargado
  await procesarPRs(fecha);

  mostrarSuccess('workout-success');
  actualizarResumen();
  renderHistorialWorkouts();
  renderCalendario();
};

// ── GUARDAR NUTRICIÓN ──
window.guardarNutricion = async function() {
  const calorias = parseFloat(document.getElementById('nutri-calorias').value);
  const fecha    = getFechaDesdeInputs('nutri');
  const notas    = document.getElementById('nutri-notas').value.trim();

  if (!calorias)            { mostrarError('nutri-error', 'Ingresá las calorías'); return; }
  if (!validarFecha(fecha)) { mostrarError('nutri-error', 'Ingresá una fecha válida'); return; }

  const existente = nutricionData.find(d => d.fecha === fecha);
  if (existente) {
    await eliminarDoc('nutricion', existente.id);
    nutricionData = nutricionData.filter(d => d.fecha !== fecha);
  }

  const id = await guardarDoc('nutricion', { fecha, calorias: Math.round(calorias), notas });
  nutricionData.push({ id, fecha, calorias: Math.round(calorias), notas });
  nutricionData.sort((a, b) => a.fecha.localeCompare(b.fecha));

  document.getElementById('nutri-calorias').value = '';
  document.getElementById('nutri-notas').value    = '';

  mostrarSuccess('nutri-success');
  renderHistorialNutricion();
  renderCalendario();
};

// ── AGUA ──
window.agregarAgua = function(ml) {
  aguaData.ml    = Math.min(META_AGUA_ML + 1000, aguaData.ml + ml);
  aguaData.fecha = getHoy();
  localStorage.setItem(`ironcore_agua_${userId}`, JSON.stringify(aguaData));
  renderAgua();
};

window.resetearAgua = function() {
  aguaData = { fecha: getHoy(), ml: 0 };
  localStorage.setItem(`ironcore_agua_${userId}`, JSON.stringify(aguaData));
  renderAgua();
};

function renderAgua() {
  const el       = document.getElementById('agua-ml');
  const elLitros = document.getElementById('agua-litros');
  const elBarra  = document.getElementById('agua-barra');
  const elMeta   = document.getElementById('agua-meta');
  const elPct    = document.getElementById('agua-pct');
  if (!el) return;

  const ml  = aguaData.ml;
  const pct = Math.min(100, Math.round((ml / META_AGUA_ML) * 100));

  el.textContent = ml;
  if (elLitros) elLitros.textContent = (ml / 1000).toFixed(1);
  if (elBarra)  elBarra.style.width  = pct + '%';
  if (elMeta)   elMeta.textContent   = (META_AGUA_ML / 1000).toFixed(1);
  if (elPct)    elPct.textContent    = pct + '%';

  if (elBarra) {
    if (pct >= 100)     elBarra.style.background = '#2a9d5c';
    else if (pct >= 60) elBarra.style.background = '#ff6a00';
    else                elBarra.style.background = '#3a7bd5';
  }
}

// ── PRs ──
window.agregarPR = function() {
  const ejercicio = document.getElementById('pr-ejercicio').value.trim();
  const peso      = parseFloat(document.getElementById('pr-peso').value);
  if (!ejercicio || !peso) return;

  const idx = prsTemp.findIndex(p => p.ejercicio.toLowerCase() === ejercicio.toLowerCase());
  if (idx >= 0) prsTemp[idx].peso = peso;
  else prsTemp.push({ ejercicio, peso });

  document.getElementById('pr-ejercicio').value = '';
  document.getElementById('pr-peso').value      = '';
  renderPRsTemp();
};

function renderPRsTemp() {
  const lista = document.getElementById('prLista');
  if (!lista) return;
  lista.innerHTML = prsTemp.map((p, i) => `
    <div class="pr-item-temp">
      <span class="pr-item-nombre">${p.ejercicio}</span>
      <span class="pr-item-kg">${p.peso} kg</span>
      <button class="pr-item-remove" onclick="window.quitarPRTemp(${i})">✕</button>
    </div>
  `).join('');
}

window.quitarPRTemp = function(i) {
  prsTemp.splice(i, 1);
  renderPRsTemp();
};

async function procesarPRs(fecha) {
  if (!prsTemp.length) return;
  const nuevosRecs = [];

  for (const { ejercicio, peso } of prsTemp) {
    const clave     = ejercicio.toLowerCase().replace(/\s+/g, '_');
    const recordAct = prsData[clave];

    if (!recordAct || peso > recordAct.peso) {
      nuevosRecs.push({ ejercicio, peso, anterior: recordAct?.peso || null });
      prsData[clave] = { ejercicio, peso, fecha };

      if (userId !== 'anonimo') {
        await setDoc(doc(db, 'usuarios', userId, 'prs', clave), { ejercicio, peso, fecha });
      } else {
        localStorage.setItem(`ironcore_prs_${userId}`, JSON.stringify(prsData));
      }
    }
  }

  if (nuevosRecs.length > 0) mostrarToastPR(nuevosRecs);
  prsTemp = [];
  renderPRsTemp();
  renderListaPRs();
}

function mostrarToastPR(records) {
  const existing = document.getElementById('prToast');
  if (existing) existing.remove();

  const nombres = records.map(r => r.ejercicio).join(', ');
  const toast   = document.createElement('div');
  toast.id        = 'prToast';
  toast.className = 'pr-toast';
  toast.innerHTML = `
    <div class="pr-toast-icono">🏆</div>
    <div>
      <div class="pr-toast-titulo">¡Nuevo récord personal!</div>
      <div class="pr-toast-sub">${nombres}</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

function renderListaPRs() {
  const lista = document.getElementById('listaPRs');
  if (!lista) return;

  const records = Object.values(prsData).sort((a, b) => a.ejercicio.localeCompare(b.ejercicio));

  if (!records.length) {
    lista.innerHTML = '<div class="historial-vacio">No hay récords todavía. Registrá los pesos al guardar un workout.</div>';
    return;
  }

  lista.innerHTML = records.map(r => `
    <div class="pr-record-item">
      <div class="pr-record-nombre">
        ${r.ejercicio}
        <span class="pr-badge">🏆 PR</span>
      </div>
      <div style="text-align:right">
        <div class="pr-record-peso">${r.peso} kg</div>
        <div class="pr-record-fecha">${formatFecha(r.fecha)}</div>
      </div>
    </div>
  `).join('');
}

// ── RESUMEN ──
function actualizarResumen() {
  if (pesoData.length > 0) {
    const inicial = pesoData[0].peso;
    const actual  = pesoData[pesoData.length - 1].peso;
    const diff    = Math.round((actual - inicial) * 10) / 10;
    document.getElementById('res-peso-inicial').textContent = inicial + ' kg';
    document.getElementById('res-peso-actual').textContent  = actual  + ' kg';
    document.getElementById('res-diferencia').textContent   = (diff >= 0 ? '+' : '') + diff + ' kg';
    document.getElementById('res-diferencia').style.color   = diff > 0 ? '#ff6a00' : diff < 0 ? '#2a9d5c' : '#fff';
  }

  const ahora   = new Date();
  const mesStr  = `${ahora.getFullYear()}-${String(ahora.getMonth()+1).padStart(2,'0')}`;
  const diasMes = new Set(workoutsData.filter(w => w.fecha.startsWith(mesStr)).map(w => w.fecha));
  document.getElementById('res-mes').textContent = diasMes.size;

  const diasEntrenados = [...new Set(workoutsData.map(w => w.fecha))].sort();
  let racha = 0;
  let fechaCheck = new Date();
  while (true) {
    const str = `${fechaCheck.getFullYear()}-${String(fechaCheck.getMonth()+1).padStart(2,'0')}-${String(fechaCheck.getDate()).padStart(2,'0')}`;
    if (diasEntrenados.includes(str)) { racha++; fechaCheck.setDate(fechaCheck.getDate() - 1); }
    else break;
  }
  document.getElementById('res-racha').textContent = racha;
}

// ── HISTORIAL PESO ──
function renderHistorialPeso() {
  const lista = document.getElementById('historial-peso');
  if (!lista) return;
  if (!pesoData.length) { lista.innerHTML = '<div class="historial-vacio">No hay registros de peso todavía.</div>'; return; }
  lista.innerHTML = [...pesoData].reverse().map(d => `
    <div class="historial-item">
      <div class="historial-item-fecha">${formatFecha(d.fecha)}</div>
      <div class="historial-item-nota">${d.nota || '—'}</div>
      <div class="historial-item-valor">${d.peso} kg</div>
      <button class="historial-item-delete" type="button" onclick="window.eliminarPeso('${d.id}')">✕</button>
    </div>
  `).join('');
}

window.eliminarPeso = async function(id) {
  await eliminarDoc('peso', id);
  pesoData = pesoData.filter(d => d.id !== id);
  actualizarResumen();
  renderHistorialPeso();
  renderGraficoPeso();
};

// ── GRÁFICO ──
function renderGraficoPeso() {
  const canvas = document.getElementById('chartPeso');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (chartPeso) chartPeso.destroy();
  if (!pesoData.length) return;

  chartPeso = new Chart(ctx, {
    type: 'line',
    data: {
      labels: pesoData.map(d => formatFechaCorta(d.fecha)),
      datasets: [{
        label: 'Peso (kg)',
        data: pesoData.map(d => d.peso),
        borderColor: '#ff6a00',
        backgroundColor: 'rgba(255,106,0,0.08)',
        borderWidth: 2,
        pointBackgroundColor: '#ff6a00',
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#141414', borderColor: '#ff6a00', borderWidth: 1,
          titleColor: '#fff', bodyColor: '#888',
          callbacks: { label: ctx => ` ${ctx.parsed.y} kg` }
        }
      },
      scales: {
        x: { grid: { color: '#1e1e1e' }, ticks: { color: '#555', font: { family: 'Poppins', size: 11 } } },
        y: { grid: { color: '#1e1e1e' }, ticks: { color: '#555', font: { family: 'Poppins', size: 11 } } }
      }
    }
  });
}

// ── HISTORIAL MEDIDAS ──
function renderHistorialMedidas() {
  const lista = document.getElementById('historial-medidas');
  if (!lista) return;
  if (!medidasData.length) { lista.innerHTML = '<div class="historial-vacio">No hay registros de medidas todavía.</div>'; return; }

  const labels = { pecho:'Pecho', cintura:'Cintura', cadera:'Cadera', brazoD:'Brazo D', brazoI:'Brazo I', musloD:'Muslo D', musloI:'Muslo I' };

  lista.innerHTML = [...medidasData].reverse().map(d => {
    const chips = Object.entries(labels).filter(([k]) => d[k]).map(([k, l]) => `
      <div class="medida-chip">
        <div class="medida-chip-label">${l}</div>
        <div class="medida-chip-valor">${d[k]} cm</div>
      </div>
    `).join('');
    return `
      <div class="historial-medida-card">
        <div class="historial-medida-header">
          <div class="historial-item-fecha">${formatFecha(d.fecha)}</div>
          <button class="historial-item-delete" type="button" onclick="window.eliminarMedida('${d.id}')">✕</button>
        </div>
        <div class="medidas-chips-grid">${chips}</div>
      </div>
    `;
  }).join('');
}

window.eliminarMedida = async function(id) {
  await eliminarDoc('medidas', id);
  medidasData = medidasData.filter(d => d.id !== id);
  renderHistorialMedidas();
};

// ── HISTORIAL WORKOUTS ──
function renderHistorialWorkouts() {
  const lista = document.getElementById('historial-workouts');
  if (!lista) return;
  if (!workoutsData.length) { lista.innerHTML = '<div class="historial-vacio">No hay entrenamientos registrados todavía.</div>'; return; }
  lista.innerHTML = [...workoutsData].reverse().map(d => `
    <div class="historial-item">
      <div class="historial-item-fecha">${formatFecha(d.fecha)}</div>
      <div class="historial-item-nota">${d.notas || '—'}${d.duracion ? ` · ${d.duracion} min` : ''}</div>
      <div class="historial-item-valor">${d.tipo}</div>
      <button class="historial-item-delete" type="button" onclick="window.eliminarWorkout('${d.id}')">✕</button>
    </div>
  `).join('');
}

window.eliminarWorkout = async function(id) {
  await eliminarDoc('workouts', id);
  workoutsData = workoutsData.filter(d => d.id !== id);
  actualizarResumen();
  renderHistorialWorkouts();
  renderCalendario();
};

// ── HISTORIAL NUTRICIÓN ──
function renderHistorialNutricion() {
  const lista = document.getElementById('historial-nutricion');
  if (!lista) return;
  if (!nutricionData.length) { lista.innerHTML = '<div class="historial-vacio">No hay registros calóricos todavía.</div>'; return; }
  lista.innerHTML = [...nutricionData].reverse().map(d => `
    <div class="historial-item">
      <div class="historial-item-fecha">${formatFecha(d.fecha)}</div>
      <div class="historial-item-nota">${d.notas || '—'}</div>
      <div class="historial-item-valor">${d.calorias} kcal</div>
      <button class="historial-item-delete" type="button" onclick="window.eliminarNutricion('${d.id}')">✕</button>
    </div>
  `).join('');
}

window.eliminarNutricion = async function(id) {
  await eliminarDoc('nutricion', id);
  nutricionData = nutricionData.filter(d => d.id !== id);
  renderHistorialNutricion();
  renderCalendario();
};

// ── CALENDARIO ──
function renderCalendario() {
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  document.getElementById('calMesTitulo').textContent = `${meses[mesActual]} ${anioActual}`;

  const hoy  = getHoy();
  const dias = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
  let html   = dias.map(d => `<div class="cal-dia-header">${d}</div>`).join('');

  const primerDia = new Date(anioActual, mesActual, 1);
  let startDay    = primerDia.getDay() - 1;
  if (startDay < 0) startDay = 6;
  for (let i = 0; i < startDay; i++) html += `<div class="cal-dia vacio"></div>`;

  const totalDias = new Date(anioActual, mesActual + 1, 0).getDate();

  for (let d = 1; d <= totalDias; d++) {
    const fechaStr       = `${anioActual}-${String(mesActual+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const workoutsDelDia = workoutsData.filter(w => w.fecha === fechaStr);
    const nutriDelDia    = nutricionData.find(n => n.fecha === fechaStr);
    const entrenado      = workoutsDelDia.length > 0;
    const esHoy          = fechaStr === hoy;

    let clase  = 'cal-dia';
    if (esHoy)     clase += ' hoy';
    if (entrenado) clase += ' entrenado';

    const tipo     = entrenado ? workoutsDelDia.map(w => w.tipo).join(' + ') : '';
    const tipoHTML = tipo ? `<div class="cal-dia-tipo">${tipo}</div>` : '';
    const calHTML  = nutriDelDia ? `<div class="cal-dia-cal">${nutriDelDia.calorias}k</div>` : '';

    html += `<div class="${clase}" onclick="window.mostrarDetalleDia('${fechaStr}')">${d}${tipoHTML}${calHTML}</div>`;
  }

  document.getElementById('calendarioGrid').innerHTML = html;
  document.getElementById('calDetalle').style.display = 'none';
}

window.mostrarDetalleDia = function(fecha) {
  const workoutsDelDia = workoutsData.filter(w => w.fecha === fecha);
  const pesoDelDia     = pesoData.find(p => p.fecha === fecha);
  const nutriDelDia    = nutricionData.find(n => n.fecha === fecha);

  document.getElementById('calDetalleFecha').textContent = formatFecha(fecha);

  let content = '';
  if (workoutsDelDia.length > 0) {
    content += workoutsDelDia.map(w =>
      `🏋️ <strong>${w.tipo}</strong>${w.duracion ? ` · ${w.duracion} min` : ''}${w.notas ? `<br><span style="color:#555;font-size:12px">${w.notas}</span>` : ''}`
    ).join('<br><br>');
  } else {
    content += '😴 Día de descanso';
  }

  if (pesoDelDia) {
    content += `<br><br>⚖️ Peso: <strong style="color:#ff6a00">${pesoDelDia.peso} kg</strong>`;
    if (pesoDelDia.nota) content += ` <span style="color:#555;font-size:12px">— ${pesoDelDia.nota}</span>`;
  }

  if (nutriDelDia) {
    content += `<br><br>🍽️ Calorías: <strong style="color:#3a7bd5">${nutriDelDia.calorias} kcal</strong>`;
    if (nutriDelDia.notas) content += ` <span style="color:#555;font-size:12px">— ${nutriDelDia.notas}</span>`;
  }

  document.getElementById('calDetalleContent').innerHTML = content;
  document.getElementById('calDetalle').style.display    = 'block';
};

window.cambiarMes = function(delta) {
  mesActual += delta;
  if (mesActual > 11) { mesActual = 0; anioActual++; }
  if (mesActual < 0)  { mesActual = 11; anioActual--; }
  renderCalendario();
};

function mostrarNotificacionRacha() {
  const diasEntrenados = [...new Set(workoutsData.map(w => w.fecha))].sort();
  let racha = 0;
  let fechaCheck = new Date();

  while (true) {
    const str = `${fechaCheck.getFullYear()}-${String(fechaCheck.getMonth()+1).padStart(2,'0')}-${String(fechaCheck.getDate()).padStart(2,'0')}`;
    if (diasEntrenados.includes(str)) { racha++; fechaCheck.setDate(fechaCheck.getDate() - 1); }
    else break;
  }

  if (racha < 3) return;

  const mensajes = {
    3:  '🔥 ¡3 días seguidos! Seguís construyendo el hábito.',
    5:  '💪 ¡5 días seguidos! Eso es consistencia real.',
    7:  '🏆 ¡Una semana completa! Muy pocos llegan acá.',
    14: '⚡ ¡Dos semanas seguidas! Sos una máquina.',
    30: '👑 ¡30 días seguidos! Nivel élite.',
  };

  const msg = mensajes[racha] || (racha % 7 === 0
    ? `🔥 ¡${racha} días seguidos! Seguís imparable.`
    : null);

  if (!msg) return;

  // Verificar si ya mostramos esta notificación hoy
  const keyHoy = `ironcore_racha_notif_${getHoy()}_${racha}`;
  if (localStorage.getItem(keyHoy)) return;
  localStorage.setItem(keyHoy, '1');

  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);
    background:#111;border:1px solid #ff6a00;border-radius:12px;
    padding:1rem 1.5rem;display:flex;align-items:center;gap:12px;
    font-size:14px;color:#fff;z-index:1000;transition:transform 0.4s ease;
    box-shadow:0 8px 30px rgba(0,0,0,0.5);white-space:nowrap;
  `;
  toast.innerHTML = `
    <span style="font-size:24px">🔥</span>
    <div>
      <div style="font-weight:bold;color:#ff6a00">¡Racha de ${racha} días!</div>
      <div style="font-size:12px;color:#888">${msg.replace(/^[^\s]+\s/, '')}</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.style.transform = 'translateX(-50%) translateY(0)', 100);
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}