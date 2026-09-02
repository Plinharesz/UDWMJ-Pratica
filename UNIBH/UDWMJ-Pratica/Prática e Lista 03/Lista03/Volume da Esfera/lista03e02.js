function calcularVolume() {
    const raio = Number(document.getElementById('raioEsfera').value);
    const resultado = document.getElementById('resultado');

    if (raio <= 0) {
        resultado.innerHTML = "Por favor, insira um valor de raio válido.";
        return;
    }

    // Fórmula: volume = 4/3 * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    
    resultado.innerHTML = `O volume da esfera é: <strong>${volume.toFixed(2)}</strong>`;
}