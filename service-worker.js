const CACHE_NAME = 'ironcore-v1';

const ARCHIVOS_CACHE = [
  '/',
  '/index.html',
  '/index.css',
  '/script.js',
  '/pages/ejercicios.html',
  '/pages/rutinas.html',
  '/pages/calculadoras.html',
  '/pages/progreso.html',
  '/pages/nutricion.html',
  '/pages/chat.html',
  '/pages/login.html',
  '/pages/registro.html',
  '/pages/perfil.html',
  '/pages/crear-rutina.html',
  '/pages/mi-rutina.html',
  '/css/auth.css',
  '/css/calculadoras.css',
  '/css/chat.css',
  '/css/ejercicios.css',
  '/css/nutricion.css',
  '/css/perfil.css',
  '/css/progreso.css',
  '/css/rutinas.css',
  '/css/crear-rutina.css',
  '/css/mi-rutina.css',
  '/js/firebase.js',
  '/js/auth-nav.js',
  '/js/calculadoras.js',
  '/js/chat.js',
  '/js/ejercicios.js',
  '/js/nutricion.js',
  '/js/progreso.js',
  '/js/rutinas.js',
  '/js/crear-rutina.js',
  '/js/mi-rutina.js',
  '/img/icon-192.png',
  '/img/icon-512.png',
];

// Instalación — cachear archivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS_CACHE))
  );
  self.skipWaiting();
});

// Activación — limpiar caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — servir desde cache, si no está ir a la red
self.addEventListener('fetch', e => {
  // No interceptar requests de Firebase ni de APIs externas
  if (
    e.request.url.includes('firebaseapp.com') ||
    e.request.url.includes('googleapis.com') ||
    e.request.url.includes('groq.com') ||
    e.request.url.includes('workers.dev') ||
    e.request.url.includes('openfoodfacts.org')
  ) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cachear respuestas nuevas
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, responseClone));
        }
        return response;
      }).catch(() => {
        // Sin conexión — mostrar página offline si existe
        if (e.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});