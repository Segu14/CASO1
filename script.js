const formServ = document.getElementById('serviciosPrestados');
const resultDiv = document.getElementById('result');

formServ.addEventListener('submit', function(event) {
    event.preventDefault();

    const checkboxes = formServ.querySelectorAll('input[type="checkbox"]:checked');

    let result = 0
    checkboxes.forEach(checkbox => {
        result += parseFloat(checkbox.value);
    });

    resultDiv.innerHTML = `
        El total a pagar es $${result}</p>
    `;
    
});

const formCita = document.getElementById('agendarCita');
const resultDivCita = document.getElementById('resultCita');
const citas = [];

formCita.addEventListener('submit', function(event) {
    event.preventDefault();

    const mascota = document.getElementById('nomMascota').value;
    const duenho = document.getElementById('nomDuenho').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const cita = `
        <p>Mascota: ${mascota}</p>
        <p>Dueñ@: ${duenho}</p>
        <p>Fecha Cita: ${fecha}</p>
        <p>Hora Cita: ${hora}</p>
        <br>
    `;
    citas.push(cita);

    resultDivCita.innerHTML = citas.join('');

    formCita.reset();
});