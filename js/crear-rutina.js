const respuestas = {
  dias: null,
  nivel: null,
  objetivo: null,
  equipo: null,
  prioridad: []
};

let stepActual = 1;
const totalSteps = 5;

// ── PROGRESS BAR ──
function initProgressBar() {
  const panel = document.getElementById('questionsPanel');
  if (!panel) return;
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  bar.id = 'progressBar';
  for (let i = 0; i < totalSteps; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    dot.id = `dot${i+1}`;
    bar.appendChild(dot);
  }
  panel.insertBefore(bar, panel.firstChild);
  updateProgress();
}

function updateProgress() {
  for (let i = 1; i <= totalSteps; i++) {
    const dot = document.getElementById(`dot${i}`);
    if (dot) dot.classList.toggle('done', i <= stepActual);
  }
}

// ── SELECCIÓN ──
function seleccionarOpcion(campo, valor, btn) {
  respuestas[campo] = valor;
  const step = btn.closest('.step');
  step.querySelectorAll('.opcion-btn:not(.multi-btn)').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  setTimeout(() => siguientePaso(), 300);
}

function toggleMulti(campo, valor, btn) {
  const aviso = document.getElementById('aviso-prioridad');
  if (aviso) aviso.style.display = 'none';

  if (valor === 'ninguno') {
    respuestas[campo] = [];
    btn.closest('.step').querySelectorAll('.multi-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    return;
  }

  const ningunoBtn = btn.closest('.step').querySelector('[onclick*="ninguno"]');
  if (ningunoBtn) ningunoBtn.classList.remove('selected');

  if (respuestas[campo].includes(valor)) {
    respuestas[campo] = respuestas[campo].filter(v => v !== valor);
    btn.classList.remove('selected');
  } else {
    respuestas[campo].push(valor);
    btn.classList.add('selected');
  }
}

// ── PASOS ──
function siguientePaso() {
  if (stepActual >= totalSteps) return;
  const actual    = document.getElementById(`step${stepActual}`);
  const siguiente = document.getElementById(`step${stepActual + 1}`);
  if (!actual || !siguiente) return;
  actual.classList.remove('active');
  stepActual++;
  siguiente.classList.add('active');
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverPaso() {
  if (stepActual <= 1) return;
  const actual   = document.getElementById(`step${stepActual}`);
  const anterior = document.getElementById(`step${stepActual - 1}`);
  if (!actual || !anterior) return;
  actual.classList.remove('active');
  stepActual--;
  anterior.classList.add('active');
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CUSTOM INPUTS ──
function cambiarCustomDias(delta) {
  const input = document.getElementById('custom-dias');
  if (!input) return;
  let val = parseInt(input.value) || 0;
  val = Math.min(7, Math.max(1, val + delta));
  input.value = val;
}

function validarInputDias(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
  let val = parseInt(input.value);
  if (isNaN(val)) return;
  if (val < 1) input.value = 1;
  if (val > 7) input.value = 7;
}

function agregarCustomDias() {
  const input = document.getElementById('custom-dias');
  const val = parseInt(input.value.trim());
  if (!val || isNaN(val) || val < 1 || val > 7) {
    input.style.borderColor = '#ff6a00';
    input.placeholder = 'Ingresá entre 1 y 7 días';
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'Número del 1 al 7';
    }, 2500);
    input.value = '';
    return;
  }
  respuestas.dias = String(val);
  document.querySelectorAll('#step1 .opcion-btn:not(.multi-btn)').forEach(b => b.classList.remove('selected'));
  input.value = '';
  setTimeout(() => siguientePaso(), 300);
}

function agregarCustomNivel() {
  const input = document.getElementById('custom-nivel');
  const val = input.value.trim();
  if (!val || val.length < 2) {
    input.style.borderColor = '#ff6a00';
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  respuestas.nivel = 'intermedio';
  document.querySelectorAll('#step2 .opcion-btn:not(.multi-btn)').forEach(b => b.classList.remove('selected'));
  input.value = '';
  setTimeout(() => siguientePaso(), 300);
}

function agregarCustomObjetivo() {
  const input = document.getElementById('custom-objetivo');
  const val = input.value.trim();
  if (!val || val.length < 2) {
    input.style.borderColor = '#ff6a00';
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  respuestas.objetivo = 'general';
  document.querySelectorAll('#step3 .opcion-btn:not(.multi-btn)').forEach(b => b.classList.remove('selected'));
  input.value = '';
  setTimeout(() => siguientePaso(), 300);
}

function agregarCustomEquipo() {
  const input = document.getElementById('custom-equipo');
  const val = input.value.trim();
  if (!val || val.length < 2) {
    input.style.borderColor = '#ff6a00';
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  respuestas.equipo = 'gym_completo';
  document.querySelectorAll('#step4 .opcion-btn:not(.multi-btn)').forEach(b => b.classList.remove('selected'));
  input.value = '';
  setTimeout(() => siguientePaso(), 300);
}

function agregarCustom() {
  const input = document.getElementById('prioridadCustom');
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  const aviso = document.getElementById('aviso-prioridad');
  if (aviso) aviso.style.display = 'none';
  if (!respuestas.prioridad.includes(val)) {
    respuestas.prioridad.push(val);
    const tag = document.createElement('button');
    tag.className = 'opcion-btn multi-btn selected';
    tag.innerHTML = val + ' <span style="font-size:10px;opacity:0.7">✕</span>';
    tag.type = 'button';
    tag.onclick = function() {
      respuestas.prioridad = respuestas.prioridad.filter(v => v !== val);
      tag.remove();
    };
    document.getElementById('prioridadOpciones').appendChild(tag);
  }
  input.value = '';
}

// Enter en inputs
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') return;
  const active = document.querySelector('.step.active');
  if (!active) return;
  const stepId = active.id;
  if (stepId === 'step1')      agregarCustomDias();
  else if (stepId === 'step2') agregarCustomNivel();
  else if (stepId === 'step3') agregarCustomObjetivo();
  else if (stepId === 'step4') agregarCustomEquipo();
  else if (stepId === 'step5') agregarCustom();
});

// ── LÓGICA DE RUTINA ──
function elegirEstructura() {
  const d  = parseInt(respuestas.dias);
  const eq = respuestas.equipo;
  if (eq === 'calistenia') return 'calistenia';
  if (d <= 2)  return 'full_body';
  if (d === 3) return respuestas.nivel === 'principiante' ? 'full_body' : 'ppl_3';
  if (d === 4) return 'upper_lower_4';
  if (d === 5) return 'ppl_upper_lower_5';
  if (d >= 6)  return respuestas.nivel === 'avanzado' ? 'ppl_6' : 'arnold_6';
  return 'full_body';
}

function getRutinaNombre(e) {
  const nombres = {
    full_body: 'Full Body', ppl_3: 'Push Pull Legs — 3 días',
    upper_lower_4: 'Upper/Lower — 4 días', ppl_upper_lower_5: 'PPL + Upper/Lower — 5 días',
    ppl_6: 'PPL — 6 días', arnold_6: 'Arnold Split — 6 días', calistenia: 'Calistenia — Peso Corporal'
  };
  return nombres[e] || 'Rutina Personalizada';
}

function getTipo(e) {
  const tipos = {
    full_body: 'Full Body', ppl_3: 'PPL', upper_lower_4: 'Upper/Lower',
    ppl_upper_lower_5: 'PPL + Upper/Lower', ppl_6: 'PPL', arnold_6: 'Arnold Split', calistenia: 'Peso Corporal'
  };
  return tipos[e] || 'Personalizada';
}

function getDescripcion(estructura) {
  const prior = respuestas.prioridad.length > 0 ? respuestas.prioridad.join(', ') : null;
  const base = {
    full_body: 'Rutina de cuerpo completo que trabaja todos los grupos musculares en cada sesión. Ideal para maximizar la frecuencia de entrenamiento.',
    ppl_3: 'Dividís el entrenamiento en empuje, tirón y piernas. Cada músculo trabaja una vez por semana con alto volumen por sesión.',
    upper_lower_4: 'Alternás tren superior e inferior. Cada grupo muscular trabaja dos veces por semana con buena recuperación entre sesiones.',
    ppl_upper_lower_5: 'Combinación de PPL y Upper/Lower para 5 días. Alta frecuencia con volumen moderado por sesión.',
    ppl_6: 'PPL de alta frecuencia. Cada grupo muscular trabaja dos veces por semana con alto volumen total semanal.',
    arnold_6: 'La división clásica de Arnold. Pecho y espalda juntos por efecto antagónico, hombros y brazos, y piernas independiente.',
    calistenia: 'Rutina completa usando solo el peso corporal. Perfecta para entrenar en casa o al aire libre sin equipamiento.',
  }[estructura] || '';
  if (prior) return base + ` Se priorizan: ${prior}.`;
  return base;
}

function getNotaFinal(estructura) {
  const notas = {
    full_body: 'Aplicá sobrecarga progresiva — subí el peso cuando llegás al límite superior de reps con buena técnica.',
    ppl_3: 'Con 3 días cada músculo trabaja una vez por semana — asegurate de que cada sesión sea intensa.',
    upper_lower_4: 'Lunes Upper A, Martes Lower A, Jueves Upper B, Viernes Lower B.',
    ppl_upper_lower_5: 'Lunes Push, Martes Pull, Miércoles Legs, Jueves Upper, Viernes Lower.',
    ppl_6: 'Lunes Push A, Martes Pull A, Miércoles Legs A, Jueves Push B, Viernes Pull B, Sábado Legs B.',
    arnold_6: 'Lunes-Martes-Miércoles / Jueves-Viernes-Sábado. Domingo descanso obligatorio.',
    calistenia: 'Para progresar aumentás las reps, bajás el descanso, o buscás variantes más difíciles del mismo ejercicio.',
  };
  return notas[estructura] || 'Aplicá sobrecarga progresiva y priorizá el descanso.';
}

// ── ANÁLISIS DE PERFIL ──
function getAnalisisPerfil() {
  const msgs = [];

  if (respuestas.nivel === 'principiante') {
    msgs.push('🟢 Como principiante, el foco está en aprender la técnica correcta antes de subir peso. Las series son conservadoras intencionalmente.');
  } else if (respuestas.nivel === 'intermedio') {
    msgs.push('🟡 Nivel intermedio: ya podés trabajar cerca del fallo en algunos ejercicios de aislamiento. Los compuestos con RIR 2.');
  } else {
    msgs.push('🔴 Nivel avanzado: alta intensidad, series cerca del fallo. Priorizá la recuperación y el sueño.');
  }

  if (respuestas.objetivo === 'volumen') {
    msgs.push('💪 Para ganar masa: comé en superávit calórico (~300 kcal sobre tu mantenimiento) y priorizá la proteína (1.8-2g por kg).');
  } else if (respuestas.objetivo === 'fuerza') {
    msgs.push('🏋️ Para ganar fuerza: los descansos largos entre series son clave. No los acortes aunque te sientas bien.');
  } else if (respuestas.objetivo === 'estetica') {
    msgs.push('✨ Para estética: el volumen de hombros y la espalda ancha hacen la diferencia visual. Las laterales son clave.');
  } else {
    msgs.push('⚖️ Fitness general: la consistencia importa más que la perfección. Entrenás bien cuando entrenás seguido.');
  }

  if (respuestas.equipo === 'calistenia') {
    msgs.push('🤸 Sin equipamiento: para progresar aumentás las reps, reducís el descanso o buscás variantes más difíciles.');
  } else if (respuestas.equipo === 'mancuernas') {
    msgs.push('🏠 En casa: aprovechá el tiempo bajo tensión y el rango de movimiento completo para compensar la falta de máquinas.');
  }

  if (respuestas.prioridad.length > 0 && !respuestas.prioridad.includes('ninguno')) {
    msgs.push(`⭐ Músculos priorizados (${respuestas.prioridad.join(', ')}): tienen una serie extra en los ejercicios correspondientes de tu rutina.`);
  }

  return msgs;
}

// ── HELPERS EJERCICIOS ──
function getSeries(tipo) {
  const n = respuestas.nivel;
  const o = respuestas.objetivo;
  if (tipo === 'compuesto') {
    if (n === 'principiante') return '3x12';
    if (n === 'intermedio')   return o === 'fuerza' ? '4x5-6' : '4x8-10';
    return o === 'fuerza' ? '5x3-5' : '4x6-8';
  }
  if (tipo === 'aislamiento') {
    if (n === 'principiante') return '3x15';
    if (n === 'intermedio')   return '3x10-12';
    return '4x10-12';
  }
  return '3x20';
}

function getDescanso(tipo) {
  const n = respuestas.nivel;
  if (tipo === 'compuesto') {
    if (n === 'principiante') return '90s';
    if (n === 'intermedio')   return '2min';
    return '2-3min';
  }
  return '60s';
}

function getNota(musculo, tipo) {
  const n = respuestas.nivel;
  if (n === 'principiante') return musculo;
  if (tipo === 'compuesto')  return `${musculo} — RIR 2`;
  return `${musculo} — última serie al fallo`;
}

function hasPrioridad(musculo) {
  return respuestas.prioridad.length > 0 &&
    respuestas.prioridad.some(p => musculo.toLowerCase().includes(p));
}

function extraSeries(series) {
  const match = series.match(/^(\d+)x/);
  if (!match) return series;
  return series.replace(/^\d+/, (parseInt(match[1]) + 1).toString());
}

function ex(nombre, musculo, tipo) {
  const s = hasPrioridad(musculo) ? extraSeries(getSeries(tipo)) : getSeries(tipo);
  return { nombre, series: s, descanso: getDescanso(tipo), nota: getNota(musculo, tipo) };
}

// ── PROGRAMAS ──
function programa_full_body() {
  const d = parseInt(respuestas.dias);
  const programa = [{
    dia: 'Día 1 — Full Body A', ejercicios: [
      ex('Sentadilla con barra',                 'Cuádriceps, glúteos',                'compuesto'),
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Remo con barra',                       'Dorsal, trapecio',                   'compuesto'),
      ex('Press militar con mancuernas',         'Deltoides anterior y lateral',        'compuesto'),
      ex('Curl con barra EZ',                    'Bíceps',                             'aislamiento'),
      ex('Extensión en polea soga',              'Tríceps',                            'aislamiento'),
      ex('Plancha frontal',                      'Core',                               'aislamiento'),
    ]
  }];
  if (d >= 2) programa.push({ dia: 'Día 2 — Full Body B', ejercicios: [
    ex('Peso muerto',                            'Erector espinal, dorsales, glúteos', 'compuesto'),
    ex('Press inclinado con mancuernas',         'Pectoral superior',                  'compuesto'),
    ex('Jalón dorsal con barra agarre ancho',    'Dorsal ancho',                       'compuesto'),
    ex('Vuelos laterales con mancuernas',        'Deltoides lateral',                  'aislamiento'),
    ex('Curl alterno con mancuernas',            'Bíceps',                             'aislamiento'),
    ex('Fondos en paralelas (tríceps)',          'Tríceps general',                    'aislamiento'),
    ex('Crunch abdominal',                       'Recto abdominal',                    'aislamiento'),
  ]});
  if (d >= 3) programa.push({ dia: 'Día 3 — Full Body C', ejercicios: [
    ex('Prensa de piernas',                      'Cuádriceps, glúteos',                'compuesto'),
    ex('Fondos en paralelas (pecho)',            'Pectoral inferior, tríceps',          'compuesto'),
    ex('Dominadas agarre ancho',                 'Dorsal ancho',                       'compuesto'),
    ex('Remo al mentón con barra',               'Deltoides lateral, trapecio',         'aislamiento'),
    ex('Curl concentrado con mancuerna',         'Bíceps cabeza corta',                'aislamiento'),
    ex('Extensión en polea overhead',            'Tríceps cabeza larga',               'aislamiento'),
  ]});
  return programa;
}

function programa_ppl_3() {
  return [
    { dia: 'Día 1 — Push (Pecho, Hombros, Tríceps)', ejercicios: [
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Press inclinado con mancuernas',       'Pectoral superior',                  'compuesto'),
      ex('Press militar con barra',              'Deltoides anterior y lateral',        'compuesto'),
      ex('Vuelos laterales con mancuernas',      'Deltoides lateral',                  'aislamiento'),
      ex('Cruce de poleas al pecho',             'Pectoral medio',                     'aislamiento'),
      ex('Extensión en polea soga',              'Tríceps',                            'aislamiento'),
    ]},
    { dia: 'Día 2 — Pull (Espalda, Bíceps)', ejercicios: [
      ex('Peso muerto',                          'Erector espinal, dorsales',           'compuesto'),
      ex('Jalón dorsal con barra agarre ancho',  'Dorsal ancho',                       'compuesto'),
      ex('Remo con barra',                       'Dorsal, trapecio medio',             'compuesto'),
      ex('Remo en polea baja agarre cerrado',    'Dorsal, romboides',                  'aislamiento'),
      ex('Face Pull en polea',                   'Deltoides posterior, trapecio',      'aislamiento'),
      ex('Curl con barra EZ',                    'Bíceps',                             'aislamiento'),
    ]},
    { dia: 'Día 3 — Legs (Piernas y Glúteos)', ejercicios: [
      ex('Sentadilla con barra',                 'Cuádriceps, glúteos',                'compuesto'),
      ex('Prensa de piernas',                    'Cuádriceps, glúteos',                'compuesto'),
      ex('Hip Thrust con barra',                 'Glúteo mayor',                       'compuesto'),
      ex('Extensión de pierna en máquina',       'Cuádriceps',                         'aislamiento'),
      ex('Curl nórdico',                         'Isquiotibiales',                     'aislamiento'),
      ex('Plancha frontal',                      'Core',                               'aislamiento'),
    ]},
  ];
}

function programa_upper_lower_4() {
  return [
    { dia: 'Día 1 — Upper A (Fuerza)', ejercicios: [
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Remo con barra',                       'Dorsal, trapecio',                   'compuesto'),
      ex('Press militar con barra',              'Deltoides anterior y lateral',        'compuesto'),
      ex('Dominadas agarre ancho',               'Dorsal ancho',                       'compuesto'),
      ex('Curl con barra EZ',                    'Bíceps',                             'aislamiento'),
      ex('Press cerrado con barra',              'Tríceps general',                    'aislamiento'),
    ]},
    { dia: 'Día 2 — Lower A (Cuádriceps)', ejercicios: [
      ex('Sentadilla con barra',                 'Cuádriceps, glúteos',                'compuesto'),
      ex('Prensa de piernas',                    'Cuádriceps, glúteos',                'compuesto'),
      ex('Extensión de pierna en máquina',       'Cuádriceps',                         'aislamiento'),
      ex('Curl nórdico',                         'Isquiotibiales',                     'aislamiento'),
      ex('Plancha frontal',                      'Core',                               'aislamiento'),
    ]},
    { dia: 'Día 3 — Upper B (Volumen)', ejercicios: [
      ex('Press inclinado con mancuernas',       'Pectoral superior',                  'compuesto'),
      ex('Jalón dorsal con barra agarre ancho',  'Dorsal ancho',                       'compuesto'),
      ex('Aperturas planas con mancuernas',      'Pectoral medio',                     'aislamiento'),
      ex('Remo con mancuerna a una mano',        'Dorsal, romboides',                  'aislamiento'),
      ex('Vuelos laterales con mancuernas',      'Deltoides lateral',                  'aislamiento'),
      ex('Curl alterno con mancuernas',          'Bíceps',                             'aislamiento'),
      ex('Extensión en polea overhead',          'Tríceps cabeza larga',               'aislamiento'),
    ]},
    { dia: 'Día 4 — Lower B (Glúteos e Isquios)', ejercicios: [
      ex('Peso muerto',                          'Erector espinal, dorsales, glúteos', 'compuesto'),
      ex('Hip Thrust con barra',                 'Glúteo mayor',                       'compuesto'),
      ex('Hack squat',                           'Cuádriceps',                         'compuesto'),
      ex('Zancadas con mancuernas',              'Cuádriceps, glúteos',                'aislamiento'),
      ex('Crunch inverso',                       'Recto abdominal inferior',           'aislamiento'),
    ]},
  ];
}

function programa_ppl_upper_lower_5() {
  return [
    { dia: 'Día 1 — Push', ejercicios: [
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Press inclinado con mancuernas',       'Pectoral superior',                  'compuesto'),
      ex('Press militar con barra',              'Deltoides anterior y lateral',        'compuesto'),
      ex('Vuelos laterales con mancuernas',      'Deltoides lateral',                  'aislamiento'),
      ex('Extensión en polea soga',              'Tríceps',                            'aislamiento'),
    ]},
    { dia: 'Día 2 — Pull', ejercicios: [
      ex('Peso muerto',                          'Erector espinal, dorsales',           'compuesto'),
      ex('Jalón dorsal con barra agarre ancho',  'Dorsal ancho',                       'compuesto'),
      ex('Remo con barra',                       'Dorsal, trapecio',                   'compuesto'),
      ex('Face Pull en polea',                   'Deltoides posterior, trapecio',      'aislamiento'),
      ex('Curl con barra EZ',                    'Bíceps',                             'aislamiento'),
    ]},
    { dia: 'Día 3 — Legs', ejercicios: [
      ex('Sentadilla con barra',                 'Cuádriceps, glúteos',                'compuesto'),
      ex('Hip Thrust con barra',                 'Glúteo mayor',                       'compuesto'),
      ex('Extensión de pierna en máquina',       'Cuádriceps',                         'aislamiento'),
      ex('Curl nórdico',                         'Isquiotibiales',                     'aislamiento'),
      ex('Plancha frontal',                      'Core',                               'aislamiento'),
    ]},
    { dia: 'Día 4 — Upper', ejercicios: [
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Dominadas agarre ancho',               'Dorsal ancho',                       'compuesto'),
      ex('Press militar con barra',              'Deltoides anterior y lateral',        'compuesto'),
      ex('Remo en polea baja agarre cerrado',    'Dorsal, romboides',                  'aislamiento'),
      ex('Curl alterno con mancuernas',          'Bíceps',                             'aislamiento'),
      ex('Press cerrado con barra',              'Tríceps general',                    'aislamiento'),
    ]},
    { dia: 'Día 5 — Lower', ejercicios: [
      ex('Prensa de piernas',                    'Cuádriceps, glúteos',                'compuesto'),
      ex('Hip Thrust con barra',                 'Glúteo mayor',                       'compuesto'),
      ex('Zancadas con mancuernas',              'Cuádriceps, glúteos',                'aislamiento'),
      ex('Crunch abdominal',                     'Recto abdominal',                    'aislamiento'),
      ex('Elevación de piernas colgado',         'Recto abdominal inferior',           'aislamiento'),
    ]},
  ];
}

function programa_ppl_6() {
  return [
    { dia: 'Día 1 — Push A (Fuerza)', ejercicios: [
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Press inclinado con barra',            'Pectoral superior',                  'compuesto'),
      ex('Press militar con barra',              'Deltoides anterior y lateral',        'compuesto'),
      ex('Vuelos laterales con mancuernas',      'Deltoides lateral',                  'aislamiento'),
      ex('Extensión en polea soga',              'Tríceps',                            'aislamiento'),
      ex('Rompecráneos con barra',               'Tríceps cabeza larga y lateral',     'aislamiento'),
    ]},
    { dia: 'Día 2 — Pull A (Fuerza)', ejercicios: [
      ex('Peso muerto',                          'Erector espinal, dorsales',           'compuesto'),
      ex('Dominadas agarre ancho',               'Dorsal ancho',                       'compuesto'),
      ex('Remo con barra',                       'Dorsal, trapecio',                   'compuesto'),
      ex('Face Pull en polea',                   'Deltoides posterior, trapecio',      'aislamiento'),
      ex('Curl con barra EZ',                    'Bíceps',                             'aislamiento'),
      ex('Curl martillo con mancuernas',         'Braquial, braquiorradial',           'aislamiento'),
    ]},
    { dia: 'Día 3 — Legs A (Cuádriceps)', ejercicios: [
      ex('Sentadilla con barra',                 'Cuádriceps, glúteos',                'compuesto'),
      ex('Prensa de piernas',                    'Cuádriceps, glúteos',                'compuesto'),
      ex('Extensión de pierna en máquina',       'Cuádriceps',                         'aislamiento'),
      ex('Zancadas con mancuernas',              'Cuádriceps, glúteos',                'aislamiento'),
      ex('Plancha frontal',                      'Core',                               'aislamiento'),
    ]},
    { dia: 'Día 4 — Push B (Volumen)', ejercicios: [
      ex('Press inclinado con mancuernas',       'Pectoral superior',                  'compuesto'),
      ex('Cruce de poleas al pecho',             'Pectoral medio',                     'aislamiento'),
      ex('Pec Deck (Contractora)',               'Pectoral medio',                     'aislamiento'),
      ex('Vuelos laterales en polea baja con tobillera', 'Deltoides lateral',         'aislamiento'),
      ex('Extensión en polea overhead',          'Tríceps cabeza larga',               'aislamiento'),
      ex('Patada de tríceps con mancuerna',      'Tríceps cabeza lateral',             'aislamiento'),
    ]},
    { dia: 'Día 5 — Pull B (Volumen)', ejercicios: [
      ex('Jalón dorsal con agarre cerrado',      'Dorsal ancho, romboides',            'compuesto'),
      ex('Remo en polea baja agarre cerrado',    'Dorsal, romboides',                  'aislamiento'),
      ex('Remo con mancuerna a una mano',        'Dorsal, romboides',                  'aislamiento'),
      ex('Pullover en polea',                    'Dorsal ancho, serrato',              'aislamiento'),
      ex('Curl inclinado con mancuernas',        'Bíceps cabeza larga',                'aislamiento'),
      ex('Curl concentrado con mancuerna',       'Bíceps cabeza corta',                'aislamiento'),
    ]},
    { dia: 'Día 6 — Legs B (Glúteos e Isquios)', ejercicios: [
      ex('Hip Thrust con barra',                 'Glúteo mayor',                       'compuesto'),
      ex('Hack squat',                           'Cuádriceps',                         'compuesto'),
      ex('Curl nórdico',                         'Isquiotibiales',                     'aislamiento'),
      ex('Zancadas con mancuernas',              'Cuádriceps, glúteos',                'aislamiento'),
      ex('Crunch abdominal',                     'Recto abdominal',                    'aislamiento'),
      ex('Elevación de piernas colgado',         'Recto abdominal inferior',           'aislamiento'),
    ]},
  ];
}

function programa_arnold_6() {
  return [
    { dia: 'Día 1 y 4 — Pecho y Espalda', ejercicios: [
      ex('Press banca plano con barra',          'Pectoral medio',                     'compuesto'),
      ex('Dominadas agarre ancho',               'Dorsal ancho',                       'compuesto'),
      ex('Press inclinado con mancuernas',       'Pectoral superior',                  'compuesto'),
      ex('Remo con barra',                       'Dorsal, trapecio',                   'compuesto'),
      ex('Cruce de poleas al pecho',             'Pectoral medio',                     'aislamiento'),
      ex('Jalón dorsal con barra agarre ancho',  'Dorsal ancho',                       'aislamiento'),
      ex('Pullover con mancuerna',               'Pectoral superior, dorsal',          'aislamiento'),
    ]},
    { dia: 'Día 2 y 5 — Hombros y Brazos', ejercicios: [
      ex('Press militar con barra',              'Deltoides anterior y lateral',        'compuesto'),
      ex('Vuelos laterales con mancuernas',      'Deltoides lateral',                  'aislamiento'),
      ex('Face Pull en polea',                   'Deltoides posterior, trapecio',      'aislamiento'),
      ex('Curl con barra EZ',                    'Bíceps',                             'aislamiento'),
      ex('Curl alterno con mancuernas',          'Bíceps',                             'aislamiento'),
      ex('Rompecráneos con barra',               'Tríceps cabeza larga y lateral',     'aislamiento'),
      ex('Extensión en polea soga',              'Tríceps',                            'aislamiento'),
    ]},
    { dia: 'Día 3 y 6 — Piernas', ejercicios: [
      ex('Sentadilla con barra',                 'Cuádriceps, glúteos',                'compuesto'),
      ex('Prensa de piernas',                    'Cuádriceps, glúteos',                'compuesto'),
      ex('Extensión de pierna en máquina',       'Cuádriceps',                         'aislamiento'),
      ex('Hip Thrust con barra',                 'Glúteo mayor',                       'compuesto'),
      ex('Curl nórdico',                         'Isquiotibiales',                     'aislamiento'),
      ex('Crunch abdominal',                     'Recto abdominal',                    'aislamiento'),
    ]},
  ];
}

function programa_calistenia() {
  const d = parseInt(respuestas.dias);
  const push = { dia: 'Día 1 — Empuje', ejercicios: [
    ex('Flexiones clásicas (Push Ups)',          'Pectoral medio, tríceps',            'compuesto'),
    ex('Flexiones con pies elevados',            'Pectoral superior',                  'compuesto'),
    ex('Fondos en paralelas (pecho)',            'Pectoral inferior, tríceps',          'compuesto'),
    ex('Flexiones diamante (Diamond Push Ups)',  'Tríceps, pectoral',                  'aislamiento'),
    ex('Plancha frontal',                        'Core',                               'aislamiento'),
  ]};
  const pull = { dia: 'Día 2 — Tirón', ejercicios: [
    ex('Dominadas agarre ancho',                 'Dorsal ancho',                       'compuesto'),
    ex('Chin Ups (Dominadas supinas)',           'Dorsal ancho, bíceps',               'compuesto'),
    ex('Australian pull ups (Remo invertido)',   'Dorsal, romboides',                  'compuesto'),
    ex('Colgarse de barra (Dead Hang)',          'Antebrazos, dorsal',                 'aislamiento'),
    ex('Elevación de piernas colgado',           'Recto abdominal inferior',           'aislamiento'),
  ]};
  const legs = { dia: 'Día 3 — Piernas', ejercicios: [
    ex('Sentadilla (sin peso)',                  'Cuádriceps, glúteos',                'compuesto'),
    ex('Zancadas sin peso',                      'Cuádriceps, glúteos',                'compuesto'),
    ex('Hip Thrust con peso corporal',           'Glúteo mayor',                       'compuesto'),
    ex('Curl nórdico',                           'Isquiotibiales',                     'aislamiento'),
    ex('Plancha lateral',                        'Oblicuos',                           'aislamiento'),
  ]};

  const programa = [push];
  if (d >= 2) programa.push(pull);
  if (d >= 3) programa.push(legs);
  if (d >= 4) programa.push({ ...push, dia: 'Día 4 — Empuje (B)' });
  if (d >= 5) programa.push({ ...pull, dia: 'Día 5 — Tirón (B)' });
  if (d >= 6) programa.push({ ...legs, dia: 'Día 6 — Piernas (B)' });
  return programa;
}

// ── GENERAR ──
function generarRutina() {
  const aviso = document.getElementById('aviso-prioridad');
  const algunaMarcada = document.querySelectorAll('#step5 .opcion-btn.selected').length > 0;

  if (!algunaMarcada) {
    if (aviso) {
      aviso.style.display = 'block';
      aviso.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    return;
  }

  if (aviso) aviso.style.display = 'none';

  if (!respuestas.dias || !respuestas.nivel || !respuestas.objetivo || !respuestas.equipo) {
    alert('Completá todas las preguntas antes de continuar.');
    return;
  }

  document.getElementById('questionsPanel').style.display = 'none';
  const resultPanel = document.getElementById('resultadoPanel');
  resultPanel.style.display = 'block';
  resultPanel.innerHTML = `
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <div class="loading-texto">Analizando tu perfil...</div>
      <div class="loading-sub">Seleccionando los mejores ejercicios para vos</div>
    </div>
  `;

  setTimeout(() => {
    const estructura  = elegirEstructura();
    const nombre      = getRutinaNombre(estructura);
    const tipo        = getTipo(estructura);
    const descripcion = getDescripcion(estructura);
    const notaFinal   = getNotaFinal(estructura);

    let programa;
    switch (estructura) {
      case 'full_body':         programa = programa_full_body();         break;
      case 'ppl_3':             programa = programa_ppl_3();             break;
      case 'upper_lower_4':     programa = programa_upper_lower_4();     break;
      case 'ppl_upper_lower_5': programa = programa_ppl_upper_lower_5(); break;
      case 'ppl_6':             programa = programa_ppl_6();             break;
      case 'arnold_6':          programa = programa_arnold_6();          break;
      case 'calistenia':        programa = programa_calistenia();        break;
      default:                  programa = programa_full_body();
    }

    mostrarResultado({ nombre, tipo, descripcion, dias: programa, nota_final: notaFinal });
  }, 1800);
}

// ── MOSTRAR RESULTADO ──
function mostrarResultado(rutina) {
  const metaHTML = `
    <span class="res-tag">📅 ${respuestas.dias} días/semana</span>
    <span class="res-tag">${rutina.tipo}</span>
    <span class="res-tag">${respuestas.nivel.charAt(0).toUpperCase() + respuestas.nivel.slice(1)}</span>
    <span class="res-tag">${respuestas.objetivo}</span>
    ${respuestas.prioridad.length > 0 ? `<span class="res-tag">⭐ ${respuestas.prioridad.join(', ')}</span>` : ''}
  `;

  const analisis    = getAnalisisPerfil();
  const analisisHTML = `
    <div class="perfil-analisis">
      <div class="perfil-analisis-titulo">📋 Tu perfil de entrenamiento</div>
      ${analisis.map(m => `<div class="perfil-msg">${m}</div>`).join('')}
    </div>
  `;

  const programaHTML = rutina.dias.map(dia => `
    <div class="dia-bloque">
      <div class="dia-titulo">${dia.dia}</div>
      ${dia.ejercicios.map(ej => `
        <div class="ejercicio-row">
          <div class="ejercicio-nombre">
            ${ej.nombre}
            ${ej.nota ? `<span class="ejercicio-nota">${ej.nota}</span>` : ''}
          </div>
          <div class="ejercicio-series">${ej.series}</div>
          <div class="ejercicio-descanso">⏱ ${ej.descanso}</div>
        </div>
      `).join('')}
    </div>
  `).join('');

  document.getElementById('resultadoPanel').innerHTML = `
    <div class="resultado-header">
      <div class="resultado-titulo">${rutina.nombre}</div>
      <div class="resultado-meta">${metaHTML}</div>
    </div>
    <div style="font-size:13px;color:#888;line-height:1.7;margin-bottom:1.5rem">${rutina.descripcion}</div>
    ${analisisHTML}
    <div class="resultado-nota" style="margin-bottom:1.5rem">⚠️ Hacé 5-10 minutos de calentamiento antes de empezar. Las primeras series de compuestos hacélas con menos peso.</div>
    ${programaHTML}
    ${rutina.nota_final ? `<div class="resultado-nota">💡 ${rutina.nota_final}</div>` : ''}
    <div class="resultado-acciones">
      <button class="accion-btn" onclick="nuevaRutina()">🔄 Generar otra</button>
      <button class="accion-btn secundario" onclick="descargarRutina()">⬇️ Descargar rutina</button>
      <button class="accion-btn secundario" onclick="location.href='rutinas.html'">← Ver todas las rutinas</button>
    </div>
    <div class="ia-disclaimer">* La rutina se genera según tu perfil usando lógica de entrenamiento basada en principios de hipertrofia y fuerza.</div>
  `;
}

// ── DESCARGAR ──
function descargarRutina() {
  const titulo = document.querySelector('.resultado-titulo')?.textContent || 'Mi rutina';
  const dias   = document.querySelectorAll('.dia-bloque');

  let texto = `IRONCORE — ${titulo.toUpperCase()}\n`;
  texto += `Nivel: ${respuestas.nivel} | Días: ${respuestas.dias}/semana | Objetivo: ${respuestas.objetivo}\n`;
  texto += `${'='.repeat(50)}\n\n`;
  texto += `⚠️ Hacé 5-10 minutos de calentamiento antes de empezar.\n\n`;

  dias.forEach(bloque => {
    const t = bloque.querySelector('.dia-titulo')?.textContent || '';
    texto += `${t.toUpperCase()}\n${'-'.repeat(40)}\n`;
    bloque.querySelectorAll('.ejercicio-row').forEach(row => {
      const nombre   = row.querySelector('.ejercicio-nombre')?.childNodes[0]?.textContent?.trim() || '';
      const series   = row.querySelector('.ejercicio-series')?.textContent?.trim() || '';
      const descanso = row.querySelector('.ejercicio-descanso')?.textContent?.trim() || '';
      const nota     = row.querySelector('.ejercicio-nota')?.textContent?.trim() || '';
      texto += `• ${nombre}\n  Series: ${series} | ${descanso}\n`;
      if (nota) texto += `  ${nota}\n`;
    });
    texto += '\n';
  });

  texto += `${'='.repeat(50)}\nGenerado por IronCore\n`;

  const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'rutina-ironcore.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// ── NUEVA RUTINA ──
function nuevaRutina() {
  respuestas.dias      = null;
  respuestas.nivel     = null;
  respuestas.objetivo  = null;
  respuestas.equipo    = null;
  respuestas.prioridad = [];
  stepActual           = 1;

  document.getElementById('resultadoPanel').style.display = 'none';
  document.getElementById('resultadoPanel').innerHTML      = '';
  document.getElementById('questionsPanel').style.display = 'block';

  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step1').classList.add('active');
  document.querySelectorAll('.opcion-btn').forEach(b => b.classList.remove('selected'));

  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── INIT ──
initProgressBar();