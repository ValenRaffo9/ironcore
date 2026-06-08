let diasSeleccionados = 3;
let rutina = {
  nombre: '',
  dias: []
};

// ── INIT ──
window.onload = function() {
  selDias(3, document.querySelectorAll('.dia-btn')[2]);
  renderRutinasGuardadas();
};

// ── SELECCIÓN DÍAS ──
function selDias(n, btn) {
  diasSeleccionados = n;
  document.querySelectorAll('.dia-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  generarDias();
}

function generarDias() {
  const container = document.getElementById('diasContainer');
  const nombres   = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Preservar ejercicios existentes
  const existentes = rutina.dias.map(d => ({ nombre: d.nombre, ejercicios: d.ejercicios }));

  rutina.dias = [];
  for (let i = 0; i < diasSeleccionados; i++) {
    rutina.dias.push({
      nombre:     existentes[i]?.nombre || `Día ${i + 1} — ${nombres[i]}`,
      ejercicios: existentes[i]?.ejercicios || []
    });
  }

  renderDias();
}

function renderDias() {
  const container = document.getElementById('diasContainer');
  container.innerHTML = rutina.dias.map((dia, dIdx) => `
    <div class="dia-bloque" id="dia-${dIdx}">
      <div class="dia-bloque-header">
        <div class="dia-bloque-nombre">
          <input type="text" value="${dia.nombre}" placeholder="Nombre del día"
            onchange="rutina.dias[${dIdx}].nombre = this.value">
        </div>
      </div>
      <div class="dia-ejercicios" id="ejercicios-${dIdx}">
        ${dia.ejercicios.map((ej, eIdx) => renderEjercicioItem(ej, dIdx, eIdx)).join('')}
      </div>
      <div class="add-ejercicio-row">
        <input type="text" id="add-input-${dIdx}" placeholder="Agregar ejercicio (ej: Press banca)"
          onkeydown="if(event.key==='Enter') agregarEjercicio(${dIdx})">
        <button class="add-ejercicio-btn" onclick="agregarEjercicio(${dIdx})">+ Agregar</button>
      </div>
    </div>
  `).join('');
}

function renderEjercicioItem(ej, dIdx, eIdx) {
  return `
    <div class="ejercicio-item">
      <div class="ejercicio-item-nombre">${ej.nombre}</div>
      <input class="ejercicio-item-series" type="text" value="${ej.series}"
        placeholder="3x12" onchange="rutina.dias[${dIdx}].ejercicios[${eIdx}].series = this.value">
      <button class="ejercicio-item-remove" onclick="eliminarEjercicio(${dIdx}, ${eIdx})">✕</button>
    </div>
  `;
}

function agregarEjercicio(dIdx) {
  const input = document.getElementById(`add-input-${dIdx}`);
  const nombre = input.value.trim();
  if (!nombre) return;

  rutina.dias[dIdx].ejercicios.push({ nombre, series: '3x12' });
  input.value = '';
  renderDias();

  // Re-enfocar el input del mismo día
  setTimeout(() => document.getElementById(`add-input-${dIdx}`)?.focus(), 50);
}

function eliminarEjercicio(dIdx, eIdx) {
  rutina.dias[dIdx].ejercicios.splice(eIdx, 1);
  renderDias();
}

// ── GUARDAR ──
function guardarRutina() {
  const nombre = document.getElementById('rutina-nombre').value.trim();
  if (!nombre) {
    document.getElementById('rutina-nombre').style.borderColor = '#ff6a00';
    document.getElementById('rutina-nombre').placeholder = 'Poné un nombre a tu rutina';
    setTimeout(() => {
      document.getElementById('rutina-nombre').style.borderColor = '';
      document.getElementById('rutina-nombre').placeholder = 'Ej: Mi rutina de volumen';
    }, 2500);
    return;
  }

  rutina.nombre = nombre;

  const guardadas = JSON.parse(localStorage.getItem('ironcore_mis_rutinas') || '[]');
  const idx       = guardadas.findIndex(r => r.nombre === nombre);

  if (idx >= 0) guardadas[idx] = { ...rutina, guardadaEn: new Date().toISOString() };
  else          guardadas.push({ ...rutina, guardadaEn: new Date().toISOString() });

  localStorage.setItem('ironcore_mis_rutinas', JSON.stringify(guardadas));

  // Feedback visual
  const btn = document.querySelector('.mirutina-btn');
  btn.textContent = '✅ Guardada';
  setTimeout(() => btn.textContent = '💾 Guardar rutina', 2000);

  renderRutinasGuardadas();
}

// ── DESCARGAR ──
function descargarRutina() {
  const nombre = document.getElementById('rutina-nombre').value.trim() || 'mi-rutina';
  let texto    = `IRONCORE — ${nombre.toUpperCase()}\n${'='.repeat(50)}\n\n`;

  rutina.dias.forEach(dia => {
    texto += `${dia.nombre.toUpperCase()}\n${'-'.repeat(40)}\n`;
    if (!dia.ejercicios.length) {
      texto += 'Sin ejercicios cargados\n';
    } else {
      dia.ejercicios.forEach(ej => {
        texto += `• ${ej.nombre} — ${ej.series}\n`;
      });
    }
    texto += '\n';
  });

  texto += `${'='.repeat(50)}\nGenerado por IronCore\n`;

  const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${nombre.replace(/\s+/g, '-').toLowerCase()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── LIMPIAR ──
function limpiarRutina() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.85);
    z-index:1000;display:flex;align-items:center;justify-content:center;
  `;
  overlay.innerHTML = `
    <div style="
      background:#111;border:1px solid #1e1e1e;border-radius:16px;
      padding:2rem;max-width:360px;width:90%;text-align:center;
      display:flex;flex-direction:column;gap:1rem;
    ">
      <div style="font-size:32px">🗑️</div>
      <div style="font-size:16px;font-weight:bold;color:#fff">¿Limpiar todo?</div>
      <div style="font-size:13px;color:#666">Se van a borrar todos los ejercicios cargados. Esta acción no se puede deshacer.</div>
      <div style="display:flex;gap:10px;margin-top:0.5rem">
        <button id="cancelarLimpiar" style="
          flex:1;padding:11px;background:#141414;border:1px solid #1e1e1e;
          border-radius:8px;color:#888;font-size:13px;cursor:pointer;
          font-family:'Poppins',sans-serif;
        ">Cancelar</button>
        <button id="confirmarLimpiar" style="
          flex:1;padding:11px;background:#141414;border:1px solid #cf7a7a;
          border-radius:8px;color:#cf7a7a;font-size:13px;font-weight:bold;
          cursor:pointer;font-family:'Poppins',sans-serif;
        ">Sí, limpiar</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('cancelarLimpiar').onclick  = () => overlay.remove();
  document.getElementById('confirmarLimpiar').onclick = () => {
    overlay.remove();
    document.getElementById('rutina-nombre').value = '';
    rutina = { nombre: '', dias: [] };
    selDias(diasSeleccionados, document.querySelectorAll('.dia-btn')[diasSeleccionados - 1]);
  };

  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ── RUTINAS GUARDADAS ──
function renderRutinasGuardadas() {
  const guardadas = JSON.parse(localStorage.getItem('ironcore_mis_rutinas') || '[]');
  const seccion   = document.getElementById('seccionGuardadas');
  const container = document.getElementById('rutinasGuardadas');

  if (!guardadas.length) { seccion.style.display = 'none'; return; }

  seccion.style.display = 'block';
  container.innerHTML   = guardadas.map((r, i) => `
    <div class="rutina-guardada">
      <div>
        <div class="rutina-guardada-nombre">${r.nombre}</div>
        <div class="rutina-guardada-info">${r.dias.length} días · ${r.dias.reduce((t, d) => t + d.ejercicios.length, 0)} ejercicios</div>
      </div>
      <div class="rutina-guardada-btns">
        <button class="rg-btn" onclick="cargarRutina(${i})">Cargar</button>
        <button class="rg-btn eliminar" onclick="eliminarRutinaGuardada(${i})">Eliminar</button>
      </div>
    </div>
  `).join('');
}

function cargarRutina(idx) {
  const guardadas = JSON.parse(localStorage.getItem('ironcore_mis_rutinas') || '[]');
  const r         = guardadas[idx];
  if (!r) return;

  rutina = { nombre: r.nombre, dias: r.dias };
  diasSeleccionados = r.dias.length;

  document.getElementById('rutina-nombre').value = r.nombre;
  document.querySelectorAll('.dia-btn').forEach((b, i) => {
    b.classList.toggle('active', i === diasSeleccionados - 1);
  });

  renderDias();
}

function eliminarRutinaGuardada(idx) {
  const guardadas = JSON.parse(localStorage.getItem('ironcore_mis_rutinas') || '[]');
  guardadas.splice(idx, 1);
  localStorage.setItem('ironcore_mis_rutinas', JSON.stringify(guardadas));
  renderRutinasGuardadas();
}