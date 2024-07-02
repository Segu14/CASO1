const form = document.getElementById('serviciosPrestados');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');

    let result = 0
    checkboxes.forEach(checkbox => {
        result += parseFloat(checkbox.value);
    });

    resultDiv.innerHTML = `
        El total a pagar es $${result}</p>
    `;
    
});