const rutinas = [
  {
    id: 1, nombre: "Full Body", tipo: "Full Body", dias: [2, 3],
    desc: "Trabajás todo el cuerpo en cada sesión. Alta frecuencia por músculo.",
    niveles: {
      principiante: {
        dias: 2, nota: "Ejemplo: Lunes y Jueves. Siempre con 2 días de descanso entre sesiones.",
        programa: [
          { dia: "Día 1 — Full Body A", ejercicios: [
            { nombre: "Sentadilla con barra", series: "3x12", descanso: "90s", nota: "Cuádriceps, glúteos" },
            { nombre: "Press banca plano con barra", series: "3x12", descanso: "90s", nota: "Pectoral medio" },
            { nombre: "Remo con barra", series: "3x12", descanso: "90s", nota: "Dorsal, romboides" },
            { nombre: "Press militar con mancuernas", series: "3x15", descanso: "75s", nota: "Deltoides anterior y lateral" },
            { nombre: "Curl con barra EZ", series: "3x15", descanso: "60s", nota: "Bíceps" },
            { nombre: "Extensión en polea soga", series: "3x15", descanso: "60s", nota: "Tríceps lateral y medial" },
            { nombre: "Plancha frontal", series: "3x30s", descanso: "45s", nota: "Core, recto abdominal" },
          ]},
          { dia: "Día 2 — Full Body B", ejercicios: [
            { nombre: "Peso muerto", series: "3x10", descanso: "120s", nota: "Erector espinal, dorsales, glúteos" },
            { nombre: "Press inclinado con mancuernas", series: "3x12", descanso: "90s", nota: "Pectoral superior" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "3x12", descanso: "90s", nota: "Dorsal ancho" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral" },
            { nombre: "Curl alterno con mancuernas", series: "3x15", descanso: "60s", nota: "Bíceps" },
            { nombre: "Fondos en paralelas (tríceps)", series: "3x12", descanso: "75s", nota: "Tríceps general" },
            { nombre: "Crunch abdominal", series: "3x20", descanso: "45s", nota: "Recto abdominal" },
          ]},
        ]
      },
      intermedio: {
        dias: 3, nota: "Ejemplo: Lunes, Miércoles y Viernes.",
        programa: [
          { dia: "Día 1 — Full Body A", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x8-10", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 2" },
            { nombre: "Press banca plano con barra", series: "4x8-10", descanso: "90s", nota: "Pectoral medio — RIR 2" },
            { nombre: "Remo con barra", series: "4x8-10", descanso: "90s", nota: "Dorsal, romboides — RIR 2" },
            { nombre: "Press militar con barra", series: "3x10-12", descanso: "75s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Curl con barra EZ", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Extensión en polea soga", series: "3x10-12", descanso: "60s", nota: "Tríceps — última serie al fallo" },
          ]},
          { dia: "Día 2 — Full Body B", ejercicios: [
            { nombre: "Peso muerto", series: "4x6-8", descanso: "120s", nota: "Erector espinal, dorsales, glúteos — RIR 2" },
            { nombre: "Press inclinado con mancuernas", series: "4x10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "4x10", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Curl alterno con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Rompecráneos con barra", series: "3x10-12", descanso: "60s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
          ]},
          { dia: "Día 3 — Full Body C", ejercicios: [
            { nombre: "Prensa de piernas", series: "4x12", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Fondos en paralelas (pecho)", series: "3x10", descanso: "90s", nota: "Pectoral inferior, tríceps — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "3x8", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo al mentón con barra", series: "3x12", descanso: "75s", nota: "Deltoides lateral, trapecio — RIR 1" },
            { nombre: "Curl concentrado con mancuerna", series: "3x12", descanso: "60s", nota: "Bíceps cabeza corta — última serie al fallo" },
            { nombre: "Fondos en paralelas (tríceps)", series: "3x12", descanso: "75s", nota: "Tríceps general — RIR 1" },
            { nombre: "Plancha frontal", series: "3x45s", descanso: "45s", nota: "Core completo" },
          ]},
        ]
      },
      avanzado: {
        dias: 3, nota: "Full Body 3 días avanzado con compuestos pesados y técnicas de intensidad.",
        programa: [
          { dia: "Día 1 — Full Body A (Fuerza)", ejercicios: [
            { nombre: "Sentadilla con barra", series: "5x5", descanso: "2-3min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Press banca plano con barra", series: "5x5", descanso: "2-3min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Peso muerto", series: "4x4", descanso: "3min", nota: "Erector espinal, dorsales, glúteos — RIR 1" },
            { nombre: "Press militar con barra", series: "3x6-8", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Curl con barra EZ", series: "3x8-10", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x8-10", descanso: "75s", nota: "Tríceps cabeza larga — última serie al fallo" },
          ]},
          { dia: "Día 2 — Full Body B (Volumen)", ejercicios: [
            { nombre: "Press inclinado con barra", series: "4x6-8", descanso: "2min", nota: "Pectoral superior, deltoides anterior — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Hack squat", series: "4x8", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "4x12-15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Curl inclinado con mancuernas", series: "3x8-10", descanso: "60s", nota: "Bíceps cabeza larga — última serie al fallo" },
            { nombre: "Rompecráneos con barra", series: "3x8-10", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
          ]},
          { dia: "Día 3 — Full Body C (Mixto)", ejercicios: [
            { nombre: "Sentadilla frontal", series: "4x5-6", descanso: "2min", nota: "Cuádriceps — RIR 1" },
            { nombre: "Press banca plano con barra", series: "4x6-8", descanso: "2min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Remo con barra", series: "4x6-8", descanso: "2min", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x10", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl tipo Bayesian", series: "3x8-10", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Press cerrado con barra", series: "3x8-10", descanso: "75s", nota: "Tríceps general — RIR 1" },
          ]},
        ]
      }
    }
  },

  {
    id: 2, nombre: "Upper/Lower", tipo: "Upper/Lower", dias: [3, 4],
    desc: "Tren superior e inferior alternados. Alta frecuencia con buena recuperación.",
    niveles: {
      principiante: {
        dias: 3, nota: "Ejemplo: Lunes Upper, Miércoles Lower, Viernes Upper. La siguiente semana rotás.",
        programa: [
          { dia: "Día 1 — Upper", ejercicios: [
            { nombre: "Press banca plano con barra", series: "3x12", descanso: "90s", nota: "Pectoral medio" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "3x12", descanso: "90s", nota: "Dorsal ancho" },
            { nombre: "Press militar con mancuernas", series: "3x12-15", descanso: "75s", nota: "Deltoides anterior y lateral" },
            { nombre: "Remo con mancuerna a una mano", series: "3x12", descanso: "75s", nota: "Dorsal, romboides" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral" },
            { nombre: "Curl alterno con mancuernas", series: "3x12-15", descanso: "60s", nota: "Bíceps" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps lateral y medial" },
          ]},
          { dia: "Día 2 — Lower", ejercicios: [
            { nombre: "Sentadilla con barra", series: "3x12", descanso: "90s", nota: "Cuádriceps, glúteos" },
            { nombre: "Prensa de piernas", series: "3x12", descanso: "90s", nota: "Cuádriceps, glúteos" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps" },
            { nombre: "Hip Thrust con barra", series: "3x15", descanso: "90s", nota: "Glúteo mayor" },
            { nombre: "Zancadas con mancuernas", series: "3x12", descanso: "75s", nota: "Cuádriceps, glúteos" },
            { nombre: "Plancha frontal", series: "3x30s", descanso: "45s", nota: "Core, recto abdominal" },
          ]},
        ]
      },
      intermedio: {
        dias: 4, nota: "Ejemplo: Lunes Upper A, Martes Lower A, Jueves Upper B, Viernes Lower B.",
        programa: [
          { dia: "Día 1 — Upper A (Fuerza)", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x6-8", descanso: "2min", nota: "Pectoral medio — RIR 2" },
            { nombre: "Remo con barra", series: "4x6-8", descanso: "2min", nota: "Dorsal, trapecio medio — RIR 2" },
            { nombre: "Press militar con barra", series: "3x8-10", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "3x8", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Curl con barra EZ", series: "3x10", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Press cerrado con barra", series: "3x10", descanso: "75s", nota: "Tríceps general — RIR 1" },
          ]},
          { dia: "Día 2 — Lower A (Cuádriceps)", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x8", descanso: "2min", nota: "Cuádriceps, glúteos — RIR 2" },
            { nombre: "Prensa de piernas", series: "4x10", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Curl nórdico", series: "3x8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Plancha frontal", series: "3x45s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 3 — Upper B (Volumen)", ejercicios: [
            { nombre: "Press inclinado con mancuernas", series: "4x10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "4x10", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Aperturas planas con mancuernas", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Remo con mancuerna a una mano", series: "3x10-12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Curl alterno con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "60s", nota: "Tríceps cabeza larga — RIR 1" },
          ]},
          { dia: "Día 4 — Lower B (Glúteos e Isquios)", ejercicios: [
            { nombre: "Peso muerto", series: "4x6", descanso: "2min", nota: "Erector espinal, dorsales, glúteos — RIR 2" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Zancadas con mancuernas", series: "3x10-12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hack squat", series: "3x10", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Crunch inverso", series: "3x20", descanso: "45s", nota: "Recto abdominal inferior — última serie al fallo" },
          ]},
        ]
      },
      avanzado: {
        dias: 4, variante: "Rutina personalizada — Estética + Fuerza",
        nota: "Lunes Upper 1, Martes Lower 1, Miércoles Descanso, Jueves Upper 2, Viernes Lower 2. Subí el peso cuando llegás a 10 reps limpias en todos los sets.",
        programa: [
          { dia: "🔵 Upper 1 — Pesado + Fuerza Base", ejercicios: [
            { nombre: "Press inclinado Smith (o barra)", series: "3x6-10", descanso: "2min", nota: "Pectoral superior, deltoides anterior — RIR 1-2" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "4x6-10", descanso: "2min", nota: "Dorsal ancho — RIR 1-2" },
            { nombre: "Pec Deck (Contractora)", series: "3x8-12", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Remo Gironda con barra", series: "2x8-12", descanso: "90s", nota: "Dorsal ancho, romboides — RIR 1" },
            { nombre: "Chest Press máquina (al fallo)", series: "1xFallo", descanso: "—", nota: "Pectoral general — al fallo, máximo peso" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "3x10-15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea overhead con soga", series: "2x6-8", descanso: "75s", nota: "Tríceps cabeza larga — al fallo" },
            { nombre: "Extensión en polea soga", series: "1-2x6-8", descanso: "60s", nota: "Tríceps lateral y medial — al fallo" },
            { nombre: "Curl en polea baja con barra", series: "2x6-10", descanso: "60s", nota: "Bíceps — al fallo" },
            { nombre: "Crunch abdominal", series: "2-3x10-15", descanso: "45s", nota: "Recto abdominal" },
          ]},
          { dia: "🟣 Lower 1 — Fuerza Dominante Cuádriceps", ejercicios: [
            { nombre: "Extensión de pierna en máquina", series: "4x6-8", descanso: "90s", nota: "Cuádriceps — al fallo última serie" },
            { nombre: "Curl femoral sentado en máquina", series: "3x8-10", descanso: "75s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Prensa de piernas", series: "6x10", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Farmer's Walk (Caminata del granjero)", series: "3x20m", descanso: "60s", nota: "Antebrazos, core, trapecio — full ROM" },
          ]},
          { dia: "🟡 Upper 2 — Volumen + Estética", ejercicios: [
            { nombre: "Remo en T con barra (agarre cerrado)", series: "3x8-12", descanso: "90s", nota: "Dorsal ancho, romboides — RIR 1" },
            { nombre: "Cruce de poleas alto a bajo", series: "3x6-10", descanso: "90s", nota: "Pectoral inferior — RIR 1" },
            { nombre: "Remo en T con barra (agarre abierto)", series: "3x8-12", descanso: "90s", nota: "Dorsal ancho, trapecio — RIR 1" },
            { nombre: "Press en polea plano", series: "2x6-10", descanso: "75s", nota: "Pectoral medio — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Press militar en máquina", series: "2x6-10", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "5x15", descanso: "60s", nota: "Deltoides lateral — ⭐ clave estética, nunca las saltees" },
            { nombre: "Extensión unilateral en polea", series: "1-2x6-10", descanso: "60s", nota: "Tríceps — al fallo" },
            { nombre: "Rompecráneos con barra (Skullcrusher)", series: "1-2x6-10", descanso: "60s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
            { nombre: "Curl con soga en polea baja (Martillo en polea)", series: "2x6-10", descanso: "60s", nota: "Braquial, braquiorradial — al fallo" },
            { nombre: "Crunch abdominal", series: "2x10-15", descanso: "45s", nota: "Recto abdominal" },
          ]},
          { dia: "🟢 Lower 2 — Volumen Posterior", ejercicios: [
            { nombre: "Peso muerto", series: "3x5", descanso: "3min", nota: "Erector espinal, dorsales, glúteos — RIR 1, técnica perfecta" },
            { nombre: "Curl nórdico", series: "3x10", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Farmer's Walk (Caminata del granjero)", series: "4x15", descanso: "60s", nota: "Antebrazos, core — full ROM" },
            { nombre: "Vuelos laterales en polea baja con agarre en D", series: "2x8-12", descanso: "60s", nota: "Deltoides lateral — al fallo" },
            { nombre: "Curl de muñeca con barra", series: "2x8-12", descanso: "60s", nota: "Flexores del antebrazo — al fallo" },
          ]},
        ]
      }
    }
  },

  {
    id: 3, nombre: "Push Pull Legs (PPL)", tipo: "PPL", dias: [3, 6],
    desc: "Push Pull Legs. Agrupás músculos por función: empuje, tirón y piernas.",
    niveles: {
      principiante: {
        dias: 3, nota: "Cada grupo muscular una vez por semana. Ejemplo: Lunes Push, Miércoles Pull, Viernes Legs.",
        programa: [
          { dia: "Día 1 — Push (Pecho, Hombros, Tríceps)", ejercicios: [
            { nombre: "Press banca plano con barra", series: "3x10-12", descanso: "90s", nota: "Pectoral medio" },
            { nombre: "Press inclinado con mancuernas", series: "3x12", descanso: "90s", nota: "Pectoral superior" },
            { nombre: "Press militar con mancuernas", series: "3x12-15", descanso: "75s", nota: "Deltoides anterior y lateral" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps lateral y medial" },
          ]},
          { dia: "Día 2 — Pull (Espalda, Bíceps)", ejercicios: [
            { nombre: "Jalón dorsal con barra agarre ancho", series: "4x12", descanso: "90s", nota: "Dorsal ancho" },
            { nombre: "Remo con barra", series: "3x12", descanso: "90s", nota: "Dorsal, trapecio medio" },
            { nombre: "Remo en polea baja agarre cerrado", series: "3x12", descanso: "75s", nota: "Dorsal, romboides" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio" },
            { nombre: "Curl con barra EZ", series: "3x12-15", descanso: "60s", nota: "Bíceps" },
          ]},
          { dia: "Día 3 — Legs (Piernas y Glúteos)", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x12", descanso: "90s", nota: "Cuádriceps, glúteos" },
            { nombre: "Prensa de piernas", series: "3x12", descanso: "90s", nota: "Cuádriceps, glúteos" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps" },
            { nombre: "Hip Thrust con barra", series: "3x15", descanso: "90s", nota: "Glúteo mayor" },
            { nombre: "Zancadas con mancuernas", series: "3x12", descanso: "75s", nota: "Cuádriceps, glúteos" },
            { nombre: "Plancha frontal", series: "3x30s", descanso: "45s", nota: "Core, recto abdominal" },
          ]},
        ]
      },
      intermedio: {
        dias: 6, nota: "Lunes Push A, Martes Pull A, Miércoles Legs A, Jueves Push B, Viernes Pull B, Sábado Legs B.",
        programa: [
          { dia: "Día 1 — Push A (Fuerza)", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x6-8", descanso: "2min", nota: "Pectoral medio — RIR 2" },
            { nombre: "Press inclinado con barra", series: "4x8-10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Press militar con barra", series: "3x8-10", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea soga", series: "3x10-12", descanso: "60s", nota: "Tríceps — RIR 1" },
            { nombre: "Rompecráneos con barra", series: "3x10-12", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
          ]},
          { dia: "Día 2 — Pull A (Fuerza)", ejercicios: [
            { nombre: "Peso muerto", series: "4x5-6", descanso: "3min", nota: "Erector espinal, dorsales, glúteos — RIR 2" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo con barra", series: "4x6-8", descanso: "90s", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl con barra EZ", series: "3x8-10", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Curl martillo con mancuernas", series: "3x8-10", descanso: "60s", nota: "Braquial, braquiorradial — última serie al fallo" },
          ]},
          { dia: "Día 3 — Legs A (Cuádriceps)", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x8", descanso: "2min", nota: "Cuádriceps, glúteos — RIR 2" },
            { nombre: "Prensa de piernas", series: "4x10", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Zancadas con mancuernas", series: "3x10-12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Plancha frontal", series: "3x45s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 4 — Push B (Volumen)", ejercicios: [
            { nombre: "Press inclinado con mancuernas", series: "4x10-12", descanso: "75s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Cruce de poleas al pecho", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Pec Deck (Contractora)", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "4x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "60s", nota: "Tríceps cabeza larga — RIR 1" },
            { nombre: "Patada de tríceps con mancuerna", series: "3x12-15", descanso: "60s", nota: "Tríceps cabeza lateral — última serie al fallo" },
          ]},
          { dia: "Día 5 — Pull B (Volumen)", ejercicios: [
            { nombre: "Jalón dorsal con agarre cerrado", series: "4x10-12", descanso: "75s", nota: "Dorsal ancho, romboides — RIR 1" },
            { nombre: "Remo en polea baja agarre cerrado", series: "4x10-12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Remo con mancuerna a una mano", series: "3x10-12", descanso: "75s", nota: "Dorsal, trapecio — RIR 1" },
            { nombre: "Pullover en polea", series: "3x12-15", descanso: "60s", nota: "Dorsal ancho, serrato — última serie al fallo" },
            { nombre: "Curl inclinado con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — última serie al fallo" },
            { nombre: "Curl concentrado con mancuerna", series: "3x12-15", descanso: "60s", nota: "Bíceps cabeza corta — al fallo" },
          ]},
          { dia: "Día 6 — Legs B (Glúteos e Isquios)", ejercicios: [
            { nombre: "Hip Thrust con barra", series: "5x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Hack squat", series: "4x8-10", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Curl nórdico", series: "4x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Zancadas con mancuernas", series: "3x10-12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
          ]},
        ]
      },
      avanzado: {
        dias: 6, variante: "Niko Velaz — Selección por estímulo/fatiga",
        nota: "Seguí a Niko Velaz (@niko.velaz) en TikTok para ver los detalles técnicos de cada ejercicio.",
        programa: [
          { dia: "Día 1 — Push A", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x5-8", descanso: "2-3min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Press inclinado con mancuernas", series: "3x10-12", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Cruce de poleas bajo a alto", series: "3x12-15", descanso: "60s", nota: "Pectoral superior — última serie al fallo" },
            { nombre: "Press militar con mancuernas", series: "3x10-12", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "4x15-20", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "60s", nota: "Tríceps cabeza larga — RIR 1" },
          ]},
          { dia: "Día 2 — Pull A", ejercicios: [
            { nombre: "Peso muerto", series: "3x4-6", descanso: "3min", nota: "Erector espinal, dorsales, glúteos — RIR 1" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "3x8-10", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo en polea baja agarre cerrado", series: "3x10-12", descanso: "90s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Pullover en polea", series: "3x12-15", descanso: "60s", nota: "Dorsal ancho, serrato — última serie al fallo" },
            { nombre: "Face Pull en polea", series: "3x15-20", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl tipo Bayesian", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
          ]},
          { dia: "Día 3 — Legs A", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x5-8", descanso: "2-3min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hack squat", series: "3x10-12", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Curl nórdico", series: "3x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Plancha frontal", series: "3x45s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 4 — Push B", ejercicios: [
            { nombre: "Press inclinado con barra", series: "4x6-10", descanso: "2min", nota: "Pectoral superior — RIR 1" },
            { nombre: "Pec Deck (Contractora)", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Cruce de poleas alto a bajo", series: "3x12-15", descanso: "60s", nota: "Pectoral inferior — última serie al fallo" },
            { nombre: "Press militar en máquina", series: "3x10-12", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "4x15-20", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps lateral y medial — al fallo" },
          ]},
          { dia: "Día 5 — Pull B", ejercicios: [
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo con mancuerna a una mano", series: "3x10-12", descanso: "90s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Jalón dorsal con agarre cerrado", series: "3x10-12", descanso: "90s", nota: "Dorsal ancho, romboides — RIR 1" },
            { nombre: "Remo escapular con barra en polea baja", series: "3x12-15", descanso: "60s", nota: "Trapecio medio, romboides — última serie al fallo" },
            { nombre: "Curl inclinado con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Curl en polea alto doble bíceps", series: "3x12-15", descanso: "60s", nota: "Bíceps cabeza corta, pico — al fallo" },
          ]},
          { dia: "Día 6 — Legs B", ejercicios: [
            { nombre: "Prensa de piernas", series: "4x10-15", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x12-15", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Zancadas con mancuernas", series: "3x10-12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps — al fallo" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
            { nombre: "Bicicleta abdominal", series: "3x20", descanso: "45s", nota: "Oblicuos, recto abdominal" },
          ]},
        ]
      }
    }
  },

  {
    id: 4, nombre: "PPL + Upper/Lower", tipo: "PPL/Upper-Lower", dias: [5],
    desc: "Combinación de PPL y Upper/Lower para 5 días. Alta frecuencia con volumen moderado.",
    niveles: {
      principiante: null,
      intermedio: {
        dias: 5, nota: "Lunes Push, Martes Pull, Miércoles Legs, Jueves Upper, Viernes Lower.",
        programa: [
          { dia: "Día 1 — Push", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x8-10", descanso: "90s", nota: "Pectoral medio — RIR 2" },
            { nombre: "Press inclinado con mancuernas", series: "3x10-12", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Press militar con barra", series: "3x10", descanso: "75s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea soga", series: "3x12", descanso: "60s", nota: "Tríceps — RIR 1" },
          ]},
          { dia: "Día 2 — Pull", ejercicios: [
            { nombre: "Peso muerto", series: "4x6", descanso: "2min", nota: "Erector espinal, dorsales, glúteos — RIR 2" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "4x10", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo con barra", series: "3x8-10", descanso: "90s", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl con barra EZ", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
          ]},
          { dia: "Día 3 — Legs", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x8", descanso: "2min", nota: "Cuádriceps, glúteos — RIR 2" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Curl nórdico", series: "3x8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Plancha frontal", series: "3x45s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 4 — Upper", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x6-8", descanso: "2min", nota: "Pectoral medio — RIR 2" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Press militar con barra", series: "3x8", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Remo en polea baja agarre cerrado", series: "3x10", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Curl alterno con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Press cerrado con barra", series: "3x10", descanso: "75s", nota: "Tríceps general — RIR 1" },
          ]},
          { dia: "Día 5 — Lower", ejercicios: [
            { nombre: "Prensa de piernas", series: "4x12", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x12-15", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Zancadas con mancuernas", series: "3x12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Crunch abdominal", series: "3x20", descanso: "45s", nota: "Recto abdominal — última serie al fallo" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
          ]},
        ]
      },
      avanzado: {
        dias: 5, variante: "Jeff Nippard — Fuerza + Hipertrofia",
        nota: "Basada en la estructura de Jeff Nippard. Los descansos largos en compuestos son intencionales.",
        programa: [
          { dia: "Día 1 — Push (Fuerza)", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x4-6", descanso: "3min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Press inclinado con barra", series: "3x6-8", descanso: "2min", nota: "Pectoral superior — RIR 1" },
            { nombre: "Cruce de poleas al pecho", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Press militar con barra", series: "3x6-8", descanso: "2min", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "4x15-20", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "75s", nota: "Tríceps cabeza larga — RIR 1" },
          ]},
          { dia: "Día 2 — Pull (Fuerza)", ejercicios: [
            { nombre: "Peso muerto", series: "4x4-5", descanso: "3-4min", nota: "Erector espinal, dorsales, glúteos — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x4-6", descanso: "2-3min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo Pendlay", series: "3x6-8", descanso: "2min", nota: "Dorsal, trapecio — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15-20", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl tipo Bayesian", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
          ]},
          { dia: "Día 3 — Legs", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x4-6", descanso: "3min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Peso muerto rumano", series: "3x8-10", descanso: "2min", nota: "Isquiotibiales, glúteos — RIR 1" },
            { nombre: "Hack squat", series: "3x8-10", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Curl nórdico", series: "3x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Dead Bug", series: "3x10 por lado", descanso: "60s", nota: "Core profundo, transverso abdominal" },
          ]},
          { dia: "Día 4 — Upper (Volumen)", ejercicios: [
            { nombre: "Press inclinado con mancuernas", series: "4x8-10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Jalón dorsal con agarre cerrado", series: "4x8-10", descanso: "90s", nota: "Dorsal ancho, romboides — RIR 1" },
            { nombre: "Pec Deck (Contractora)", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Remo en polea baja agarre cerrado", series: "3x10-12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Press militar en máquina", series: "3x10-12", descanso: "75s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Curl en polea baja barra recta", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps — última serie al fallo" },
          ]},
          { dia: "Día 5 — Lower (Glúteos + Core)", ejercicios: [
            { nombre: "Hip Thrust con barra", series: "5x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Prensa de piernas", series: "4x12-15", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps — al fallo" },
            { nombre: "Zancadas con mancuernas", series: "3x10-12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
            { nombre: "Plancha lateral", series: "3x30s", descanso: "45s", nota: "Oblicuos" },
          ]},
        ]
      }
    }
  },

  {
    id: 5, nombre: "Arnold Split", tipo: "Arnold Split", dias: [6],
    desc: "Pecho+Espalda juntos, Hombros+Brazos, y Piernas. La división que popularizó Arnold.",
    niveles: {
      principiante: null,
      intermedio: {
        dias: 6, nota: "Lunes Pecho/Espalda, Martes Hombros/Brazos, Miércoles Piernas, repetir Jueves-Viernes-Sábado.",
        programa: [
          { dia: "Día 1 y 4 — Pecho y Espalda", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x10-12", descanso: "90s", nota: "Pectoral medio — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x8-10", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Press inclinado con mancuernas", series: "3x12", descanso: "75s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Remo con barra", series: "3x10-12", descanso: "90s", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Aperturas planas con mancuernas", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "3x12", descanso: "75s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Pullover con mancuerna", series: "3x12", descanso: "75s", nota: "Pectoral superior, dorsal, serrato — RIR 1" },
          ]},
          { dia: "Día 2 y 5 — Hombros y Brazos", ejercicios: [
            { nombre: "Press militar con mancuernas", series: "4x12", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "4x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl con barra EZ", series: "3x12", descanso: "75s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Curl alterno con mancuernas", series: "3x12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Rompecráneos con barra", series: "3x12", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps — última serie al fallo" },
          ]},
          { dia: "Día 3 y 6 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x10-12", descanso: "2min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Prensa de piernas", series: "4x12", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Hip Thrust con barra", series: "4x12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Curl nórdico", series: "3x8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Crunch abdominal", series: "3x20", descanso: "45s", nota: "Recto abdominal — última serie al fallo" },
          ]},
        ]
      },
      avanzado: {
        dias: 6, nota: "Versión avanzada del Arnold Split con mayor volumen e intensidad.",
        programa: [
          { dia: "Día 1 y 4 — Pecho y Espalda", ejercicios: [
            { nombre: "Press banca plano con barra", series: "5x6-8", descanso: "2min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Press inclinado con barra", series: "4x8-10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Remo con barra", series: "4x6-8", descanso: "90s", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Cruce de poleas al pecho", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Remo con mancuerna a una mano", series: "3x10-12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Pullover en polea", series: "3x12-15", descanso: "60s", nota: "Dorsal ancho, serrato — última serie al fallo" },
          ]},
          { dia: "Día 2 y 5 — Hombros y Brazos", ejercicios: [
            { nombre: "Press militar con barra", series: "4x6-8", descanso: "2min", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "4x15-20", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Remo al mentón con barra", series: "3x10-12", descanso: "75s", nota: "Deltoides lateral, trapecio — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl inclinado con mancuernas", series: "3x10-12", descanso: "75s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Curl tipo Bayesian", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "75s", nota: "Tríceps cabeza larga — RIR 1" },
            { nombre: "Fondos en paralelas (tríceps)", series: "3x8-10", descanso: "75s", nota: "Tríceps general — RIR 1" },
          ]},
          { dia: "Día 3 y 6 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "5x6-8", descanso: "2-3min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Hack squat", series: "4x8-10", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Curl nórdico", series: "4x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — al fallo" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
            { nombre: "Plancha lateral", series: "3x35s", descanso: "45s", nota: "Oblicuos" },
          ]},
        ]
      }
    }
  },

  {
    id: 6, nombre: "Weider (Un músculo por día)", tipo: "Weider", dias: [5],
    desc: "Un grupo muscular por día con alto volumen. Frecuencia 1 por semana.",
    niveles: {
      principiante: null,
      intermedio: {
        dias: 5, nota: "Ejemplo: Lunes Pecho, Martes Espalda, Miércoles Piernas, Jueves Hombros, Viernes Brazos.",
        programa: [
          { dia: "Día 1 — Pecho", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x10-12", descanso: "90s", nota: "Pectoral medio — RIR 1" },
            { nombre: "Press inclinado con mancuernas", series: "4x10-12", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Aperturas planas con mancuernas", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Cruce de poleas al pecho", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Fondos en paralelas (pecho)", series: "3x12", descanso: "75s", nota: "Pectoral inferior, tríceps — RIR 1" },
          ]},
          { dia: "Día 2 — Espalda", ejercicios: [
            { nombre: "Jalón dorsal con barra agarre ancho", series: "4x10-12", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo con barra", series: "4x10-12", descanso: "90s", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Remo en polea baja agarre cerrado", series: "3x12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Remo con mancuerna a una mano", series: "3x12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Pullover en polea", series: "3x12-15", descanso: "60s", nota: "Dorsal ancho, serrato — última serie al fallo" },
          ]},
          { dia: "Día 3 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x10-12", descanso: "2min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Prensa de piernas", series: "4x12", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Curl nórdico", series: "3x8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Plancha frontal", series: "3x40s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 4 — Hombros", ejercicios: [
            { nombre: "Press militar con barra", series: "4x10-12", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "4x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Elevación frontal con mancuernas", series: "3x12", descanso: "60s", nota: "Deltoides anterior — RIR 1" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Remo al mentón con barra", series: "3x12", descanso: "75s", nota: "Deltoides lateral, trapecio — RIR 1" },
          ]},
          { dia: "Día 5 — Brazos", ejercicios: [
            { nombre: "Curl con barra EZ", series: "4x10-12", descanso: "75s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Curl alterno con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Curl concentrado con mancuerna", series: "3x12", descanso: "60s", nota: "Bíceps cabeza corta, pico — al fallo" },
            { nombre: "Rompecráneos con barra", series: "4x10-12", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps — última serie al fallo" },
            { nombre: "Fondos en paralelas (tríceps)", series: "3x10-12", descanso: "75s", nota: "Tríceps general — RIR 1" },
          ]},
        ]
      },
      avanzado: {
        dias: 5, nota: "La Weider avanzada requiere llevar cada sesión al límite. Frecuencia 1 — alta intensidad.",
        programa: [
          { dia: "Día 1 — Pecho", ejercicios: [
            { nombre: "Press banca plano con barra", series: "5x5-8", descanso: "2min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Press inclinado con barra", series: "4x6-8", descanso: "2min", nota: "Pectoral superior — RIR 1" },
            { nombre: "Press declinado con mancuernas", series: "3x10-12", descanso: "90s", nota: "Pectoral inferior — RIR 1" },
            { nombre: "Cruce de poleas alto a bajo", series: "3x12-15", descanso: "60s", nota: "Pectoral inferior — última serie al fallo" },
            { nombre: "Pec Deck (Contractora)", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — al fallo" },
            { nombre: "Fondos en paralelas (pecho)", series: "3x8-10", descanso: "75s", nota: "Pectoral inferior, tríceps — RIR 1" },
          ]},
          { dia: "Día 2 — Espalda", ejercicios: [
            { nombre: "Peso muerto", series: "4x4-5", descanso: "3min", nota: "Erector espinal, dorsales, glúteos — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Remo con barra", series: "4x6-8", descanso: "2min", nota: "Dorsal, trapecio medio — RIR 1" },
            { nombre: "Jalón dorsal con agarre cerrado", series: "3x8-10", descanso: "90s", nota: "Dorsal ancho, romboides — RIR 1" },
            { nombre: "Pullover en polea", series: "3x12-15", descanso: "60s", nota: "Dorsal ancho, serrato — última serie al fallo" },
            { nombre: "Remo con mancuerna a una mano", series: "3x10-12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
          ]},
          { dia: "Día 3 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "5x5-8", descanso: "2-3min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hack squat", series: "4x8-10", descanso: "2min", nota: "Cuádriceps — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Curl nórdico", series: "4x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — al fallo" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
          ]},
          { dia: "Día 4 — Hombros", ejercicios: [
            { nombre: "Press militar con barra", series: "5x5-8", descanso: "2min", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Press militar con mancuernas", series: "3x8-10", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "5x15-20", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Vuelos laterales con mancuernas", series: "3x12-15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Remo al mentón con barra", series: "3x10-12", descanso: "75s", nota: "Deltoides lateral, trapecio — RIR 1" },
          ]},
          { dia: "Día 5 — Brazos", ejercicios: [
            { nombre: "Curl con barra EZ", series: "4x8-10", descanso: "75s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Curl inclinado con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Curl tipo Bayesian", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Curl concentrado con mancuerna", series: "3x12", descanso: "60s", nota: "Bíceps cabeza corta, pico — al fallo" },
            { nombre: "Rompecráneos con barra", series: "4x8-10", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "60s", nota: "Tríceps cabeza larga — RIR 1" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps — al fallo" },
          ]},
        ]
      }
    }
  },

  {
    id: 7, nombre: "Heavy Duty", tipo: "Heavy Duty", dias: [3, 4],
    desc: "Método de Mike Mentzer. Poco volumen, máxima intensidad. Cada serie va al fallo o más allá.",
    niveles: {
      principiante: null,
      intermedio: {
        dias: 3, nota: "Descansá mínimo 2 días entre sesiones. El descanso es parte del método.",
        programa: [
          { dia: "Día 1 — Pecho y Espalda", ejercicios: [
            { nombre: "Press banca plano con barra", series: "2x8-12", descanso: "3min", nota: "Pectoral medio — al fallo en la última serie" },
            { nombre: "Aperturas planas con mancuernas", series: "1-2x10-12", descanso: "2min", nota: "Pectoral medio — al fallo" },
            { nombre: "Dominadas agarre ancho", series: "2x8-10", descanso: "3min", nota: "Dorsal ancho — al fallo" },
            { nombre: "Remo con barra", series: "2x8-10", descanso: "2min", nota: "Dorsal, trapecio — al fallo última serie" },
            { nombre: "Pullover con mancuerna", series: "1x10-12", descanso: "2min", nota: "Dorsal, pectoral superior, serrato — al fallo" },
          ]},
          { dia: "Día 2 — Hombros y Brazos", ejercicios: [
            { nombre: "Press militar con mancuernas", series: "2x8-10", descanso: "3min", nota: "Deltoides anterior y lateral — al fallo última serie" },
            { nombre: "Vuelos laterales con mancuernas", series: "1-2x10-12", descanso: "2min", nota: "Deltoides lateral — al fallo" },
            { nombre: "Curl con barra EZ", series: "2x8-10", descanso: "2min", nota: "Bíceps — al fallo última serie" },
            { nombre: "Curl concentrado con mancuerna", series: "1x10-12", descanso: "90s", nota: "Bíceps cabeza corta — al fallo" },
            { nombre: "Extensión en polea overhead", series: "2x8-10", descanso: "2min", nota: "Tríceps cabeza larga — al fallo última serie" },
            { nombre: "Extensión en polea soga", series: "1x10-12", descanso: "90s", nota: "Tríceps — al fallo" },
          ]},
          { dia: "Día 3 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "2x8-12", descanso: "3min", nota: "Cuádriceps, glúteos — al fallo última serie" },
            { nombre: "Prensa de piernas", series: "1-2x10-15", descanso: "2min", nota: "Cuádriceps, glúteos — al fallo" },
            { nombre: "Extensión de pierna en máquina", series: "1x12-15", descanso: "2min", nota: "Cuádriceps — al fallo" },
            { nombre: "Hip Thrust con barra", series: "2x10-12", descanso: "2min", nota: "Glúteo mayor — al fallo última serie" },
            { nombre: "Curl nórdico", series: "2x6-8", descanso: "2min", nota: "Isquiotibiales — al fallo" },
          ]},
        ]
      },
      avanzado: {
        dias: 4, nota: "Heavy Duty avanzado de Mike Mentzer. Volumen mínimo, intensidad máxima. Algunas series incluyen rest-pause o drop set.",
        programa: [
          { dia: "Día 1 — Pecho", ejercicios: [
            { nombre: "Aperturas planas con mancuernas", series: "1x8-12", descanso: "2min", nota: "Pectoral medio — al fallo, preagotamiento" },
            { nombre: "Press banca plano con barra", series: "1-2x6-10", descanso: "3min", nota: "Pectoral medio — al fallo o más allá (rest-pause)" },
            { nombre: "Fondos en paralelas (pecho)", series: "1x8-10", descanso: "2min", nota: "Pectoral inferior — al fallo" },
          ]},
          { dia: "Día 2 — Espalda y Hombros", ejercicios: [
            { nombre: "Pullover con mancuerna", series: "1x10-12", descanso: "2min", nota: "Dorsal, pectoral superior — preagotamiento" },
            { nombre: "Dominadas agarre ancho", series: "1-2x6-8", descanso: "3min", nota: "Dorsal ancho — al fallo" },
            { nombre: "Remo con barra", series: "1x8-10", descanso: "2min", nota: "Dorsal, trapecio — al fallo" },
            { nombre: "Vuelos laterales con mancuernas", series: "1x10-12", descanso: "90s", nota: "Deltoides lateral — preagotamiento, al fallo" },
            { nombre: "Press militar con barra", series: "1-2x6-10", descanso: "3min", nota: "Deltoides anterior y lateral — al fallo" },
          ]},
          { dia: "Día 3 — Brazos", ejercicios: [
            { nombre: "Curl en polea baja con barra", series: "1x10-12", descanso: "90s", nota: "Bíceps — preagotamiento, al fallo" },
            { nombre: "Curl con barra EZ", series: "1-2x6-10", descanso: "2min", nota: "Bíceps — al fallo o rest-pause" },
            { nombre: "Extensión en polea soga", series: "1x10-12", descanso: "90s", nota: "Tríceps — preagotamiento, al fallo" },
            { nombre: "Press cerrado con barra", series: "1-2x6-10", descanso: "2min", nota: "Tríceps general — al fallo" },
          ]},
          { dia: "Día 4 — Piernas", ejercicios: [
            { nombre: "Extensión de pierna en máquina", series: "1x12-15", descanso: "2min", nota: "Cuádriceps — preagotamiento, al fallo" },
            { nombre: "Sentadilla con barra", series: "1-2x8-12", descanso: "3min", nota: "Cuádriceps, glúteos — al fallo" },
            { nombre: "Hip Thrust con barra", series: "1-2x10-12", descanso: "2min", nota: "Glúteo mayor — al fallo" },
            { nombre: "Curl nórdico", series: "1-2x6-8", descanso: "2min", nota: "Isquiotibiales — al fallo" },
          ]},
        ]
      }
    }
  },

  {
    id: 8, nombre: "Arnold Split + Upper/Lower", tipo: "Arnold Split", dias: [5],
    desc: "Combinación del Arnold Split clásico con una sesión Upper/Lower. Alta frecuencia para pecho, espalda y hombros.",
    niveles: {
      principiante: null,
      intermedio: {
        dias: 5, nota: "Lunes Pecho/Espalda, Martes Hombros/Brazos, Miércoles Piernas, Jueves Upper, Viernes Lower.",
        programa: [
          { dia: "Día 1 — Pecho y Espalda", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x10-12", descanso: "90s", nota: "Pectoral medio — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x8-10", descanso: "90s", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Press inclinado con mancuernas", series: "3x12", descanso: "75s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Remo con barra", series: "3x10-12", descanso: "90s", nota: "Dorsal, trapecio — RIR 1" },
            { nombre: "Cruce de poleas al pecho", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — última serie al fallo" },
            { nombre: "Jalón dorsal con barra agarre ancho", series: "3x12", descanso: "75s", nota: "Dorsal ancho — RIR 1" },
          ]},
          { dia: "Día 2 — Hombros y Brazos", ejercicios: [
            { nombre: "Press militar con mancuernas", series: "4x12", descanso: "90s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales con mancuernas", series: "4x15", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — última serie al fallo" },
            { nombre: "Curl con barra EZ", series: "3x12", descanso: "75s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Rompecráneos con barra", series: "3x12", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
            { nombre: "Extensión en polea soga", series: "3x12-15", descanso: "60s", nota: "Tríceps — última serie al fallo" },
          ]},
          { dia: "Día 3 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "4x10-12", descanso: "2min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Prensa de piernas", series: "4x12", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x15", descanso: "60s", nota: "Cuádriceps — última serie al fallo" },
            { nombre: "Curl nórdico", series: "3x8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Plancha frontal", series: "3x40s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 4 — Upper", ejercicios: [
            { nombre: "Press inclinado con barra", series: "4x8-10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Remo en polea baja agarre cerrado", series: "4x10", descanso: "90s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Press militar con barra", series: "3x10", descanso: "75s", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Curl alterno con mancuernas", series: "3x10-12", descanso: "60s", nota: "Bíceps — última serie al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "60s", nota: "Tríceps cabeza larga — RIR 1" },
          ]},
          { dia: "Día 5 — Lower", ejercicios: [
            { nombre: "Peso muerto", series: "4x6-8", descanso: "2min", nota: "Erector espinal, dorsales, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x12-15", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Hack squat", series: "3x10", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Zancadas con mancuernas", series: "3x12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
          ]},
        ]
      },
      avanzado: {
        dias: 5, nota: "Versión avanzada con más volumen e intensidad por sesión.",
        programa: [
          { dia: "Día 1 — Pecho y Espalda", ejercicios: [
            { nombre: "Press banca plano con barra", series: "5x5-8", descanso: "2min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Press inclinado con barra", series: "4x8-10", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Remo con barra", series: "4x6-8", descanso: "90s", nota: "Dorsal, trapecio — RIR 1" },
            { nombre: "Pec Deck (Contractora)", series: "3x12-15", descanso: "60s", nota: "Pectoral medio — al fallo" },
            { nombre: "Pullover en polea", series: "3x12-15", descanso: "60s", nota: "Dorsal ancho, serrato — al fallo" },
          ]},
          { dia: "Día 2 — Hombros y Brazos", ejercicios: [
            { nombre: "Press militar con barra", series: "4x6-8", descanso: "2min", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Vuelos laterales en polea baja con tobillera", series: "5x15-20", descanso: "60s", nota: "Deltoides lateral — última serie al fallo" },
            { nombre: "Face Pull en polea", series: "3x15", descanso: "60s", nota: "Deltoides posterior, trapecio — al fallo" },
            { nombre: "Curl inclinado con mancuernas", series: "3x10-12", descanso: "75s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Curl tipo Bayesian", series: "3x10-12", descanso: "60s", nota: "Bíceps cabeza larga — al fallo" },
            { nombre: "Extensión en polea overhead", series: "3x10-12", descanso: "75s", nota: "Tríceps cabeza larga — RIR 1" },
            { nombre: "Rompecráneos con barra", series: "3x8-10", descanso: "75s", nota: "Tríceps cabeza larga y lateral — RIR 1" },
          ]},
          { dia: "Día 3 — Piernas", ejercicios: [
            { nombre: "Sentadilla con barra", series: "5x5-8", descanso: "2-3min", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con barra", series: "4x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Hack squat", series: "4x8-10", descanso: "90s", nota: "Cuádriceps — RIR 1" },
            { nombre: "Curl nórdico", series: "4x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Extensión de pierna en máquina", series: "3x12-15", descanso: "60s", nota: "Cuádriceps — al fallo" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — al fallo" },
          ]},
          { dia: "Día 4 — Upper (Fuerza)", ejercicios: [
            { nombre: "Press banca plano con barra", series: "4x4-6", descanso: "3min", nota: "Pectoral medio — RIR 1" },
            { nombre: "Peso muerto", series: "4x4-5", descanso: "3min", nota: "Erector espinal, dorsales — RIR 1" },
            { nombre: "Press militar con barra", series: "3x6-8", descanso: "2min", nota: "Deltoides anterior y lateral — RIR 1" },
            { nombre: "Remo en polea baja agarre cerrado", series: "3x8-10", descanso: "90s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Curl con barra EZ", series: "3x8-10", descanso: "60s", nota: "Bíceps — al fallo" },
            { nombre: "Press cerrado con barra", series: "3x8-10", descanso: "75s", nota: "Tríceps general — RIR 1" },
          ]},
          { dia: "Día 5 — Lower (Glúteos + Core)", ejercicios: [
            { nombre: "Hip Thrust con barra", series: "5x10-12", descanso: "90s", nota: "Glúteo mayor — RIR 1" },
            { nombre: "Prensa de piernas", series: "4x10-12", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Zancadas con mancuernas", series: "3x10-12", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Curl nórdico", series: "3x8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Crunch abdominal", series: "3x20", descanso: "45s", nota: "Recto abdominal — al fallo" },
            { nombre: "Plancha lateral", series: "3x35s", descanso: "45s", nota: "Oblicuos" },
          ]},
        ]
      }
    }
  },

  {
    id: 9, nombre: "Calistenia / Casa", tipo: "Calistenia", dias: [2, 3, 4],
    desc: "Entrenamiento con peso corporal. Sin equipamiento, en casa o al aire libre. Ideal para empezar o complementar.",
    niveles: {
      principiante: {
        dias: 2, nota: "Ejemplo: Lunes y Jueves. Descansá al menos 2 días entre sesiones.",
        programa: [
          { dia: "Día 1 — Empuje y Core", ejercicios: [
            { nombre: "Flexiones clásicas (Push Ups)", series: "3x10-15", descanso: "75s", nota: "Pectoral medio, tríceps" },
            { nombre: "Flexiones inclinadas (manos en silla)", series: "3x10", descanso: "75s", nota: "Pectoral inferior" },
            { nombre: "Fondos en silla (Bench dips)", series: "3x12", descanso: "60s", nota: "Tríceps general" },
            { nombre: "Plancha frontal", series: "3x30s", descanso: "45s", nota: "Core completo" },
            { nombre: "Mountain Climbers (Escaladores)", series: "3x20", descanso: "45s", nota: "Core, cardio" },
            { nombre: "Crunch abdominal", series: "3x20", descanso: "45s", nota: "Recto abdominal" },
          ]},
          { dia: "Día 2 — Tirón y Piernas", ejercicios: [
            { nombre: "Australian pull ups (Remo invertido)", series: "3x8-12", descanso: "75s", nota: "Dorsal, romboides" },
            { nombre: "Sentadilla (sin peso)", series: "3x15-20", descanso: "60s", nota: "Cuádriceps, glúteos" },
            { nombre: "Zancadas sin peso", series: "3x12 por lado", descanso: "60s", nota: "Cuádriceps, glúteos" },
            { nombre: "Hip Thrust con peso corporal", series: "3x20", descanso: "60s", nota: "Glúteo mayor" },
            { nombre: "Curl nórdico", series: "3x5-8", descanso: "90s", nota: "Isquiotibiales" },
            { nombre: "Plancha lateral", series: "3x20s", descanso: "45s", nota: "Oblicuos" },
          ]},
        ]
      },
      intermedio: {
        dias: 3, nota: "Ejemplo: Lunes, Miércoles, Viernes. Push / Pull+Piernas / Full Body.",
        programa: [
          { dia: "Día 1 — Push (Empuje)", ejercicios: [
            { nombre: "Flexiones con pies elevados (Incline Push Ups al revés)", series: "4x10-15", descanso: "75s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Flexiones clásicas (Push Ups)", series: "4x12-15", descanso: "75s", nota: "Pectoral medio — RIR 1" },
            { nombre: "Flexiones diamante (Diamond Push Ups)", series: "3x10-12", descanso: "60s", nota: "Tríceps — última serie al fallo" },
            { nombre: "Fondos en paralelas (pecho)", series: "3x8-12", descanso: "90s", nota: "Pectoral inferior, tríceps — RIR 1" },
            { nombre: "Plancha frontal", series: "3x45s", descanso: "45s", nota: "Core completo" },
            { nombre: "Mountain Climbers (Escaladores)", series: "3x25", descanso: "45s", nota: "Core, cardio" },
          ]},
          { dia: "Día 2 — Pull y Piernas", ejercicios: [
            { nombre: "Dominadas agarre ancho", series: "4x6-10", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Australian pull ups (Remo invertido)", series: "3x10-12", descanso: "75s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Sentadilla (sin peso)", series: "4x20", descanso: "60s", nota: "Cuádriceps, glúteos" },
            { nombre: "Zancadas sin peso", series: "3x15 por lado", descanso: "60s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con peso corporal", series: "4x25", descanso: "60s", nota: "Glúteo mayor — última serie al fallo" },
            { nombre: "Curl nórdico", series: "3x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
          ]},
          { dia: "Día 3 — Full Body", ejercicios: [
            { nombre: "Flexiones clásicas (Push Ups)", series: "4x15", descanso: "60s", nota: "Pectoral, tríceps — RIR 1" },
            { nombre: "Chin Ups (Dominadas supinas)", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho, bíceps — RIR 1" },
            { nombre: "Sentadilla (sin peso)", series: "4x20", descanso: "60s", nota: "Cuádriceps, glúteos" },
            { nombre: "Fondos en silla (Bench dips)", series: "3x12-15", descanso: "60s", nota: "Tríceps — última serie al fallo" },
            { nombre: "Elevación de piernas colgado", series: "3x12", descanso: "60s", nota: "Recto abdominal inferior — última serie al fallo" },
            { nombre: "Plancha lateral", series: "3x30s por lado", descanso: "45s", nota: "Oblicuos" },
          ]},
        ]
      },
      avanzado: {
        dias: 4, nota: "PPL calistenia de 4 días. Alta intensidad, progresión por variante más difícil.",
        programa: [
          { dia: "Día 1 — Push A (Fuerza)", ejercicios: [
            { nombre: "Fondos en paralelas (pecho)", series: "5x8-10", descanso: "2min", nota: "Pectoral inferior, tríceps — RIR 1" },
            { nombre: "Flexiones con pies elevados (Incline Push Ups al revés)", series: "4x12-15", descanso: "90s", nota: "Pectoral superior — RIR 1" },
            { nombre: "Flexiones con carga (mochila)", series: "4x8-10", descanso: "90s", nota: "Pectoral medio — RIR 1" },
            { nombre: "Flexiones diamante (Diamond Push Ups)", series: "3x12", descanso: "60s", nota: "Tríceps — al fallo" },
            { nombre: "Plancha frontal", series: "4x60s", descanso: "45s", nota: "Core completo" },
          ]},
          { dia: "Día 2 — Pull A (Fuerza)", ejercicios: [
            { nombre: "Dominadas agarre ancho", series: "5x5-8", descanso: "2-3min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Chin Ups (Dominadas supinas)", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho, bíceps — RIR 1" },
            { nombre: "Australian pull ups (Remo invertido)", series: "4x10-12", descanso: "90s", nota: "Dorsal, romboides — RIR 1" },
            { nombre: "Colgarse de barra (Dead Hang)", series: "3x30-60s", descanso: "60s", nota: "Antebrazos, dorsal" },
            { nombre: "Elevación de piernas colgado", series: "4x15", descanso: "60s", nota: "Recto abdominal inferior — al fallo" },
          ]},
          { dia: "Día 3 — Legs", ejercicios: [
            { nombre: "Sentadilla búlgara (pie en silla)", series: "4x10-12 por lado", descanso: "90s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Zancadas sin peso", series: "4x15 por lado", descanso: "75s", nota: "Cuádriceps, glúteos — RIR 1" },
            { nombre: "Hip Thrust con peso corporal", series: "5x25-30", descanso: "60s", nota: "Glúteo mayor — última serie al fallo" },
            { nombre: "Curl nórdico", series: "4x6-8", descanso: "90s", nota: "Isquiotibiales — RIR 1" },
            { nombre: "Sentadilla (sin peso)", series: "3x25", descanso: "60s", nota: "Cuádriceps, glúteos" },
            { nombre: "Plancha lateral", series: "3x45s por lado", descanso: "45s", nota: "Oblicuos" },
          ]},
          { dia: "Día 4 — Full Body (Volumen)", ejercicios: [
            { nombre: "Fondos en paralelas (tríceps)", series: "4x10-12", descanso: "90s", nota: "Tríceps general — RIR 1" },
            { nombre: "Dominadas agarre ancho", series: "4x6-8", descanso: "2min", nota: "Dorsal ancho — RIR 1" },
            { nombre: "Flexiones clásicas (Push Ups)", series: "3x20", descanso: "60s", nota: "Pectoral, tríceps — al fallo" },
            { nombre: "Sentadilla (sin peso)", series: "3x25", descanso: "60s", nota: "Cuádriceps, glúteos" },
            { nombre: "Bicicleta abdominal", series: "3x30", descanso: "45s", nota: "Oblicuos, recto abdominal — al fallo" },
            { nombre: "Mountain Climbers (Escaladores)", series: "3x30", descanso: "30s", nota: "Core, cardio" },
          ]},
        ]
      }
    }
  },
];

// ── ESTADO ──
const state = { dias: [], tipo: [], nivel: [] };
let modalNivelActivo = 'principiante';

function toggleDias(v, cb) { toggleState('dias', v, cb); }
function toggleTipo(v, cb) { toggleState('tipo', v, cb); }
function toggleNivel(v, cb) { toggleState('nivel', v, cb); }

function toggleState(key, value, checkbox) {
  if (checkbox.checked) {
    if (!state[key].includes(value)) state[key].push(value);
  } else {
    state[key] = state[key].filter(v => v !== value);
  }
  applyFilters();
}

function toggleGroup(id) {
  const body = document.getElementById(id);
  const arrow = document.getElementById(id + 'Arrow');
  body.classList.toggle('collapsed');
  arrow.style.transform = body.classList.contains('collapsed') ? 'rotate(180deg)' : 'rotate(0deg)';
}

function getFiltered() {
  return rutinas.filter(r => {
    const diasArr = Array.isArray(r.dias) ? r.dias : [r.dias];
    const dOk = state.dias.length === 0 || state.dias.some(d => diasArr.includes(Number(d)));
    const tOk = state.tipo.length === 0 || state.tipo.includes(r.tipo);
    const nOk = state.nivel.length === 0 || state.nivel.some(n => r.niveles[n] !== null && r.niveles[n] !== undefined);
    return dOk && tOk && nOk;
  });
}

function applyFilters() {
  const filtered = getFiltered();
  document.getElementById('resultsCount').textContent =
    filtered.length + ' rutina' + (filtered.length !== 1 ? 's' : '');

  const grid = document.getElementById('rutinasGrid');

  if (!filtered.length) {
    grid.innerHTML = '<div class="no-results" style="grid-column:1/-1">No se encontraron rutinas con esos filtros.</div>';
    return;
  }

  grid.innerHTML = filtered.map(r => {
    const diasArr = Array.isArray(r.dias) ? r.dias : [r.dias];
    const nivelesDisponibles = Object.keys(r.niveles).filter(n => r.niveles[n] !== null);
    return `
      <div class="rutina-card" onclick="openModal(${r.id})">
        <div class="rutina-card-top">
          <div class="rutina-tipo">${r.tipo}</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            ${nivelesDisponibles.map(n => `<span class="rutina-nivel nivel-${n}">${n.charAt(0).toUpperCase()+n.slice(1)}</span>`).join('')}
          </div>
        </div>
        <div class="rutina-nombre">${r.nombre}</div>
        <div class="rutina-desc">${r.desc}</div>
        <div class="rutina-card-bottom">
          <span class="rutina-dias-badge">📅 ${diasArr.join(' / ')} días/semana</span>
        </div>
      </div>`;
  }).join('');
}

function openModal(id) {
  const r = rutinas.find(r => r.id === id);
  if (!r) return;
  const nivelesDisponibles = Object.keys(r.niveles).filter(n => r.niveles[n] !== null);
  modalNivelActivo = nivelesDisponibles.includes(modalNivelActivo) ? modalNivelActivo : nivelesDisponibles[0];
  document.getElementById('mTitle').textContent = r.nombre;
  renderModalContenido(r, modalNivelActivo);
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden'; // bloquea scroll de la página
}

function closeModal(ev) {
  if (ev.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderModalContenido(r, nivel) {
  const nivelesDisponibles = Object.keys(r.niveles).filter(n => r.niveles[n] !== null);
  const datos = r.niveles[nivel];

  document.getElementById('mMeta').innerHTML = `
    <span class="modal-tag naranja">📅 ${datos.dias} días/semana</span>
    <span class="modal-tag naranja">${r.tipo}</span>
    ${datos.variante ? `<span class="modal-tag naranja">★ ${datos.variante}</span>` : ''}
  `;

  const botonesNivel = nivelesDisponibles.map(n => `
    <button class="nivel-btn btn-${n} ${n === nivel ? 'active' : ''}" onclick="cambiarNivel(${r.id}, '${n}')">
      ${n.charAt(0).toUpperCase() + n.slice(1)}
    </button>
  `).join('');

  const programa = datos.programa.map(dia => `
    <div class="dia-bloque">
      <div class="dia-titulo">${dia.dia}</div>
      ${dia.ejercicios.map(ej => `
        <div class="ejercicio-row">
          <div class="ejercicio-nombre">
            ${ej.nombre}
            ${ej.nota ? `<span style="display:block;font-size:10px;color:#ff6a00;margin-top:2px">${ej.nota}</span>` : ''}
          </div>
          <div class="ejercicio-series">${ej.series}</div>
          <div class="ejercicio-descanso">⏱ ${ej.descanso}</div>
        </div>
      `).join('')}
    </div>
  `).join('');

  document.getElementById('mBody').innerHTML =
    `<div class="nivel-selector">${botonesNivel}</div>` +
    `<div class="modal-nota" style="margin-bottom:1.5rem">⚠️ Hacé 5-10 minutos de calentamiento antes de empezar. Las primeras series de compuestos hacélas con menos peso.</div>` +
    programa +
    (datos.nota ? `<div class="modal-nota">💡 ${datos.nota}</div>` : '');
}

function cambiarNivel(id, nivel) {
  modalNivelActivo = nivel;
  const r = rutinas.find(r => r.id === id);
  if (r) renderModalContenido(r, nivel);
}


function clearFilters() {
  state.dias = []; state.tipo = []; state.nivel = [];
  document.querySelectorAll('.filtros-sidebar input').forEach(i => i.checked = false);
  applyFilters();
}

applyFilters();