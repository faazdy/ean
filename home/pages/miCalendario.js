// Datos de eventos para noviembre
const eventos = [
    { fecha: "viernes, 1 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 1 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "martes, 5 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "martes, 5 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "miércoles, 6 de noviembre de 2024", hora: "07:00", duracion: "01:59hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 6 de noviembre de 2024", hora: "11:00", duracion: "01:59hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "jueves, 7 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "jueves, 7 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "viernes, 8 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 8 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "martes, 12 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "martes, 12 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "miércoles, 13 de noviembre de 2024", hora: "07:00", duracion: "01:59hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 13 de noviembre de 2024", hora: "11:00", duracion: "01:59hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "jueves, 14 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "jueves, 14 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "viernes, 15 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 15 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "lunes, 18 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 18 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "martes, 19 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "martes, 19 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "miércoles, 20 de noviembre de 2024", hora: "07:00", duracion: "01:59hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 20 de noviembre de 2024", hora: "11:00", duracion: "01:59hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "jueves, 21 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "jueves, 21 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "viernes, 22 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 22 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "lunes, 25 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 25 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "martes, 26 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "martes, 26 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "miércoles, 27 de noviembre de 2024", hora: "07:00", duracion: "01:59hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 27 de noviembre de 2024", hora: "11:00", duracion: "01:59hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" },
    { fecha: "jueves, 28 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "LENGUA Y REDACCIÓN ESPAÑOLA S2G5", ubicacion: "BogotáAULA-N409" },
    { fecha: "jueves, 28 de noviembre de 2024", hora: "09:00", duracion: "01:59hr", materia: "MODELOS DE COMU ORG S2G7", ubicacion: "BogotáAULA-L804" },
    { fecha: "viernes, 29 de noviembre de 2024", hora: "07:00", duracion: "01:29hr", materia: "INTERMEDIATE BUSINESS ENGLISH S2G6", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 29 de noviembre de 2024", hora: "11:00", duracion: "01:29hr", materia: "LENGUA MODERNA PORTUGUÉS I S2G2", ubicacion: "BogotáAULA-N608" }
];

// Generar calendario para noviembre (con el primer día en jueves)
function generarCalendario() {
    const calendario = document.getElementById('calendario');
    
    // Definir el primer día de noviembre de 2024 (jueves)
    const primerDia = 4; // 4 representa jueves, ya que los días de la semana empiezan en domingo (0 = domingo)

    // Añadir los días vacíos antes del primer día del mes
    for (let i = 0; i < primerDia; i++) {
        const diaVacio = document.createElement('div');
        calendario.appendChild(diaVacio);  // Espacios vacíos antes del 1 de noviembre
    }

    // Añadir los días del mes de noviembre (del 1 al 30)
    for (let i = 1; i <= 30; i++) {
        const dia = document.createElement('div');
        dia.textContent = i;
        calendario.appendChild(dia);
    }
}

// Generar el horario detallado
function generarHorarioDetallado() {
    const detalleHorario = document.getElementById('detalle-horario');
    
    // Agrupar eventos por fecha
    const eventosPorFecha = eventos.reduce((acumulador, evento) => {
        if (!acumulador[evento.fecha]) {
            acumulador[evento.fecha] = [];
        }
        acumulador[evento.fecha].push(evento);
        return acumulador;
    }, {});
    
    // Crear elementos HTML para cada día con sus eventos
    for (const fecha in eventosPorFecha) {
        const diaDiv = document.createElement('div');
        diaDiv.classList.add('dia');
        
        const fechaTitulo = document.createElement('h5');
        fechaTitulo.innerText = fecha;
        diaDiv.appendChild(fechaTitulo);
        
        eventosPorFecha[fecha].forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('evento');
            eventoDiv.innerHTML = ` 
                <span><strong>Hora:</strong> ${evento.hora}</span>
                <span><strong>Duración:</strong> ${evento.duracion}</span>
                <span><strong>Materia:</strong> ${evento.materia}</span>
                <span><strong>Ubicación:</strong> ${evento.ubicacion}</span>
            `;
            diaDiv.appendChild(eventoDiv);
        });
        
        detalleHorario.appendChild(diaDiv);
    }
}

// Inicializar calendario y horario detallado
document.addEventListener('DOMContentLoaded', () => {
    generarCalendario();
    generarHorarioDetallado();
});
