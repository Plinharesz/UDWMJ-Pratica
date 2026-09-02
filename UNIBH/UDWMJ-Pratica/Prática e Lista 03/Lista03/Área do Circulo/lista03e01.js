function calcularArea() {
    const raio = Number(document.getElementById('raio').value);
    const resultado = document.getElementById('resultado');

    if (raio <= 0) {
        resultado.innerHTML = "Por favor, insira um valor de raio válido.";
        return;
    }

    // Fórmula: área = π * r²
    const area = Math.PI * Math.pow(raio, 2);
    
    resultado.innerHTML = `A área do círculo é: <strong>${area.toFixed(2)}</strong>`;
}