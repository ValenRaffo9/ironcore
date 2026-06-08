let sexo = 'm';

function setSexo(s, btn) {
  sexo = s;
  document.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Limpiar todos los inputs de calorías y el resultado
  ['cal-edad','cal-peso','cal-altura'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('campo-error'); }
  });
  const res = document.getElementById('res-calorias');
  if (res) res.style.display = 'none';
  const err = document.getElementById('error-calorias');
  if (err) err.classList.remove('visible');
}

function switchTab(tab, btn) {
  document.querySelectorAll('.calc-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.calc-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`panel-${tab}`).classList.add('active');

  // Limpiar inputs y resultados al cambiar de tab
  const panel = document.getElementById(`panel-${tab}`);
  panel.querySelectorAll('input[type="number"], input[type="text"]').forEach(i => i.value = '');
  panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
  panel.querySelectorAll('.calc-resultado').forEach(r => r.style.display = 'none');
  panel.querySelectorAll('.error-msg').forEach(e => e.classList.remove('visible'));
  panel.querySelectorAll('input').forEach(i => i.classList.remove('campo-error'));
  panel.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
  const firstRadio = panel.querySelector('.radio-btn');
  if (firstRadio) firstRadio.classList.add('active');
  sexo = 'm';
}

function cambiarValor(id, delta) {
  const input = document.getElementById(id);
  const min = parseFloat(input.min) || 0;
  const max = parseFloat(input.max) || 9999;
  const step = id.includes('altura') ? 1 : id.includes('reps') ? 1 : 1;
  let val = parseFloat(input.value) || 0;
  val = Math.min(max, Math.max(min, val + delta * step));
  input.value = val;
  input.classList.remove('campo-error');
}

// ── ERROR HANDLER ──
function mostrarError(id, inputs) {
  inputs.forEach(i => {
    if (!i) return;
    i.classList.toggle('campo-error', !i.value);
    i.addEventListener('input', () => {
      i.classList.remove('campo-error');
      const errEl = document.getElementById(id);
      if (errEl) errEl.classList.remove('visible');
    }, { once: true });
  });
  const errEl = document.getElementById(id);
  if (errEl) {
    errEl.classList.add('visible');
    errEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ── CALORÍAS (TDEE) ──
function calcularCalorias() {
  const edadEl   = document.getElementById('cal-edad');
  const pesoEl   = document.getElementById('cal-peso');
  const alturaEl = document.getElementById('cal-altura');

  if (!edadEl.value || !pesoEl.value || !alturaEl.value) {
    mostrarError('error-calorias', [edadEl, pesoEl, alturaEl]);
    return;
  }

  document.getElementById('error-calorias').classList.remove('visible');

  const edad     = parseFloat(edadEl.value);
  const peso     = parseFloat(pesoEl.value);
  const altura   = parseFloat(alturaEl.value);
  const actividad = parseFloat(document.getElementById('cal-actividad').value);

  // Mifflin-St Jeor
  let tmb;
  if (sexo === 'm') {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }

  const tdee     = Math.round(tmb * actividad);
  const deficit  = tdee - 500;
  const superavit = tdee + 300;

  document.getElementById('tmb-num').textContent     = Math.round(tmb) + ' kcal';
  document.getElementById('tdee-num').textContent    = tdee + ' kcal';
  document.getElementById('deficit-num').textContent  = deficit + ' kcal';
  document.getElementById('superavit-num').textContent = superavit + ' kcal';

  const res = document.getElementById('res-calorias');
  res.style.display = 'block';
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── MACROS ──
function calcularMacros() {
  const caloriasEl = document.getElementById('mac-calorias');
  const pesoEl     = document.getElementById('mac-peso');

  if (!caloriasEl.value || !pesoEl.value) {
    mostrarError('error-macros', [caloriasEl, pesoEl]);
    return;
  }

  document.getElementById('error-macros').classList.remove('visible');

  const calorias = parseFloat(caloriasEl.value);
  const peso     = parseFloat(pesoEl.value);
  const objetivo = document.getElementById('mac-objetivo').value;

  let protPorKg, grasPorKg, consejo;

  switch (objetivo) {
    case 'volumen':
      protPorKg = 1.8; grasPorKg = 0.9;
      consejo = '💡 En volumen priorizá carbohidratos altos para rendir y recuperarte mejor. La proteína alta asegura la síntesis muscular.';
      break;
    case 'definicion':
      protPorKg = 2.2; grasPorKg = 0.8;
      consejo = '💡 En definición la proteína alta protege el músculo mientras estás en déficit. No elimines los carbohidratos — son tu energía para entrenar.';
      break;
    case 'fuerza':
      protPorKg = 2.0; grasPorKg = 0.9;
      consejo = '💡 Para fuerza necesitás carbohidratos suficientes para rendir pesado. La proteína sostiene la recuperación muscular entre sesiones.';
      break;
    default:
      protPorKg = 2.0; grasPorKg = 1.0;
      consejo = '💡 Distribución equilibrada para mantenimiento. Ajustá según cómo te sentís y cómo progresás semana a semana.';
  }

  const prot     = Math.round(peso * protPorKg);
  const protKcal = prot * 4;
  const gras     = Math.round(peso * grasPorKg);
  const grasKcal = gras * 9;
  const carbKcal = Math.max(0, calorias - protKcal - grasKcal);
  const carb     = Math.round(carbKcal / 4);

  document.getElementById('prot-num').textContent  = prot + 'g';
  document.getElementById('carb-num').textContent  = carb + 'g';
  document.getElementById('gras-num').textContent  = gras + 'g';
  document.getElementById('prot-kcal').textContent = protKcal + ' kcal';
  document.getElementById('carb-kcal').textContent = carbKcal + ' kcal';
  document.getElementById('gras-kcal').textContent = grasKcal + ' kcal';
  document.getElementById('macro-consejo').textContent = consejo;

  const total = protKcal + carbKcal + grasKcal;
  document.getElementById('barra-proteinas').style.flex = protKcal / total;
  document.getElementById('barra-carbos').style.flex    = carbKcal / total;
  document.getElementById('barra-grasas').style.flex    = grasKcal / total;

  const res = document.getElementById('res-macros');
  res.style.display = 'block';
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── IMC ──
function calcularIMC() {
  const pesoEl   = document.getElementById('imc-peso');
  const alturaEl = document.getElementById('imc-altura');

  if (!pesoEl.value || !alturaEl.value) {
    mostrarError('error-imc', [pesoEl, alturaEl]);
    return;
  }

  document.getElementById('error-imc').classList.remove('visible');

  const peso    = parseFloat(pesoEl.value);
  const altura  = parseFloat(alturaEl.value);
  const alturaM = altura / 100;
  const imc     = peso / (alturaM * alturaM);
  const imcR    = Math.round(imc * 10) / 10;

  let categoria, color, nota;

  if (imc < 18.5) {
    categoria = 'Bajo peso';
    color     = '#3a7bd5';
    nota      = '⚠️ Tu IMC está por debajo del rango normal. Si entrenás, asegurate de comer suficiente para sostener el entrenamiento y la recuperación.';
  } else if (imc < 25) {
    categoria = 'Peso normal';
    color     = '#2a9d5c';
    nota      = '✅ Tu IMC está dentro del rango saludable. Recordá que no distingue músculo de grasa — un atleta puede tener un IMC alto siendo completamente saludable.';
  } else if (imc < 30) {
    categoria = 'Sobrepeso';
    color     = '#cfaa7a';
    nota      = '💡 El IMC indica sobrepeso. Si entrenás con pesas puede ser masa muscular. Considerá también tu composición corporal.';
  } else {
    categoria = 'Obesidad';
    color     = '#cf7a7a';
    nota      = '⚠️ El IMC indica obesidad. El ejercicio y la alimentación son herramientas clave — consultá con un profesional de la salud para un plan personalizado.';
  }

  document.getElementById('imc-num').textContent = imcR;
  document.getElementById('imc-num').style.color = color;
  document.getElementById('imc-cat').textContent = categoria;
  document.getElementById('imc-cat').style.color = color;
  document.getElementById('imc-nota').textContent = nota;

  // ── INDICADOR QUE CAE EN LA ZONA CORRECTA ──
  // La barra tiene 4 zonas con flex 1, 1.5, 1, 1 = total 4.5 partes
  // Bajo peso: 0 a flex1/4.5 = 0% a 22.2%
  // Normal: 22.2% a 22.2%+33.3% = 22.2% a 55.5%
  // Sobrepeso: 55.5% a 55.5%+22.2% = 55.5% a 77.7%
  // Obesidad: 77.7% a 100%
  
  let pct;
  if (imc < 18.5) {
    // Zona bajo peso: 0% a 22.2% — mapear IMC 10-18.5
    pct = ((imc - 10) / (18.5 - 10)) * 22.2;
  } else if (imc < 25) {
    // Zona normal: 22.2% a 55.5% — mapear IMC 18.5-25
    pct = 22.2 + ((imc - 18.5) / (25 - 18.5)) * 33.3;
  } else if (imc < 30) {
    // Zona sobrepeso: 55.5% a 77.7% — mapear IMC 25-30
    pct = 55.5 + ((imc - 25) / (30 - 25)) * 22.2;
  } else {
    // Zona obesidad: 77.7% a 100% — mapear IMC 30-45
    pct = 77.7 + ((imc - 30) / (45 - 30)) * 22.3;
  }

  pct = Math.min(98, Math.max(2, pct));
  document.getElementById('imc-indicador').style.left = pct + '%';

  const res = document.getElementById('res-imc');
  res.style.display = 'block';
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── 1RM ──
function calcular1RM() {
  const pesoEl = document.getElementById('rm-peso');
  const repsEl = document.getElementById('rm-reps');

  if (!pesoEl.value || !repsEl.value) {
    mostrarError('error-1rm', [pesoEl, repsEl]);
    return;
  }

  const errEl = document.getElementById('error-1rm');
  errEl.classList.remove('visible');
  errEl.textContent = '⚠️ Completá todos los campos para calcular.';

  const peso = parseFloat(pesoEl.value);
  const reps = parseFloat(repsEl.value);

  if (reps > 30) {
    repsEl.classList.add('campo-error');
    errEl.textContent = '⚠️ Las reps no pueden superar 30 para una estimación confiable.';
    errEl.classList.add('visible');
    return;
  }

  if (reps < 1) {
    repsEl.classList.add('campo-error');
    errEl.textContent = '⚠️ Las reps tienen que ser al menos 1.';
    errEl.classList.add('visible');
    return;
  }

  // Fórmula de Epley
  const rm = Math.round(peso * (1 + reps / 30));

  document.getElementById('rm-1rm').textContent = rm + ' kg';
  document.getElementById('rm-90').textContent  = Math.round(rm * 0.95) + ' kg';
  document.getElementById('rm-85').textContent  = Math.round(rm * 0.85) + ' kg';
  document.getElementById('rm-72').textContent  = Math.round(rm * 0.72) + ' kg';
  document.getElementById('rm-57').textContent  = Math.round(rm * 0.57) + ' kg';

  const ejercicio = document.getElementById('rm-ejercicio').value;
  const titulo = document.querySelector('.rm-tabla-titulo');
  if (titulo) {
    titulo.textContent = ejercicio
      ? `Cargas recomendadas — ${ejercicio}`
      : 'Cargas recomendadas por objetivo';
  }

  const res = document.getElementById('res-1rm');
  res.style.display = 'block';
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── AGUA ──
function calcularAgua() {
  const pesoEl = document.getElementById('agua-peso');

  if (!pesoEl.value) {
    mostrarError('error-agua', [pesoEl]);
    return;
  }

  document.getElementById('error-agua').classList.remove('visible');

  const peso      = parseFloat(pesoEl.value);
  const actividad = parseFloat(document.getElementById('agua-actividad').value);
  const clima     = parseFloat(document.getElementById('agua-clima').value);

  const base   = peso * 0.033;
  const litros = Math.round(base * actividad * clima * 10) / 10;
  const vasos  = Math.round(litros / 0.25);
  const extra  = actividad > 1.2 ? '0.5 — 1L' : '—';

  document.getElementById('agua-litros').textContent      = litros + 'L';
  document.getElementById('agua-vasos').textContent       = vasos + ' vasos';
  document.getElementById('agua-entrenamiento').textContent = extra;

  const res = document.getElementById('res-agua');
  res.style.display = 'block';
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── TIMER ──
let timerSegundos    = 90;
let timerRestantes   = 90;
let timerInterval    = null;
let timerCorriendo   = false;

function setTimer(seg) {
  resetTimer();
  timerSegundos  = seg;
  timerRestantes = seg;
  actualizarDisplayTimer();
  document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

function setTimerCustom() {
  const val = parseInt(document.getElementById('timer-custom-seg').value);
  if (!val || val < 5 || val > 600) return;
  resetTimer();
  timerSegundos  = val;
  timerRestantes = val;
  actualizarDisplayTimer();
  document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
}

function toggleTimer() {
  if (timerCorriendo) {
    pausarTimer();
  } else {
    iniciarTimer();
  }
}

function iniciarTimer() {
  if (timerRestantes <= 0) resetTimer();
  timerCorriendo = true;
  document.getElementById('timerStartBtn').textContent = '⏸ Pausar';
  document.getElementById('timerStartBtn').classList.add('pausado');
  document.getElementById('timerStatus').textContent = 'Descansando...';

  timerInterval = setInterval(() => {
    timerRestantes--;
    actualizarDisplayTimer();
    if (timerRestantes <= 0) {
      clearInterval(timerInterval);
      timerCorriendo = false;
      timerTerminado();
    }
  }, 1000);
}

function pausarTimer() {
  clearInterval(timerInterval);
  timerCorriendo = false;
  document.getElementById('timerStartBtn').textContent = '▶ Continuar';
  document.getElementById('timerStartBtn').classList.remove('pausado');
  document.getElementById('timerStatus').textContent = 'Pausado';
}

function resetTimer() {
  clearInterval(timerInterval);
  timerCorriendo = false;
  timerRestantes = timerSegundos;
  actualizarDisplayTimer();
  document.getElementById('timerStartBtn').textContent = '▶ Iniciar';
  document.getElementById('timerStartBtn').classList.remove('pausado');
  document.getElementById('timerStatus').textContent = 'Listo';
  document.getElementById('timerDisplay').classList.remove('terminado');
  document.getElementById('timerBarra').style.width = '100%';
  document.getElementById('timerBarra').style.background = '#ff6a00';
}

function timerTerminado() {
  document.getElementById('timerDisplay').classList.add('terminado');
  document.getElementById('timerDisplay').textContent = '¡Listo!';
  document.getElementById('timerStatus').textContent = 'Tiempo cumplido';
  document.getElementById('timerStartBtn').textContent = '▶ Iniciar';
  document.getElementById('timerStartBtn').classList.remove('pausado');
  document.getElementById('timerBarra').style.width = '0%';
  document.getElementById('timerBarra').style.background = '#2a9d5c';

  // Sonido con Web Audio API — sin archivos externos
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 150, 300].forEach(delay => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.4, ctx.currentTime + delay / 1000);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay / 1000 + 0.3);
      osc.start(ctx.currentTime + delay / 1000);
      osc.stop(ctx.currentTime + delay / 1000 + 0.3);
    });
  } catch(e) {}
}

function actualizarDisplayTimer() {
  const min = Math.floor(timerRestantes / 60);
  const seg = timerRestantes % 60;
  document.getElementById('timerDisplay').textContent =
    `${String(min).padStart(2,'0')}:${String(seg).padStart(2,'0')}`;
  document.getElementById('timerDisplay').classList.remove('terminado');

  const pct = timerSegundos > 0 ? (timerRestantes / timerSegundos) * 100 : 0;
  document.getElementById('timerBarra').style.width = pct + '%';

  // Cambia a rojo cuando quedan menos de 10 segundos
  if (timerRestantes <= 10 && timerRestantes > 0) {
    document.getElementById('timerBarra').style.background = '#cf7a7a';
    document.getElementById('timerDisplay').style.color = '#cf7a7a';
  } else {
    document.getElementById('timerBarra').style.background = '#ff6a00';
    document.getElementById('timerDisplay').style.color = '#ff6a00';
  }
}