function calcularMontante() {
    const capital = Number(document.getElementById('capital').value);
    const taxaPorcentagem = Number(document.getElementById('taxa').value);
    const tempo = Number(document.getElementById('tempo').value);
    const resultado = document.getElementById('resultado');

    if (capital <= 0 || taxaPorcentagem <= 0 || tempo <= 0) {
        resultado.innerHTML = "Preencha todos os campos com valores maiores que zero.";
        return;
    }

    // Convertendo a taxa de porcentagem para decimal (ex: 5% vira 0.05)
    const taxaDecimal = taxaPorcentagem / 100;

    // Fórmula: M = C * (1 + i)^t
    const montante = capital * Math.pow((1 + taxaDecimal), tempo);
    
    // Formata para moeda BRL
    const valorFormatado = montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    resultado.innerHTML = `O montante final será de: <br><strong>${valorFormatado}</strong>`;
}