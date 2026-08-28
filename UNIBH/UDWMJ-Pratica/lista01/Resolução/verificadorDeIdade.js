function verificarIdade() {
    // 1. Obtém o ano atual do sistema
    const data = new Date();
    const anoAtual = data.getFullYear();

    // 2. Captura os elementos do HTML
    const fAno = document.getElementById('anoNascimento').value;
    const res = document.getElementById('resultado');

    // 3. Validação básica de erro
    if (fAno.length === 0 || Number(fAno) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        // 4. Calcula a idade e classifica
        const idade = anoAtual - Number(fAno);
        let faixaEtaria = '';

        if (idade >= 0 && idade < 12) {
            faixaEtaria = 'Criança';
        } else if (idade < 18) {
            faixaEtaria = 'Adolescente';
        } else if (idade < 60) {
            faixaEtaria = 'Adulto';
        } else {
            faixaEtaria = 'Idoso';
        }

        // 5. Exibe o resultado na tela
        res.innerHTML = `Identificamos: <strong>${faixaEtaria}</strong> com <strong>${idade} anos</strong>.`;
    }
}