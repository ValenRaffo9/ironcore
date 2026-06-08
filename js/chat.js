const WORKER_URL = 'https://ironcore-chat.v-n-raffo.workers.dev';

const PROMPTS = {
  es: `Sos un asistente experto en fitness, entrenamiento y nutrición deportiva llamado IronCore IA.
Tu rol es ayudar con rutinas de entrenamiento (PPL, Upper/Lower, Full Body, Arnold Split, etc.), técnica de ejercicios, nutrición deportiva (macros, calorías, timing de comidas), recuperación, descanso y suplementación básica.
Respondé siempre en español argentino (vos, acá, andá, etc.). Sé directo y práctico, sin rodeos. Usá ejemplos concretos.
Si algo requiere un profesional de salud (lesiones, enfermedades), recomendá consultar un médico o kinesiólogo. No des consejos médicos específicos.
Cuando sea útil usá listas o pasos numerados. Máximo 3-4 párrafos salvo que la pregunta requiera más detalle.
Si el usuario te pide crear un archivo (rutina, plan, tabla), generá el contenido completo con formato claro y avisale que puede descargarlo.`,

  en: `You are an expert fitness, training and sports nutrition assistant called IronCore AI.
Help users with workout routines (PPL, Upper/Lower, Full Body, Arnold Split, etc.), exercise technique, sports nutrition (macros, calories, meal timing), recovery, rest and basic supplementation.
Always respond in English. Be direct and practical, no fluff. Use concrete examples.
If something requires a health professional, recommend consulting a doctor or physiotherapist. Do not give specific medical advice.
Use lists or numbered steps when helpful. Maximum 3-4 paragraphs unless the question requires more detail.
If the user asks you to create a file (routine, plan, table), generate the complete content with clear formatting and let them know they can download it.`
};

let idiomaActual   = 'es';
let historial      = [{ role: 'system', content: PROMPTS.es }];
let esperando      = false;
let archivoAdjunto = null;
let ultimaRespuesta = '';

// ── IDIOMA ──
window.cambiarIdioma = function(lang) {
  idiomaActual = lang;
  historial[0] = { role: 'system', content: PROMPTS[lang] };

  const btnEs = document.getElementById('lang-es');
  const btnEn = document.getElementById('lang-en');
  if (!btnEs || !btnEn) return;

  btnEs.style.borderColor = lang === 'es' ? '#ff6a00' : '#1e1e1e';
  btnEs.style.background  = lang === 'es' ? 'rgba(255,106,0,0.1)' : '#141414';
  btnEs.style.color       = lang === 'es' ? '#ff6a00' : '#666';
  btnEn.style.borderColor = lang === 'en' ? '#ff6a00' : '#1e1e1e';
  btnEn.style.background  = lang === 'en' ? 'rgba(255,106,0,0.1)' : '#141414';
  btnEn.style.color       = lang === 'en' ? '#ff6a00' : '#666';
};

// ── ADJUNTAR ARCHIVO ──
window.adjuntarArchivo = async function(input) {
  const file = input.files[0];
  if (!file) return;

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    alert('El archivo no puede superar los 5MB.');
    input.value = '';
    return;
  }

  const preview  = document.getElementById('adjuntoPreview');
  const nombre   = document.getElementById('adjuntoNombre');
  nombre.textContent = `${file.name} (${(file.size / 1024).toFixed(0)}KB)`;
  preview.classList.add('visible');

  // Leer contenido si es texto
  if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
    const texto = await file.text();
    archivoAdjunto = { nombre: file.name, tipo: 'texto', contenido: texto.slice(0, 3000) };
  } else if (file.type.startsWith('image/')) {
    const base64 = await fileToBase64(file);
    archivoAdjunto = { nombre: file.name, tipo: 'imagen', contenido: base64, mimeType: file.type };
  } else {
    archivoAdjunto = { nombre: file.name, tipo: 'otro', contenido: null };
  }

  input.value = '';
};

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

window.quitarAdjunto = function() {
  archivoAdjunto = null;
  document.getElementById('adjuntoPreview').classList.remove('visible');
  document.getElementById('adjuntoNombre').textContent = '';
};

// ── RENDER MENSAJE ──
function renderMensaje(rol, texto, archivoInfo = null) {
  const mensajes = document.getElementById('chatMensajes');
  if (!mensajes) return;

  const bienvenida = mensajes.querySelector('.chat-bienvenida');
  if (bienvenida) bienvenida.remove();

  const esIA      = rol === 'assistant';
  const avatarTxt = esIA ? '🏋️' : '👤';
  const clase     = esIA ? 'ia' : 'usuario';

  const textoFormateado = texto
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```[\s\S]*?```/g, match => {
      const code = match.replace(/```\w*\n?/g, '').replace(/```/g, '');
      return `<pre style="background:#0d0d0d;border:1px solid #1e1e1e;border-radius:8px;padding:12px;font-size:12px;overflow-x:auto;margin:8px 0;font-family:monospace;color:#ccc">${code}</pre>`;
    })
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  const archivoHTML = archivoInfo ? `
    <div class="chat-msg-archivo">
      <span class="chat-archivo-icono">📎</span>
      <span class="chat-archivo-nombre">${archivoInfo.nombre}</span>
    </div>
  ` : '';

  // Si es respuesta de IA, detectar si tiene contenido descargable
  const tieneContenido = esIA && (
    texto.includes('RUTINA') || texto.includes('PLAN') ||
    texto.includes('TABLA') || texto.toLowerCase().includes('acá te')  ||
    texto.toLowerCase().includes('te dejo') || texto.toLowerCase().includes('here is') ||
    texto.toLowerCase().includes('here\'s')
  );

  const descargaHTML = tieneContenido ? `
    <button onclick="descargarRespuesta()" style="
      margin-top:10px;padding:7px 16px;background:#141414;border:1px solid #ff6a00;
      border-radius:8px;color:#ff6a00;font-size:12px;font-weight:bold;cursor:pointer;
      font-family:'Poppins',sans-serif;transition:all 0.15s;display:block;
    " onmouseover="this.style.background='rgba(255,106,0,0.1)'"
       onmouseout="this.style.background='#141414'">
      ⬇️ Descargar como .txt
    </button>
  ` : '';

  const div     = document.createElement('div');
  div.className = `chat-msg ${clase}`;
  div.innerHTML = `
    <div class="chat-msg-avatar">${avatarTxt}</div>
    <div class="chat-msg-burbuja">
      ${archivoHTML}
      <p>${textoFormateado}</p>
      ${descargaHTML}
    </div>
  `;

  if (esIA) ultimaRespuesta = texto;

  mensajes.appendChild(div);
  mensajes.scrollTop = mensajes.scrollHeight;
}

// ── DESCARGAR RESPUESTA ──
window.descargarRespuesta = function() {
  if (!ultimaRespuesta) return;
  const blob = new Blob([ultimaRespuesta], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `ironcore-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
};

// ── TYPING ──
function mostrarTyping() {
  const mensajes = document.getElementById('chatMensajes');
  if (!mensajes) return;
  const div     = document.createElement('div');
  div.className = 'chat-msg ia';
  div.id        = 'typingIndicator';
  div.innerHTML = `
    <div class="chat-msg-avatar">🏋️</div>
    <div class="chat-msg-burbuja chat-typing">
      <div class="chat-typing-dot"></div>
      <div class="chat-typing-dot"></div>
      <div class="chat-typing-dot"></div>
    </div>
  `;
  mensajes.appendChild(div);
  mensajes.scrollTop = mensajes.scrollHeight;
}

function quitarTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

// ── ENVIAR ──
window.enviarMensaje = async function() {
  if (esperando) return;
  if (!window.__chatUserId) return;

  const input = document.getElementById('chatInput');
  const texto = input.value.trim();
  if (!texto && !archivoAdjunto) return;

  const textoFinal = texto || '(archivo adjunto)';

  input.value        = '';
  input.style.height = 'auto';
  input.classList.remove('scrollable');
  esperando          = true;

  const btn    = document.getElementById('chatSendBtn');
  btn.disabled = true;

  const archivoParaMostrar = archivoAdjunto ? { nombre: archivoAdjunto.nombre } : null;
  renderMensaje('user', textoFinal, archivoParaMostrar);

  // Armar el mensaje para la API
  let mensajeContenido = textoFinal;
  if (archivoAdjunto?.tipo === 'texto') {
    mensajeContenido += `\n\n[Archivo adjunto: ${archivoAdjunto.nombre}]\n${archivoAdjunto.contenido}`;
  } else if (archivoAdjunto?.tipo === 'otro') {
    mensajeContenido += `\n\n[El usuario adjuntó el archivo: ${archivoAdjunto.nombre}]`;
  }

  historial.push({ role: 'user', content: mensajeContenido });
  quitarAdjunto();
  mostrarTyping();

  try {
    const mensajesParaAPI = archivoAdjunto?.tipo === 'imagen'
      ? [
          ...historial.slice(0, -1),
          {
            role: 'user',
            content: [
              { type: 'text', text: textoFinal },
              { type: 'image_url', image_url: { url: `data:${archivoAdjunto.mimeType};base64,${archivoAdjunto.contenido}` } }
            ]
          }
        ]
      : historial;

    const response = await fetch(WORKER_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ messages: mensajesParaAPI }),
    });

    const data      = await response.json();
    const respuesta = data.choices?.[0]?.message?.content
      || 'No pude procesar tu mensaje. Intentá de nuevo.';

    quitarTyping();
    renderMensaje('assistant', respuesta);
    historial.push({ role: 'assistant', content: respuesta });

  } catch(e) {
    quitarTyping();
    renderMensaje('assistant', idiomaActual === 'es'
      ? 'Hubo un error de conexión. Revisá tu internet e intentá de nuevo.'
      : 'Connection error. Check your internet and try again.');
    console.error('Error chat:', e);
  }

  esperando    = false;
  btn.disabled = false;
  input.focus();
};

// ── HISTORIAL POR USUARIO ──
function getHistorialKey() {
  return `ironcore_chat_historial_${window.__chatUserId || 'anonimo'}`;
}

function guardarHistorialLocal() {
  const paraGuardar = historial.filter(m => m.role !== 'system');
  if (paraGuardar.length < 2) return;

  const conversaciones = JSON.parse(localStorage.getItem(getHistorialKey()) || '[]');
  const primeraMsg     = typeof paraGuardar[0]?.content === 'string'
    ? paraGuardar[0].content
    : '[imagen adjunta]';

  const nueva = {
    id:       Date.now(),
    idioma:   idiomaActual,
    fecha:    new Date().toLocaleDateString('es-AR'),
    preview:  primeraMsg.split(' ').slice(0, 7).join(' ') + '...',
    mensajes: paraGuardar.map(m => ({
      role:    m.role,
      content: typeof m.content === 'string' ? m.content : '[archivo]'
    })),
  };

  conversaciones.unshift(nueva);
  localStorage.setItem(getHistorialKey(), JSON.stringify(conversaciones.slice(0, 10)));
  renderHistorialChat();
}

window.renderHistorialChat = function() {
  const container      = document.getElementById('chatHistorial');
  if (!container) return;
  const conversaciones = JSON.parse(localStorage.getItem(getHistorialKey()) || '[]');

  if (!conversaciones.length) {
    container.innerHTML = '<div style="font-size:12px;color:#444;padding:8px 0">Sin conversaciones guardadas</div>';
    return;
  }

  container.innerHTML = conversaciones.map((c, i) => `
    <div class="historial-item-chat">
      <div onclick="cargarConversacion(${i})" style="flex:1;cursor:pointer;min-width:0">
        <div class="historial-item-chat-fecha">${c.fecha} · ${c.idioma?.toUpperCase() || 'ES'}</div>
        <div class="historial-item-chat-preview">${c.preview}</div>
      </div>
      <button onclick="borrarConversacion(${i})" style="
        background:none;border:none;color:#333;cursor:pointer;
        font-size:12px;padding:2px 4px;transition:color 0.15s;flex-shrink:0;
      " onmouseover="this.style.color='#cf7a7a'"
         onmouseout="this.style.color='#333'">✕</button>
    </div>
  `).join('');
};

window.borrarConversacion = function(idx) {
  const conversaciones = JSON.parse(localStorage.getItem(getHistorialKey()) || '[]');
  conversaciones.splice(idx, 1);
  localStorage.setItem(getHistorialKey(), JSON.stringify(conversaciones));
  renderHistorialChat();
};

window.cargarConversacion = function(idx) {
  const conversaciones = JSON.parse(localStorage.getItem(getHistorialKey()) || '[]');
  const c = conversaciones[idx];
  if (!c) return;

  historial    = [{ role: 'system', content: PROMPTS[c.idioma || 'es'] }, ...c.mensajes];
  idiomaActual = c.idioma || 'es';
  cambiarIdioma(idiomaActual);

  const mensajes = document.getElementById('chatMensajes');
  if (!mensajes) return;
  mensajes.innerHTML = '';
  c.mensajes.forEach(m => renderMensaje(m.role, m.content));
};

window.nuevaConversacion = function() {
  if (historial.filter(m => m.role !== 'system').length >= 2) {
    guardarHistorialLocal();
  }
  historial = [{ role: 'system', content: PROMPTS[idiomaActual] }];
  const mensajes = document.getElementById('chatMensajes');
  if (!mensajes) return;
  mensajes.innerHTML = `
    <div class="chat-bienvenida">
      <div class="chat-bienvenida-icono">🏋️</div>
      <div class="chat-bienvenida-titulo">${idiomaActual === 'es' ? '¿En qué te puedo ayudar?' : 'How can I help you?'}</div>
      <div class="chat-bienvenida-sub">${idiomaActual === 'es'
        ? 'Soy tu asistente de entrenamiento. Preguntame sobre rutinas, nutrición, técnica o recuperación.'
        : 'I am your training assistant. Ask me about routines, nutrition, technique or recovery.'
      }</div>
    </div>
  `;
};

// ── HELPERS ──
window.handleChatKey = function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    window.enviarMensaje();
  }
};

window.autoResize = function(textarea) {
  textarea.style.height = 'auto';
  const newHeight = Math.min(textarea.scrollHeight, 150);
  textarea.style.height = newHeight + 'px';
  if (textarea.scrollHeight > 150) textarea.classList.add('scrollable');
  else textarea.classList.remove('scrollable');
};

window.usarSugerencia = function(btn) {
  const input = document.getElementById('chatInput');
  if (!input) return;
  input.value = btn.textContent.trim();
  input.focus();
  window.autoResize(input);
};