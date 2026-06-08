const exercises = [

  // ══════════════════════════════
  // PECHO
  // ══════════════════════════════

  { name:"Press banca plano con barra", muscle:["pecho"], eq:"barra", dif:"intermedio", zona:"medio",
    primary:[{m:"Pectoral mayor",p:70}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:10}],
    variantes:["Con mancuernas","En máquina Smith"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Acostado en el banco, agarrá la barra ligeramente más ancho que los hombros.","Bajá la barra controlado hasta rozar el pecho.","Empujá explosivo hacia arriba extendiendo los codos.","Mantené los pies en el suelo y el core activo."],
    errors:["Rebotar la barra en el pecho.","Levantar los glúteos del banco.","Agarre demasiado cerrado o abierto.","No bajar hasta el pecho."] },

  { name:"Press banca inclinado con barra", muscle:["pecho","hombros"], eq:"barra", dif:"intermedio", zona:"superior",
    primary:[{m:"Pectoral mayor superior",p:60}], secondary:[{m:"Deltoides anterior",p:25},{m:"Tríceps",p:15}],
    variantes:["Con mancuernas","En máquina Smith inclinada"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Incliná el banco entre 30° y 45°.","Agarrá la barra al ancho de hombros.","Bajá hasta el pecho superior controlado.","Empujá hacia arriba."],
    errors:["Inclinación excesiva del banco (más de 45° trabaja más hombro).","No bajar completamente.","Arquear demasiado la espalda."] },

  { name:"Press banca declinado con barra", muscle:["pecho"], eq:"barra", dif:"intermedio", zona:"inferior",
    primary:[{m:"Pectoral mayor inferior",p:75}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:5}],
    variantes:["Con mancuernas","En máquina Smith declinada"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Recostado en banco declinado con pies asegurados.","Bajá la barra al pecho inferior controlado.","Empujá hacia arriba.","Controlá el descenso."],
    errors:["No asegurar bien los pies.","Bajar demasiado rápido.","No bajar hasta el pecho."] },

  { name:"Press banca Smith plano", muscle:["pecho"], eq:"máquina", dif:"principiante", zona:"medio",
    primary:[{m:"Pectoral mayor",p:70}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:10}],
    variantes:["Con barra libre","Con mancuernas"],
    sets:4, reps:"10-12", rest:"90s",
    steps:["Colocá el banco plano bajo la barra Smith.","Agarrá la barra al ancho de hombros.","Desenganchá y bajá hasta el pecho.","Empujá hacia arriba y reenganchá al terminar."],
    errors:["Usar la guía como excusa para no controlar el movimiento.","No bajar completamente."] },

  { name:"Press banca Smith inclinado", muscle:["pecho","hombros"], eq:"máquina", dif:"principiante", zona:"superior",
    primary:[{m:"Pectoral mayor superior",p:60}], secondary:[{m:"Deltoides anterior",p:25},{m:"Tríceps",p:15}],
    variantes:["Con barra libre inclinada","Con mancuernas"],
    sets:4, reps:"10-12", rest:"90s",
    steps:["Colocá el banco inclinado 30°-45° bajo la barra Smith.","Bajá hasta el pecho superior.","Empujá hacia arriba."],
    errors:["Inclinación excesiva del banco.","No controlar la bajada."] },

  { name:"Press banca Smith declinado", muscle:["pecho"], eq:"máquina", dif:"principiante", zona:"inferior",
    primary:[{m:"Pectoral mayor inferior",p:75}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:5}],
    variantes:["Con barra libre declinada","Con mancuernas"],
    sets:4, reps:"10-12", rest:"90s",
    steps:["Colocá el banco declinado bajo la barra Smith con pies asegurados.","Bajá hasta el pecho inferior.","Empujá hacia arriba."],
    errors:["No asegurar los pies.","Bajar demasiado rápido."] },

  { name:"Press plano con mancuernas", muscle:["pecho"], eq:"mancuernas", dif:"principiante", zona:"medio",
    primary:[{m:"Pectoral mayor",p:70}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:10}],
    variantes:["Con barra","En máquina Smith"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Acostado con mancuernas a la altura del pecho.","Empujá hacia arriba hasta extender los brazos.","Bajá controlado con los codos a 45°."],
    errors:["Dejar caer las mancuernas demasiado abajo.","No controlar el descenso."] },

  { name:"Press inclinado con mancuernas", muscle:["pecho","hombros"], eq:"mancuernas", dif:"principiante", zona:"superior",
    primary:[{m:"Pectoral mayor superior",p:60}], secondary:[{m:"Deltoides anterior",p:25},{m:"Tríceps",p:15}],
    variantes:["Con barra","En máquina Smith"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Banco inclinado entre 30° y 45°.","Empujá las mancuernas hacia arriba y al centro.","Bajá controlado."],
    errors:["Inclinación excesiva.","No llegar al rango completo."] },

  { name:"Press declinado con mancuernas", muscle:["pecho"], eq:"mancuernas", dif:"intermedio", zona:"inferior",
    primary:[{m:"Pectoral mayor inferior",p:75}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:5}],
    variantes:["Con barra","En máquina Smith"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Banco declinado con pies asegurados.","Empujá las mancuernas hacia arriba.","Bajá controlado."],
    errors:["No asegurar los pies.","Dejar caer las mancuernas sin control."] },

  { name:"Aperturas planas con mancuernas (Pec Fly)", muscle:["pecho"], eq:"mancuernas", dif:"principiante", zona:"medio",
    primary:[{m:"Pectoral mayor",p:80}], secondary:[{m:"Deltoides anterior",p:20}],
    variantes:["En polea doble baja","En máquina contractora"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Acostado, mancuernas arriba con codos levemente flexionados.","Abrí los brazos en arco hacia abajo.","Volvé apretando el pecho en el punto más alto."],
    errors:["Bajar demasiado tensionando el hombro.","Extender los codos completamente.","Peso excesivo sin control."] },

  { name:"Aperturas inclinadas con mancuernas", muscle:["pecho","hombros"], eq:"mancuernas", dif:"principiante", zona:"superior",
    primary:[{m:"Pectoral mayor superior",p:70}], secondary:[{m:"Deltoides anterior",p:30}],
    variantes:["En polea baja inclinada","En máquina contractora inclinada"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Banco inclinado 30°-45°.","Abrí los brazos en arco controlado.","Volvé apretando el pecho superior."],
    errors:["Inclinación excesiva.","No controlar el descenso."] },

  { name:"Pec Deck (Contractora)", muscle:["pecho"], eq:"máquina", dif:"principiante", zona:"medio",
    primary:[{m:"Pectoral mayor",p:85}], secondary:[{m:"Deltoides anterior",p:15}],
    variantes:["Con banco plano en doble polea baja","Aperturas con mancuernas"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Sentado en la máquina con los codos a 90°.","Cerrá los brazos hacia el centro apretando el pecho.","Volvé controlado sin soltar la tensión."],
    errors:["Dejar que los codos caigan.","Ir demasiado atrás en el regreso.","No apretar en la contracción."] },

  { name:"Cruce de poleas alto a bajo", muscle:["pecho"], eq:"poleas", dif:"principiante", zona:"inferior",
    primary:[{m:"Pectoral mayor inferior",p:75}], secondary:[{m:"Deltoides anterior",p:15},{m:"Serrato anterior",p:10}],
    variantes:["Unilateral","Con banda elástica"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Colocá las poleas en posición alta.","Agarrá un cable con cada mano en el centro.","Con los codos levemente flexionados llevá las manos hacia abajo cruzándolas.","Volvé controlado."],
    errors:["Doblar demasiado los codos.","No controlar la vuelta.","Inclinarse demasiado hacia adelante."] },

  { name:"Cruce de poleas bajo a alto", muscle:["pecho","hombros"], eq:"poleas", dif:"principiante", zona:"superior",
    primary:[{m:"Pectoral mayor superior",p:65}], secondary:[{m:"Deltoides anterior",p:35}],
    variantes:["Unilateral","Con banda elástica"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Colocá las poleas en posición baja.","Llevá las manos hacia arriba y al centro cruzándolas.","Volvé controlado."],
    errors:["No controlar el regreso.","Usar demasiado el hombro.","Arquear la espalda."] },

  { name:"Cruce de poleas al pecho (Cable Pec Fly)", muscle:["pecho"], eq:"poleas", dif:"principiante", zona:"medio",
    primary:[{m:"Pectoral mayor",p:80}], secondary:[{m:"Deltoides anterior",p:20}],
    variantes:["Unilateral","Con mancuernas en banco plano"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Colocá las poleas a la altura del pecho.","Llevá las manos al centro con los codos levemente flexionados.","Volvé controlado."],
    errors:["Mover los codos durante el movimiento.","No apretar en la contracción."] },

  { name:"Press en polea plano (Cable Chest Press)", muscle:["pecho"], eq:"poleas", dif:"intermedio", zona:"medio",
    primary:[{m:"Pectoral mayor",p:65}], secondary:[{m:"Tríceps",p:25},{m:"Deltoides anterior",p:10}],
    variantes:["Con barra libre","Con mancuernas"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Colocá las poleas a la altura del pecho.","Empujá hacia adelante extendiendo los brazos.","Volvé controlado."],
    errors:["No controlar la vuelta.","Dejar que los codos bajen demasiado."] },

  { name:"Flexiones clásicas (Push Ups)", muscle:["pecho"], eq:"sin equipo", dif:"principiante", zona:"medio",
    primary:[{m:"Pectoral mayor",p:65}], secondary:[{m:"Tríceps",p:25},{m:"Deltoides anterior",p:10}],
    variantes:["Con banda elástica","Con pies elevados","Con manos elevadas","Diamante"],
    sets:3, reps:"15-20", rest:"60s",
    steps:["Posición de plancha con manos al ancho de hombros.","Bajá el pecho hasta casi tocar el suelo.","Empujá hacia arriba extendiendo los brazos."],
    errors:["Dejar caer la cadera.","No bajar completamente.","Colocar las manos muy adelante."] },

  { name:"Flexiones inclinadas (Decline Push Ups)", muscle:["pecho"], eq:"sin equipo", dif:"principiante", zona:"inferior",
    primary:[{m:"Pectoral mayor inferior",p:70}], secondary:[{m:"Tríceps",p:20},{m:"Deltoides anterior",p:10}],
    variantes:["Con banda elástica"],
    sets:3, reps:"15-20", rest:"60s",
    steps:["Apoyá las manos en el suelo más abajo que los pies.","Bajá el pecho controlado.","Empujá hacia arriba."],
    errors:["Dejar caer la cadera.","No bajar completamente."] },

  { name:"Flexiones con pies elevados (Incline Push Ups al revés)", muscle:["pecho","hombros"], eq:"sin equipo", dif:"intermedio", zona:"superior",
    primary:[{m:"Pectoral mayor superior",p:60}], secondary:[{m:"Deltoides anterior",p:30},{m:"Tríceps",p:10}],
    variantes:["Con manos en banco","Con banda elástica"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Colocá los pies en una silla o banco.","Realizá la flexión con el torso más vertical.","Bajá controlado y empujá."],
    errors:["No mantener el cuerpo recto.","Bajar demasiado rápido."] },

  { name:"Flexiones diamante (Diamond Push Ups)", muscle:["pecho"], eq:"sin equipo", dif:"intermedio", zona:"medio + tríceps",
    primary:[{m:"Tríceps",p:55}], secondary:[{m:"Pectoral mayor",p:35},{m:"Deltoides anterior",p:10}],
    variantes:["Con banda elástica","Con pies elevados"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Manos juntas formando un diamante bajo el pecho.","Bajá manteniendo los codos cerca del cuerpo.","Empujá hacia arriba."],
    errors:["Abrir los codos.","No bajar completamente.","Dejar caer la cadera."] },

  { name:"Fondos en paralelas para pecho (Parallel Bar Dips)", muscle:["pecho"], eq:"sin equipo", dif:"avanzado", zona:"inferior",
    primary:[{m:"Pectoral mayor inferior",p:60}], secondary:[{m:"Tríceps",p:30},{m:"Deltoides anterior",p:10}],
    variantes:["Fondos asistidos en máquina","Bench dips"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Agarrá las paralelas e incliná el torso hacia adelante.","Descendé hasta que los codos formen 90°.","Empujá hacia arriba sin bloquear los codos."],
    errors:["No inclinarse hacia adelante (trabaja más tríceps).","Bajar demasiado rápido.","Bloquear los codos arriba."] },

  { name:"Pullover con mancuerna", muscle:["pecho","espalda"], eq:"mancuernas", dif:"intermedio", zona:"superior + serrato",
    primary:[{m:"Pectoral mayor superior",p:45},{m:"Dorsal ancho",p:35}], secondary:[{m:"Serrato anterior",p:20}],
    variantes:["En polea alta","Con barra EZ"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Acostado perpendicular al banco apoyando solo los hombros.","Sostenés la mancuerna con ambas manos sobre el pecho.","Bajá la mancuerna hacia atrás por encima de la cabeza.","Volvé al punto inicial controlando la tensión."],
    errors:["Doblar demasiado los codos.","Bajar demasiado tensionando el hombro.","No mantener el core activo."] },

  // ══════════════════════════════
  // ESPALDA
  // ══════════════════════════════

  { name:"Jalón dorsal con barra agarre ancho", muscle:["espalda"], eq:"máquina", dif:"principiante", zona:"amplitud",
    primary:[{m:"Dorsal ancho",p:70}], secondary:[{m:"Bíceps",p:20},{m:"Romboides",p:10}],
    variantes:["Con agarre cerrado","Con agarre neutro","Jalón tras nuca (no recomendado)"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Sentado en la máquina, agarrá la barra con agarre prono ancho.","Jalá hacia el pecho apretando los codos hacia abajo.","Volvé controlado sin perder tensión."],
    errors:["Inclinarse demasiado hacia atrás.","No llegar al pecho.","Usar el impulso del cuerpo."] },

  { name:"Jalón dorsal con agarre cerrado", muscle:["espalda"], eq:"máquina", dif:"principiante", zona:"densidad + amplitud",
    primary:[{m:"Dorsal ancho",p:65}], secondary:[{m:"Romboides",p:20},{m:"Bíceps",p:15}],
    variantes:["Con agarre neutro","Con polea alta unilateral"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Agarre cerrado neutro o prono.","Jalá hacia el pecho con los codos apuntando hacia abajo y adentro.","Volvé controlado."],
    errors:["No contraer la espalda en el punto bajo.","Usar demasiado los bíceps."] },

  { name:"Jalón unilateral en polea alta", muscle:["espalda"], eq:"poleas", dif:"intermedio", zona:"amplitud",
    primary:[{m:"Dorsal ancho",p:65}], secondary:[{m:"Redondo mayor",p:20},{m:"Bíceps",p:15}],
    variantes:["Con jalón bilateral","Con dominadas"],
    sets:3, reps:"10-12", rest:"75s",
    steps:["Sentado de lado a la polea alta.","Agarrá con una mano y jalá hacia abajo apretando el dorsal.","Volvé controlado."],
    errors:["No retraer el omóplato.","Usar el torso para impulsar."] },

  { name:"Remo Gironda con barra", muscle:["espalda"], eq:"barra", dif:"avanzado", zona:"amplitud",
    primary:[{m:"Dorsal ancho",p:55}], secondary:[{m:"Romboides",p:25},{m:"Redondo mayor",p:15},{m:"Bíceps",p:5}],
    variantes:["Con polea","Con máquina"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Torso inclinado, agarrá la barra con agarre supino ancho.","Jalá hacia el pecho alto (no al abdomen).","Llevá los codos hacia atrás y afuera.","Volvé controlado."],
    errors:["Jalar hacia el abdomen en vez del pecho.","No llevar los codos hacia afuera.","Redondear la espalda."] },

  { name:"Remo con barra clásico", muscle:["espalda"], eq:"barra", dif:"intermedio", zona:"densidad",
    primary:[{m:"Dorsal ancho",p:50}], secondary:[{m:"Trapecio medio",p:25},{m:"Romboides",p:15},{m:"Bíceps",p:10}],
    variantes:["Remo Pendlay","Remo Yates","Con mancuernas"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Incliná el torso a 45°, espalda recta.","Jalá la barra hacia el ombligo apretando la espalda.","Bajá controlado."],
    errors:["Redondear la espalda baja.","Usar demasiado los bíceps.","Levantar el torso para ayudarse."] },

  { name:"Remo en T con barra", muscle:["espalda"], eq:"barra", dif:"intermedio", zona:"densidad",
    primary:[{m:"Dorsal ancho",p:50}], secondary:[{m:"Romboides",p:25},{m:"Trapecio medio",p:15},{m:"Bíceps",p:10}],
    variantes:["En máquina T-bar","Con barra libre en rincón"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Colocá la barra en un rincón con peso en un extremo.","Agarrá con ambas manos el extremo con peso.","Jalá hacia el pecho manteniendo el torso inclinado.","Bajá controlado."],
    errors:["Redondear la espalda.","Usar el impulso del torso.","No retraer los omóplatos."] },

  { name:"Remo con mancuerna a una mano", muscle:["espalda"], eq:"mancuernas", dif:"principiante", zona:"densidad",
    primary:[{m:"Dorsal ancho",p:55}], secondary:[{m:"Romboides",p:20},{m:"Trapecio medio",p:15},{m:"Bíceps",p:10}],
    variantes:["Con polea","Con barra"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Apoyá una mano y rodilla en el banco.","Con la mano libre jalá la mancuerna hacia la cadera.","Apretá la espalda en el punto más alto.","Bajá controlado."],
    errors:["Rotar el torso para ayudarse.","No retraer el omóplato.","Tirar con el bíceps en vez de la espalda."] },

  { name:"Remo en polea baja agarre cerrado", muscle:["espalda"], eq:"poleas", dif:"principiante", zona:"densidad",
    primary:[{m:"Dorsal ancho",p:50}], secondary:[{m:"Romboides",p:25},{m:"Trapecio medio",p:15},{m:"Bíceps",p:10}],
    variantes:["Agarre abierto","Agarre neutro","Remo en máquina"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Sentado frente a la polea baja, agarrá el triángulo.","Jalá hacia el ombligo apretando los omóplatos.","Volvé controlado sin redondear la espalda."],
    errors:["Redondear la espalda al final.","Inclinarse demasiado hacia atrás.","No retraer los omóplatos."] },

  { name:"Lat Push Down (Pulldown recto de pie)", muscle:["espalda"], eq:"poleas", dif:"principiante", zona:"amplitud",
    primary:[{m:"Dorsal ancho",p:65}], secondary:[{m:"Serrato anterior",p:20},{m:"Tríceps",p:15}],
    variantes:["Con barra larga","Con barra corta","Con soga (activa más el serrato)"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De pie frente a la polea alta, brazos extendidos.","Jalá hacia abajo hasta las caderas manteniendo los brazos rectos.","Volvé controlado sin doblar los codos."],
    errors:["Doblar los codos convirtiendo en jalón.","No mantener el core activo.","Inclinar el torso hacia adelante."] },

  { name:"Remo escapular con barra en polea baja", muscle:["espalda"], eq:"poleas", dif:"intermedio", zona:"densidad + trapecio",
    primary:[{m:"Trapecio medio",p:40}], secondary:[{m:"Romboides",p:30},{m:"Dorsal ancho",p:20},{m:"Infraespinoso",p:10}],
    variantes:["Con barra libre","Con mancuernas"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Sentado frente a la polea baja, brazos extendidos.","Sin doblar los codos, retraé los omóplatos jalando la barra.","Volvé controlado dejando que los omóplatos se abran."],
    errors:["Doblar los codos durante el movimiento.","No llegar a la retracción completa."] },

  { name:"Dominadas agarre ancho", muscle:["espalda"], eq:"sin equipo", dif:"avanzado", zona:"amplitud",
    primary:[{m:"Dorsal ancho",p:70}], secondary:[{m:"Bíceps",p:20},{m:"Romboides",p:10}],
    variantes:["Agarre cerrado","Agarre supino (Chin Ups)","Dominadas asistidas"],
    sets:4, reps:"6-10", rest:"90s",
    steps:["Agarrá la barra con agarre prono ancho.","Jalá hacia arriba hasta que el pecho toque la barra.","Bajá lento y controlado."],
    errors:["Usar impulso del cuerpo.","No bajar completamente.","Encogerse de hombros al subir."] },

  { name:"Chin Ups (Dominadas supinas)", muscle:["espalda","biceps"], eq:"sin equipo", dif:"avanzado", zona:"amplitud + bíceps",
    primary:[{m:"Dorsal ancho",p:60}], secondary:[{m:"Bíceps braquial",p:30},{m:"Romboides",p:10}],
    variantes:["Agarre ancho prono","Agarre neutro","Asistidas en máquina"],
    sets:4, reps:"6-10", rest:"90s",
    steps:["Agarrá la barra con agarre supino al ancho de hombros.","Jalá hacia arriba hasta que el mentón pase la barra.","Bajá controlado."],
    errors:["No bajar completamente.","Usar demasiado impulso."] },

  { name:"Face Pull en polea", muscle:["espalda","hombros"], eq:"poleas", dif:"principiante", zona:"trapecio + posterior",
    primary:[{m:"Deltoides posterior",p:40}], secondary:[{m:"Trapecio alto",p:35},{m:"Romboides",p:15},{m:"Manguito rotador",p:10}],
    variantes:["Con banda elástica","Con polea baja"],
    sets:3, reps:"15-20", rest:"60s",
    steps:["Colocá la polea a la altura de la cara.","Agarrá la soga con ambas manos y retrocedé.","Jalá hacia la cara separando las manos.","Volvé controlado."],
    errors:["No separar las manos al jalar.","Bajar demasiado los codos.","Usar demasiado peso."] },

  { name:"Peso muerto", muscle:["espalda"], eq:"barra", dif:"avanzado", zona:"lumbar + general",
    primary:[{m:"Erector espinal",p:40}], secondary:[{m:"Dorsal ancho",p:25},{m:"Glúteos",p:20},{m:"Isquiotibiales",p:15}],
    variantes:["Peso muerto rumano","Peso muerto sumo","Rack pull"],
    sets:4, reps:"5-8", rest:"120s",
    steps:["Pies al ancho de cadera, barra sobre el empeine.","Agachate con espalda recta y agarrá la barra.","Empujá el suelo y extendé caderas y rodillas.","Bajá controlando la tensión."],
    errors:["Redondear la espalda baja (lesión grave).","Alejar la barra del cuerpo.","Hiperextender al llegar arriba.","Usar los brazos para levantar."] },

  { name:"Hiperextensiones", muscle:["espalda"], eq:"sin equipo", dif:"principiante", zona:"lumbar",
    primary:[{m:"Erector espinal",p:70}], secondary:[{m:"Glúteos",p:20},{m:"Isquiotibiales",p:10}],
    variantes:["Con peso en el pecho","Superman en el suelo"],
    sets:3, reps:"15-20", rest:"60s",
    steps:["En el banco romano, cruzá los brazos sobre el pecho.","Bajá el torso hasta 90°.","Subí hasta quedar alineado con las piernas sin hiperextender."],
    errors:["Hiperextender la espalda al subir.","Hacer el movimiento demasiado rápido.","Poner las manos detrás de la cabeza jalando el cuello."] },

  // ══════════════════════════════
  // HOMBROS
  // ══════════════════════════════

  { name:"Press militar con barra", muscle:["hombros"], eq:"barra", dif:"intermedio", zona:"anterior + lateral",
    primary:[{m:"Deltoides anterior",p:50}], secondary:[{m:"Deltoides lateral",p:30},{m:"Tríceps",p:20}],
    variantes:["Con mancuernas","En máquina Smith","Sentado o de pie"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["De pie o sentado, barra a la altura del pecho con agarre al ancho de hombros.","Empujá la barra hacia arriba hasta extender los brazos.","Bajá controlado hasta el mentón."],
    errors:["Arquear excesivamente la espalda baja.","Llevar la barra hacia adelante en vez de vertical.","No activar el core."] },

  { name:"Press militar con mancuernas", muscle:["hombros"], eq:"mancuernas", dif:"principiante", zona:"anterior + lateral",
    primary:[{m:"Deltoides anterior",p:50}], secondary:[{m:"Deltoides lateral",p:30},{m:"Tríceps",p:20}],
    variantes:["Con barra","En máquina","Alternado"],
    sets:4, reps:"10-12", rest:"90s",
    steps:["Sentado o de pie, mancuernas a la altura de los hombros.","Empujá hacia arriba hasta casi extender los brazos.","Bajá controlado."],
    errors:["Arquear la espalda.","Bajar las mancuernas demasiado.","Usar impulso del cuerpo."] },

  { name:"Press militar en máquina", muscle:["hombros"], eq:"máquina", dif:"principiante", zona:"anterior + lateral",
    primary:[{m:"Deltoides anterior",p:50}], secondary:[{m:"Deltoides lateral",p:30},{m:"Tríceps",p:20}],
    variantes:["Con barra","Con mancuernas"],
    sets:4, reps:"10-12", rest:"90s",
    steps:["Sentado en la máquina con el respaldo ajustado.","Empujá los mangos hacia arriba extendiendo los brazos.","Bajá controlado."],
    errors:["No ajustar bien el asiento.","No bajar completamente."] },

  { name:"Vuelos laterales con mancuernas", muscle:["hombros"], eq:"mancuernas", dif:"principiante", zona:"lateral",
    primary:[{m:"Deltoides lateral",p:75}], secondary:[{m:"Deltoides anterior",p:15},{m:"Trapecio",p:10}],
    variantes:["En polea baja","En máquina","Unilateral inclinado"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De pie, mancuernas a los lados con codos levemente flexionados.","Elevá los brazos a los lados hasta la altura de los hombros.","Bajá controlado resistiendo la gravedad."],
    errors:["Usar impulso del cuerpo.","Subir los brazos por encima de los hombros.","Rotar las muñecas hacia arriba."] },

  { name:"Vuelos laterales en polea baja con tobillera", muscle:["hombros"], eq:"poleas", dif:"intermedio", zona:"lateral",
    primary:[{m:"Deltoides lateral",p:80}], secondary:[{m:"Deltoides anterior",p:10},{m:"Trapecio",p:10}],
    variantes:["Con mancuernas","Con agarre rectangular unilateral"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Colocá la tobillera en la polea baja y agarrala con la mano opuesta.","Parate de lado a la máquina.","Elevá el brazo hacia el lado hasta la altura del hombro.","Bajá controlado."],
    errors:["No mantener el codo levemente flexionado.","Usar el torso para impulsar.","Subir más allá del hombro."] },

  { name:"Vuelos laterales en polea baja con agarre en D", muscle:["hombros"], eq:"poleas", dif:"intermedio", zona:"lateral",
    primary:[{m:"Deltoides lateral",p:80}], secondary:[{m:"Deltoides anterior",p:10},{m:"Trapecio",p:10}],
    variantes:["Con tobillera","Con mancuernas"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Agarrá el agarre en D de la polea baja con la mano opuesta.","Parate de lado a la máquina.","Elevá el brazo hacia el lado hasta la altura del hombro.","Bajá controlado."],
    errors:["Rotar el hombro al subir.","Usar demasiado el trapecio.","No controlar el descenso."] },

  { name:"Elevación frontal con mancuernas (Dumbbell Front Raise)", muscle:["hombros"], eq:"mancuernas", dif:"principiante", zona:"anterior",
    primary:[{m:"Deltoides anterior",p:80}], secondary:[{m:"Pectoral mayor superior",p:20}],
    variantes:["Con barra","Con polea baja","Alternado"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De pie, mancuernas al frente con agarre prono.","Elevá los brazos al frente hasta la altura de los hombros.","Bajá controlado."],
    errors:["Usar impulso del cuerpo.","Subir por encima del hombro.","No controlar el descenso."] },

  { name:"Elevación frontal con barra", muscle:["hombros"], eq:"barra", dif:"principiante", zona:"anterior",
    primary:[{m:"Deltoides anterior",p:80}], secondary:[{m:"Pectoral mayor superior",p:20}],
    variantes:["Con mancuernas","Con polea baja","Con disco"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De pie, barra con agarre prono al ancho de hombros.","Elevá la barra al frente hasta la altura de los hombros.","Bajá controlado."],
    errors:["Balancear el torso.","Subir demasiado.","No controlar el descenso."] },

  { name:"Remo al mentón con barra (Barbell Upright Row)", muscle:["hombros","espalda"], eq:"barra", dif:"intermedio", zona:"lateral + trapecio",
    primary:[{m:"Deltoides lateral",p:45}], secondary:[{m:"Trapecio alto",p:40},{m:"Bíceps",p:15}],
    variantes:["Con mancuernas","Con polea baja","Con soga"],
    sets:3, reps:"10-12", rest:"75s",
    steps:["De pie, barra con agarre prono cerrado.","Jalá la barra hacia el mentón con los codos apuntando hacia arriba.","Bajá controlado."],
    errors:["Agarre demasiado cerrado tensionando el hombro.","No llegar al mentón.","Usar el impulso del cuerpo."] },

  { name:"Press vertical en polea (Cable Overhead Press)", muscle:["hombros"], eq:"poleas", dif:"intermedio", zona:"anterior + lateral",
    primary:[{m:"Deltoides anterior",p:50}], secondary:[{m:"Deltoides lateral",p:30},{m:"Tríceps",p:20}],
    variantes:["Con barra","Con mancuernas"],
    sets:4, reps:"10-12", rest:"75s",
    steps:["Colocá las poleas bajas a los lados.","Agarrá un cable con cada mano a la altura de los hombros.","Empujá hacia arriba hasta extender los brazos.","Bajá controlado."],
    errors:["No activar el core.","Arquear la espalda.","No extender completamente."] },

  // ══════════════════════════════
  // BÍCEPS
  // ══════════════════════════════

  { name:"Curl en polea baja con barra", muscle:["biceps"], eq:"poleas", dif:"principiante", zona:"general",
    primary:[{m:"Bíceps braquial",p:70}], secondary:[{m:"Braquial",p:20},{m:"Braquiorradial",p:10}],
    variantes:["Con barra EZ","Con soga (martillo)","Unilateral"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De pie frente a la polea baja, agarrá la barra con agarre supino.","Flexioná los codos llevando la barra hacia los hombros.","Bajá controlado."],
    errors:["Mover los codos hacia adelante.","Usar el impulso del torso.","Bajar demasiado rápido."] },

  { name:"Curl en polea baja sin agarre (agarre libre)", muscle:["biceps"], eq:"poleas", dif:"principiante", zona:"general",
    primary:[{m:"Bíceps braquial",p:70}], secondary:[{m:"Braquial",p:20},{m:"Braquiorradial",p:10}],
    variantes:["Con barra","Con soga"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Agarrá el cable directamente sin agarre.","Flexioná los codos llevando las manos hacia los hombros.","Bajá controlado."],
    errors:["No controlar la muñeca.","Mover los codos."] },

  { name:"Curl con soga en polea baja (Martillo en polea)", muscle:["biceps"], eq:"poleas", dif:"principiante", zona:"braquial",
    primary:[{m:"Braquial",p:50}], secondary:[{m:"Braquiorradial",p:30},{m:"Bíceps braquial",p:20}],
    variantes:["Con agarre en V","Con mancuernas martillo"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Agarrá la soga con agarre neutro (pulgares arriba).","Flexioná los codos llevando las manos hacia los hombros.","Bajá controlado sin rotar la muñeca."],
    errors:["Rotar la muñeca perdiendo el agarre neutro.","Mover los codos."] },

  { name:"Curl con barra recta", muscle:["biceps"], eq:"barra", dif:"principiante", zona:"general",
    primary:[{m:"Bíceps braquial",p:70}], secondary:[{m:"Braquial",p:20},{m:"Braquiorradial",p:10}],
    variantes:["Con barra EZ","Con mancuernas","Cheat curl"],
    sets:3, reps:"10-12", rest:"60s",
    steps:["De pie, barra con agarre supino al ancho de hombros.","Flexioná los codos llevando la barra hacia los hombros.","Bajá lento sintiendo la tensión."],
    errors:["Mover los codos hacia adelante.","Usar el impulso de la espalda.","Bajar demasiado rápido."] },

  { name:"Curl con barra EZ", muscle:["biceps"], eq:"barra", dif:"principiante", zona:"general",
    primary:[{m:"Bíceps braquial",p:65}], secondary:[{m:"Braquial",p:20},{m:"Braquiorradial",p:15}],
    variantes:["Con barra recta","Con mancuernas"],
    sets:3, reps:"10-12", rest:"60s",
    steps:["Agarrá la barra EZ en la posición angulada más cómoda.","Flexioná los codos llevando la barra hacia los hombros.","Bajá controlado."],
    errors:["Mover los codos.","No bajar completamente."] },

  { name:"Curl concentrado con mancuerna", muscle:["biceps"], eq:"mancuernas", dif:"principiante", zona:"cabeza corta + pico",
    primary:[{m:"Bíceps braquial cabeza corta",p:80}], secondary:[{m:"Braquial",p:20}],
    variantes:["En máquina predicador","En polea baja"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Sentado, apoyá el codo en la cara interna del muslo.","Flexioná completamente el codo llevando la mancuerna al hombro.","Volvé controlado."],
    errors:["Mover el codo del muslo.","Usar el hombro para ayudarse."] },

  { name:"Curl sentado con mancuernas", muscle:["biceps"], eq:"mancuernas", dif:"principiante", zona:"general",
    primary:[{m:"Bíceps braquial",p:70}], secondary:[{m:"Braquial",p:20},{m:"Braquiorradial",p:10}],
    variantes:["De pie","Inclinado","Alternado"],
    sets:3, reps:"10-12", rest:"60s",
    steps:["Sentado en un banco, mancuernas a los costados.","Flexioná los codos llevando las mancuernas a los hombros rotando la muñeca.","Bajá controlado."],
    errors:["Balancear el torso para ayudarse.","No rotar completamente la muñeca."] },

  { name:"Curl alterno con mancuernas", muscle:["biceps"], eq:"mancuernas", dif:"principiante", zona:"general",
    primary:[{m:"Bíceps braquial",p:70}], secondary:[{m:"Braquial",p:20},{m:"Braquiorradial",p:10}],
    variantes:["Simultáneo","Inclinado","Con polea"],
    sets:3, reps:"10-12", rest:"60s",
    steps:["De pie, mancuernas a los costados.","Flexioná un brazo rotando la muñeca hacia arriba.","Alternás con el otro brazo.","Bajá controlado."],
    errors:["Rotar demasiado el hombro.","Usar el torso para impulsar."] },

  { name:"Curl martillo con mancuernas", muscle:["biceps"], eq:"mancuernas", dif:"principiante", zona:"braquial",
    primary:[{m:"Braquial",p:50}], secondary:[{m:"Braquiorradial",p:30},{m:"Bíceps braquial",p:20}],
    variantes:["Con soga en polea","Con agarre en V","Curl Zottman"],
    sets:3, reps:"10-12", rest:"60s",
    steps:["De pie, mancuernas con agarre neutro (pulgares arriba).","Flexioná los codos llevando las mancuernas a los hombros.","Bajá controlado."],
    errors:["Girar la muñeca perdiendo el agarre neutro.","Balancear el torso.","No bajar completamente."] },

  // ══════════════════════════════
  // TRÍCEPS
  // ══════════════════════════════

  { name:"Extensión en polea con soga", muscle:["triceps"], eq:"poleas", dif:"principiante", zona:"lateral + medial",
    primary:[{m:"Tríceps cabeza lateral",p:50}], secondary:[{m:"Tríceps cabeza medial",p:35},{m:"Tríceps cabeza larga",p:15}],
    variantes:["Con barra recta","Con agarre inverso","Unilateral"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De pie frente a la polea alta con la soga.","Pegá los codos al cuerpo.","Extendé los brazos hacia abajo separando la soga al final.","Volvé controlado."],
    errors:["Separar los codos del cuerpo.","Inclinarse hacia adelante.","No separar la soga al final."] },

  { name:"Extensión en polea overhead con soga", muscle:["triceps"], eq:"poleas", dif:"intermedio", zona:"cabeza larga",
    primary:[{m:"Tríceps cabeza larga",p:70}], secondary:[{m:"Tríceps cabeza lateral",p:20},{m:"Tríceps cabeza medial",p:10}],
    variantes:["Con mancuerna","Con barra EZ","Unilateral"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["De espaldas a la polea alta con la soga.","Agarrá la soga detrás de la cabeza.","Extendé los brazos hacia adelante sobre la cabeza.","Volvé controlado."],
    errors:["Mover los codos durante el movimiento.","No extender completamente.","Usar demasiado peso."] },

  { name:"Press cerrado con barra", muscle:["triceps","pecho"], eq:"barra", dif:"intermedio", zona:"general",
    primary:[{m:"Tríceps",p:60}], secondary:[{m:"Pectoral mayor",p:25},{m:"Deltoides anterior",p:15}],
    variantes:["Con mancuernas","En máquina Smith"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Acostado, agarrá la barra con manos al ancho de los hombros.","Bajá la barra al pecho con los codos cerca del cuerpo.","Empujá hacia arriba extendiendo completamente."],
    errors:["Agarre demasiado cerrado tensionando las muñecas.","Abrir los codos.","No bajar completamente."] },

  { name:"Rompecráneos con barra (Skullcrusher)", muscle:["triceps"], eq:"barra", dif:"intermedio", zona:"larga + lateral",
    primary:[{m:"Tríceps cabeza larga",p:50}], secondary:[{m:"Tríceps cabeza lateral",p:35},{m:"Tríceps cabeza medial",p:15}],
    variantes:["Con barra EZ","Con mancuernas","En polea"],
    sets:3, reps:"10-12", rest:"75s",
    steps:["Acostado, barra extendida sobre el pecho.","Flexioná los codos bajando la barra hacia la frente.","Extendé volviendo a la posición inicial."],
    errors:["Abrir los codos hacia los lados.","Bajar la barra al cuello.","Usar demasiado peso."] },

  { name:"Extensión sobre cabeza con mancuerna", muscle:["triceps"], eq:"mancuernas", dif:"principiante", zona:"cabeza larga",
    primary:[{m:"Tríceps cabeza larga",p:70}], secondary:[{m:"Tríceps cabeza lateral",p:20},{m:"Tríceps cabeza medial",p:10}],
    variantes:["Unilateral","Con barra EZ","En polea overhead"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Sentado o de pie, sostenés la mancuerna con ambas manos sobre la cabeza.","Flexioná los codos bajando la mancuerna detrás de la cabeza.","Extendé completamente."],
    errors:["Mover los codos hacia afuera.","No bajar lo suficiente.","Usar demasiado peso."] },

  { name:"Fondos en paralelas (tríceps)", muscle:["triceps"], eq:"sin equipo", dif:"avanzado", zona:"general",
    primary:[{m:"Tríceps",p:65}], secondary:[{m:"Pectoral mayor",p:25},{m:"Deltoides anterior",p:10}],
    variantes:["Asistidos en máquina","Bench dips","Con peso adicional"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Agarrá las paralelas manteniéndote recto sin inclinar hacia adelante.","Descendé flexionando los codos hasta 90°.","Empujá hacia arriba extendiendo completamente."],
    errors:["Inclinarse hacia adelante (trabaja más pecho).","Bajar demasiado rápido.","No extender completamente arriba."] },

  { name:"Flexiones cerradas (Diamond Push Ups)", muscle:["triceps","pecho"], eq:"sin equipo", dif:"intermedio", zona:"tríceps + pecho",
    primary:[{m:"Tríceps",p:55}], secondary:[{m:"Pectoral mayor",p:35},{m:"Deltoides anterior",p:10}],
    variantes:["Con banda elástica","Con pies elevados"],
    sets:3, reps:"12-15", rest:"60s",
    steps:["Posición de plancha con manos juntas bajo el pecho.","Bajá manteniendo los codos pegados al cuerpo.","Empujá hacia arriba."],
    errors:["Abrir los codos.","No bajar completamente.","Dejar caer la cadera."] },

  // ══════════════════════════════
  // PIERNAS
  // ══════════════════════════════

  { name:"Extensión de pierna en máquina", muscle:["piernas"], eq:"máquina", dif:"principiante", zona:"cuádriceps",
    primary:[{m:"Cuádriceps",p:90}], secondary:[{m:"Tibial anterior",p:10}],
    variantes:["Unilateral","Con banda elástica"],
    sets:4, reps:"12-15", rest:"60s",
    steps:["Sentado en la máquina con el pad sobre los tobillos.","Extendé las rodillas completamente.","Bajá controlado sin soltar la tensión."],
    errors:["Usar impulso para subir.","No bajar completamente.","Hiperextender las rodillas."] },

  { name:"Prensa de piernas", muscle:["piernas"], eq:"máquina", dif:"principiante", zona:"cuádriceps + glúteos",
    primary:[{m:"Cuádriceps",p:50}], secondary:[{m:"Glúteos",p:30},{m:"Isquiotibiales",p:15},{m:"Gemelos",p:5}],
    variantes:["Pies altos (más glúteo)","Pies bajos (más cuádriceps)","Pies juntos","Pies separados"],
    sets:4, reps:"10-15", rest:"90s",
    steps:["Sentado en la máquina, pies al ancho de hombros en la plataforma.","Soltá los seguros y bajá la plataforma controlado.","Empujá hasta casi extender las rodillas sin bloquearlas."],
    errors:["Bloquear las rodillas completamente.","Pies muy bajos (solo cuádriceps).","Rodillas colapsando hacia adentro.","No bajar lo suficiente."] },

  { name:"Hack squat (Sentadilla Hack)", muscle:["piernas"], eq:"máquina", dif:"intermedio", zona:"cuádriceps + glúteos",
    primary:[{m:"Cuádriceps",p:55}], secondary:[{m:"Glúteos",p:30},{m:"Isquiotibiales",p:15}],
    variantes:["Pies altos","Pies bajos","Con barra (hack squat inverso)"],
    sets:4, reps:"10-12", rest:"90s",
    steps:["Colocá los hombros bajo los pads con pies al ancho de hombros.","Desenganchá y descendé hasta que los muslos queden paralelos al suelo.","Empujá hacia arriba sin bloquear las rodillas."],
    errors:["No bajar lo suficiente.","Bloquear las rodillas arriba.","Rodillas colapsando hacia adentro."] },

  { name:"Sentadilla frontal", muscle:["piernas"], eq:"barra", dif:"avanzado", zona:"cuádriceps",
    primary:[{m:"Cuádriceps",p:60}], secondary:[{m:"Glúteos",p:25},{m:"Core",p:15}],
    variantes:["Con mancuernas","En máquina Smith","Con chaleco de peso"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Barra apoyada en la parte delantera de los hombros con codos hacia adelante.","Descendé manteniendo el torso erguido.","Bajá hasta que los muslos queden paralelos al suelo.","Empujá hacia arriba."],
    errors:["Dejar caer los codos.","Inclinar demasiado el torso hacia adelante.","No bajar lo suficiente.","Rodillas colapsando."] },

  { name:"Sentadilla con barra", muscle:["piernas"], eq:"barra", dif:"intermedio", zona:"cuádriceps + glúteos",
    primary:[{m:"Cuádriceps",p:45}], secondary:[{m:"Glúteos",p:35},{m:"Isquiotibiales",p:15},{m:"Core",p:5}],
    variantes:["Frontal","En máquina Smith","Con mancuernas","Goblet squat"],
    sets:4, reps:"8-12", rest:"90s",
    steps:["Barra sobre los trapecios, pies al ancho de hombros.","Descendé como si fueras a sentarte, rodillas alineadas con los pies.","Bajá hasta que los muslos queden paralelos al suelo.","Empujá hacia arriba activando glúteos."],
    errors:["Rodillas cayendo hacia adentro.","No bajar lo suficiente.","Levantar los talones del suelo.","Mirar hacia abajo."] },

  { name:"Curl nórdico (Nordic Curl)", muscle:["piernas"], eq:"sin equipo", dif:"avanzado", zona:"isquiotibiales",
    primary:[{m:"Isquiotibiales",p:80}], secondary:[{m:"Gemelos",p:10},{m:"Glúteos",p:10}],
    variantes:["Asistido con banda","En máquina de curl nórdico"],
    sets:3, reps:"5-8", rest:"90s",
    steps:["Arrodillado con los pies sujetos.","Bajá el torso hacia adelante de forma controlada usando los isquiotibiales.","Frenate antes de tocar el suelo.","Empujá con los brazos y volvé con los isquios."],
    errors:["Dejar caer el cuerpo sin control.","No activar los isquiotibiales al bajar.","Hacer el movimiento demasiado rápido."] },

  { name:"Zancadas con mancuernas", muscle:["piernas"], eq:"mancuernas", dif:"principiante", zona:"cuádriceps + glúteos",
    primary:[{m:"Cuádriceps",p:45}], secondary:[{m:"Glúteos",p:40},{m:"Isquiotibiales",p:15}],
    variantes:["Con barra","Zancadas inversas","Zancadas en marcha","Bulgarian split squat"],
    sets:3, reps:"12 por lado", rest:"60s",
    steps:["De pie con mancuernas en cada mano.","Dá un paso largo hacia adelante y descendé la rodilla trasera cerca del suelo.","Empujá con la pierna delantera para volver y alternás."],
    errors:["Rodilla delantera pasando la punta del pie.","Inclinarse demasiado hacia adelante.","Pasos muy cortos."] },

  { name:"Hip Thrust con barra (Empuje de cadera)", muscle:["gluteos","piernas"], eq:"barra", dif:"intermedio", zona:"glúteos",
    primary:[{m:"Glúteo mayor",p:70}], secondary:[{m:"Isquiotibiales",p:20},{m:"Glúteo medio",p:10}],
    variantes:["Con mancuerna","Con banda elástica","Unilateral","En máquina"],
    sets:4, reps:"10-15", rest:"90s",
    steps:["Sentate contra un banco con la barra sobre las caderas con almohadilla.","Empujá las caderas hacia arriba apretando los glúteos al máximo.","Alcanzá posición paralela al suelo y bajá controlado."],
    errors:["No llegar a extensión completa de cadera.","Arquear la espalda lumbar en vez de la cadera.","Rodillas colapsando hacia adentro."] },

  // ══════════════════════════════
  // ABDOMEN
  // ══════════════════════════════

  { name:"Plancha frontal (Plank)", muscle:["abdomen"], eq:"sin equipo", dif:"principiante", zona:"core completo",
    primary:[{m:"Recto abdominal",p:40}], secondary:[{m:"Transverso abdominal",p:35},{m:"Oblicuos",p:15},{m:"Glúteos",p:10}],
    variantes:["Con pies elevados","Plancha lateral","Con movimiento de hombros","Con rodilla al pecho"],
    sets:3, reps:"30-60s", rest:"45s",
    steps:["Apoyate en antebrazos y puntas de los pies.","Formá una línea recta de cabeza a talones.","Contraé el abdomen y aguantá."],
    errors:["Dejar caer o levantar la cadera.","Sostener la respiración.","Mirar hacia adelante tensionando el cuello."] },

  { name:"Plancha lateral (Side Plank)", muscle:["abdomen"], eq:"sin equipo", dif:"intermedio", zona:"oblicuos",
    primary:[{m:"Oblicuo externo",p:50}], secondary:[{m:"Oblicuo interno",p:30},{m:"Transverso abdominal",p:20}],
    variantes:["Con rotación de cadera","Con pierna elevada","Apoyado en mano extendida"],
    sets:3, reps:"20-40s por lado", rest:"45s",
    steps:["Apoyate en un antebrazo y el borde del pie.","Elevá la cadera formando una línea recta.","Mantené el core contraído."],
    errors:["Dejar caer la cadera.","No mantener la alineación."] },

  { name:"Crunch abdominal", muscle:["abdomen"], eq:"sin equipo", dif:"principiante", zona:"recto abdominal",
    primary:[{m:"Recto abdominal",p:80}], secondary:[{m:"Oblicuos",p:20}],
    variantes:["Con peso","En máquina","Crunch inverso","Crunch con torsión"],
    sets:3, reps:"15-25", rest:"45s",
    steps:["Acostado boca arriba, rodillas flexionadas.","Elevá el torso contrayendo el abdomen.","No jalés el cuello con las manos.","Bajá controlado."],
    errors:["Jalar el cuello con las manos.","Usar el impulso en vez del abdomen.","Elevar demasiado el torso (lumbar)."] },

  { name:"Crunch inverso", muscle:["abdomen"], eq:"sin equipo", dif:"principiante", zona:"recto abdominal inferior",
    primary:[{m:"Recto abdominal inferior",p:75}], secondary:[{m:"Transverso abdominal",p:25}],
    variantes:["En banco declinado","Con polea","Con banda elástica"],
    sets:3, reps:"15-20", rest:"45s",
    steps:["Acostado, manos a los lados o bajo los glúteos.","Llevá las rodillas hacia el pecho contrayendo el abdomen.","Bajá controlado sin apoyar completamente."],
    errors:["Usar el impulso de las piernas.","No contraer el abdomen.","Bajar demasiado rápido."] },

  { name:"Elevación de piernas colgado (Hanging Leg Raise)", muscle:["abdomen"], eq:"sin equipo", dif:"avanzado", zona:"abdomen inferior",
    primary:[{m:"Recto abdominal inferior",p:65}], secondary:[{m:"Flexores de cadera",p:25},{m:"Oblicuos",p:10}],
    variantes:["Con rodillas flexionadas","En banco romano","Con torsión"],
    sets:3, reps:"10-15", rest:"60s",
    steps:["Colgado de la barra con agarre prono.","Elevá las piernas hasta quedar paralelas al suelo (o más).","Bajá controlado sin balancear."],
    errors:["Balancear el cuerpo para impulsar.","No bajar completamente.","Usar el cuello para ayudarse."] },

  { name:"Rueda abdominal (Ab Wheel)", muscle:["abdomen"], eq:"sin equipo", dif:"avanzado", zona:"core completo",
    primary:[{m:"Recto abdominal",p:50}], secondary:[{m:"Transverso abdominal",p:30},{m:"Dorsal ancho",p:20}],
    variantes:["De rodillas","De pie","Con polea"],
    sets:3, reps:"8-12", rest:"60s",
    steps:["De rodillas con la rueda en el suelo frente a vos.","Rodá hacia adelante manteniendo el core contraído.","Volvé sin dejar que la cadera caiga."],
    errors:["Dejar caer la cadera al extender.","No activar el core.","Ir demasiado lejos al principio."] },

  { name:"Tijeras (Scissors)", muscle:["abdomen"], eq:"sin equipo", dif:"principiante", zona:"abdomen inferior",
    primary:[{m:"Recto abdominal inferior",p:60}], secondary:[{m:"Flexores de cadera",p:30},{m:"Oblicuos",p:10}],
    variantes:["Verticales","Horizontales","Con elevación de cadera"],
    sets:3, reps:"20-30", rest:"45s",
    steps:["Acostado, manos bajo los glúteos.","Elevá las piernas a 45° y alterná arriba y abajo.","Mantené el abdomen contraído durante todo el movimiento."],
    errors:["Arquear la espalda baja.","No mantener el abdomen activo."] },

  { name:"Mountain Climbers (Escaladores)", muscle:["abdomen"], eq:"sin equipo", dif:"intermedio", zona:"core + cardio",
    primary:[{m:"Recto abdominal",p:40}], secondary:[{m:"Oblicuos",p:30},{m:"Flexores de cadera",p:20},{m:"Hombros",p:10}],
    variantes:["Lentos (fuerza)","Rápidos (cardio)","Con torsión (oblicuos)"],
    sets:3, reps:"20-30", rest:"45s",
    steps:["Posición de plancha con brazos extendidos.","Llevá una rodilla hacia el pecho y volvé.","Alternás rápidamente."],
    errors:["Levantar demasiado la cadera.","No mantener los brazos extendidos.","Perder la posición de plancha."] },

  { name:"Bicicleta abdominal (Bicycle Crunch)", muscle:["abdomen"], eq:"sin equipo", dif:"intermedio", zona:"oblicuos + recto",
    primary:[{m:"Oblicuos",p:50}], secondary:[{m:"Recto abdominal",p:40},{m:"Flexores de cadera",p:10}],
    variantes:["Lento (más fuerza)","Rápido (más cardio)"],
    sets:3, reps:"20-30", rest:"45s",
    steps:["Acostado, manos detrás de la cabeza.","Llevá el codo derecho hacia la rodilla izquierda.","Alternás rotando el torso."],
    errors:["Jalar el cuello con las manos.","No rotar el torso completamente.","Hacer el movimiento muy rápido sin control."] },

  { name:"Dead Bug (Insecto muerto)", muscle:["abdomen"], eq:"sin equipo", dif:"principiante", zona:"core profundo",
    primary:[{m:"Transverso abdominal",p:60}], secondary:[{m:"Recto abdominal",p:30},{m:"Oblicuos",p:10}],
    variantes:["Con banda elástica","Con mancuerna","Con piernas extendidas"],
    sets:3, reps:"10 por lado", rest:"45s",
    steps:["Acostado, brazos extendidos hacia el techo, rodillas a 90°.","Bajá el brazo derecho y la pierna izquierda simultáneamente.","Volvé y alternás.","Mantené la espalda baja pegada al suelo."],
    errors:["Despegar la espalda baja del suelo.","Moverse demasiado rápido.","No respirar correctamente."] },

  // ══════════════════════════════
  // ANTEBRAZOS
  // ══════════════════════════════

  { name:"Curl de muñeca con barra", muscle:["antebrazos"], eq:"barra", dif:"principiante", zona:"flexores",
    primary:[{m:"Flexores del antebrazo",p:80}], secondary:[{m:"Braquiorradial",p:20}],
    variantes:["Con mancuernas","Con polea baja","Agarre inverso (extensores)"],
    sets:3, reps:"15-20", rest:"45s",
    steps:["Sentado, antebrazos apoyados en los muslos con la barra en agarre supino.","Flexioná las muñecas llevando la barra hacia arriba.","Bajá controlado."],
    errors:["Mover los antebrazos durante el movimiento.","Usar demasiado peso."] },

  { name:"Curl de muñeca inverso", muscle:["antebrazos"], eq:"barra", dif:"principiante", zona:"extensores",
    primary:[{m:"Extensores del antebrazo",p:80}], secondary:[{m:"Braquiorradial",p:20}],
    variantes:["Con mancuernas","Con polea"],
    sets:3, reps:"15-20", rest:"45s",
    steps:["Sentado, antebrazos apoyados en los muslos con la barra en agarre prono.","Extendé las muñecas llevando la barra hacia arriba.","Bajá controlado."],
    errors:["Mover los antebrazos.","Usar demasiado peso."] },

  { name:"Curl Zottman", muscle:["antebrazos","biceps"], eq:"mancuernas", dif:"intermedio", zona:"braquiorradial + flexores",
    primary:[{m:"Braquiorradial",p:45}], secondary:[{m:"Bíceps braquial",p:30},{m:"Flexores del antebrazo",p:25}],
    variantes:["Con barra","Con polea"],
    sets:3, reps:"10-12", rest:"60s",
    steps:["Subí con agarre supino (palmas arriba).","En el punto más alto rotá las muñecas a prono (palmas abajo).","Bajá con palmas abajo.","Volvé a rotar abajo."],
    errors:["Rotar las muñecas demasiado rápido.","Usar peso excesivo."] },

  { name:"Farmer's Walk (Caminata del granjero)", muscle:["antebrazos"], eq:"mancuernas", dif:"principiante", zona:"agarre + general",
    primary:[{m:"Flexores del antebrazo",p:50}], secondary:[{m:"Trapecio",p:25},{m:"Core",p:25}],
    variantes:["Con kettlebells","Con barra trap","Unilateral"],
    sets:3, reps:"20-40 metros", rest:"60s",
    steps:["Agarrá mancuernas pesadas a los costados.","Caminá manteniendo el torso erguido y el core activo.","Mantené un agarre firme durante todo el recorrido."],
    errors:["Encogerse de hombros.","Perder la postura durante la caminata."] },

  { name:"Colgarse de barra (Dead Hang)", muscle:["antebrazos","espalda"], eq:"sin equipo", dif:"principiante", zona:"agarre + descompresión",
    primary:[{m:"Flexores del antebrazo",p:60}], secondary:[{m:"Dorsal ancho",p:30},{m:"Manguito rotador",p:10}],
    variantes:["Con peso","Agarre mixto","Con rotación"],
    sets:3, reps:"20-60s", rest:"60s",
    steps:["Agarrá la barra con agarre prono al ancho de hombros.","Colgá con el cuerpo relajado.","Mantené el agarre firme."],
    errors:["Tensionar los hombros hacia arriba.","No mantener el tiempo suficiente."] },

];

const state = {
  muscle: [],
  eq: [],
  dif: [],
  page: 1,
  perPage: 20
};

function toggleMuscle(value, checkbox) {
  if (value === 'todos') {
    state.muscle = [];
    document.querySelectorAll('#muscleGroup input').forEach(i => {
      i.checked = i.value === 'todos';
    });
  } else {
    const todosCheckbox = document.querySelector('#muscleGroup input[value="todos"]');
    todosCheckbox.checked = false;
    if (checkbox.checked) {
      if (!state.muscle.includes(value)) state.muscle.push(value);
    } else {
      state.muscle = state.muscle.filter(v => v !== value);
      if (state.muscle.length === 0) todosCheckbox.checked = true;
    }
  }
  state.page = 1;
  applyFilters();
}

function toggleEq(value, checkbox) {
  if (checkbox.checked) {
    state.eq.push(value);
  } else {
    state.eq = state.eq.filter(v => v !== value);
  }
  state.page = 1;
  applyFilters();
}

function toggleDif(value, checkbox) {
  if (checkbox.checked) {
    state.dif.push(value);
  } else {
    state.dif = state.dif.filter(v => v !== value);
  }
  state.page = 1;
  applyFilters();
}

function toggleGroup(id) {
  const body = document.getElementById(id);
  const arrow = document.getElementById(id + 'Arrow');
  body.classList.toggle('collapsed');
  arrow.style.transform = body.classList.contains('collapsed') ? 'rotate(180deg)' : 'rotate(0deg)';
}

function getFiltered() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  return exercises.filter(e => {
    const muscles = Array.isArray(e.muscle) ? e.muscle : [e.muscle];
    const mOk = state.muscle.length === 0 || muscles.some(m => state.muscle.includes(m));
    const eOk = state.eq.length === 0 || state.eq.includes(e.eq);
    const dOk = state.dif.length === 0 || state.dif.includes(e.dif);
    const sOk = !q || e.name.toLowerCase().includes(q);
    return mOk && eOk && dOk && sOk;
  });
}

function applyFilters() {
  state.page = 1;
  renderPage(getFiltered());
}

function renderPage(filtered) {
  const total = filtered.length;
  const totalPages = Math.ceil(total / state.perPage) || 1;
  if (state.page > totalPages) state.page = 1;
  const start = (state.page - 1) * state.perPage;
  const pageItems = filtered.slice(start, start + state.perPage);

  document.getElementById('resultsCount').textContent =
    total + ' ejercicio' + (total !== 1 ? 's' : '') +
    (totalPages > 1 ? ' — Página ' + state.page + ' de ' + totalPages : '');

  const grid = document.getElementById('exercisesGrid');
  if (!pageItems.length) {
    grid.innerHTML = '<div class="no-results">No se encontraron ejercicios.</div>';
  } else {
    grid.innerHTML = pageItems.map(e => {
      const muscleList = Array.isArray(e.muscle) ? e.muscle : [e.muscle];
      return `
        <div class="ex-card" onclick='openModal(${JSON.stringify(e).replace(/'/g, "&#39;")})'>
          <div class="ex-top">
            <div class="ex-muscle-badge">${muscleList.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' + ')}</div>
            <span class="dif-badge dif-${e.dif}">${e.dif.charAt(0).toUpperCase() + e.dif.slice(1)}</span>
          </div>
          <div class="ex-name">${e.name}</div>
          <div class="ex-tags">
            <span class="ex-tag">${e.eq}</span>
            <span class="ex-tag">${e.zona}</span>
          </div>
        </div>`;
    }).join('');
  }

  const pag = document.getElementById('paginacion');
  if (totalPages <= 1) { pag.innerHTML = ''; return; }

  let pagHTML = `<button class="pag-btn prev-next" onclick="goPage(${state.page - 1})" ${state.page === 1 ? 'disabled style="opacity:0.3"' : ''}>← Anterior</button>`;

  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 7) {
      if (i === 1 || i === totalPages || (i >= state.page - 1 && i <= state.page + 1)) {
        pagHTML += `<button class="pag-btn ${i === state.page ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
      } else if (i === state.page - 2 || i === state.page + 2) {
        pagHTML += `<span style="color:#555;align-self:center">...</span>`;
      }
    } else {
      pagHTML += `<button class="pag-btn ${i === state.page ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
    }
  }

  pagHTML += `<button class="pag-btn prev-next" onclick="goPage(${state.page + 1})" ${state.page === totalPages ? 'disabled style="opacity:0.3"' : ''}>Siguiente →</button>`;
  pag.innerHTML = pagHTML;
}

function goPage(n) {
  const filtered = getFiltered();
  const totalPages = Math.ceil(filtered.length / state.perPage) || 1;
  if (n < 1 || n > totalPages) return;
  state.page = n;
  renderPage(filtered);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function clearFilters() {
  state.muscle = [];
  state.eq = [];
  state.dif = [];
  state.page = 1;
  document.querySelectorAll('#muscleGroup input').forEach(i => i.checked = i.value === 'todos');
  document.querySelectorAll('#eqGroup input').forEach(i => i.checked = false);
  document.querySelectorAll('#difGroup input').forEach(i => i.checked = false);
  document.getElementById('searchInput').value = '';
  renderPage(getFiltered());
}

function openModal(e) {
  if (typeof e === 'string') e = JSON.parse(e);
  document.getElementById('mTitle').textContent = e.name;
  const muscleList = Array.isArray(e.muscle) ? e.muscle : [e.muscle];
  document.getElementById('mMuscle').textContent = muscleList.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' + ');
  const dif = document.getElementById('mDif');
  dif.textContent = e.dif.charAt(0).toUpperCase() + e.dif.slice(1);
  dif.className = 'dif-badge dif-' + e.dif;
  document.getElementById('mMuscles').innerHTML =
    `<div style="width:100%;margin-bottom:6px;font-size:10px;color:#ff6a00;text-transform:uppercase;letter-spacing:1px;font-weight:bold;">Principal</div>` +
    e.primary.map(m => `<span class="muscle-pill primary">${m.m} <span style="opacity:0.7;font-size:10px;">${m.p}%</span></span>`).join('') +
    (e.secondary && e.secondary.length ?
      `<div style="width:100%;margin:10px 0 6px;font-size:10px;color:#555;text-transform:uppercase;letter-spacing:1px;">Secundario</div>` +
      e.secondary.map(m => `<span class="muscle-pill secondary">${m.m} <span style="opacity:0.7;font-size:10px;">${m.p}%</span></span>`).join('') : '') +
    (e.variantes && e.variantes.length ?
      `<div style="width:100%;margin:10px 0 6px;font-size:10px;color:#555;text-transform:uppercase;letter-spacing:1px;">Variantes</div>` +
      e.variantes.map(v => `<span class="muscle-pill secondary">${v}</span>`).join('') : '');
  document.getElementById('mSets').innerHTML = `
    <div class="set-item"><div class="set-num">${e.sets}</div><div class="set-label">Series</div></div>
    <div class="set-item"><div class="set-num">${e.reps}</div><div class="set-label">Reps</div></div>
    <div class="set-item"><div class="set-num">${e.rest}</div><div class="set-label">Descanso</div></div>
  `;
  document.getElementById('mSteps').innerHTML = e.steps.map(s => `<li>${s}</li>`).join('');
  document.getElementById('mErrors').innerHTML = e.errors.map(er => `<li>${er}</li>`).join('');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(ev) {
  // Solo cierra si clickeás el fondo oscuro, no el contenido
  if (ev.target.classList.contains('modal-overlay')) {
    closeModalDirect();
  }
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

renderPage(getFiltered());