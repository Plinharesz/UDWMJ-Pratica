### 5. Funcionalidade do Código (Verificador de Idade)

O projeto desenvolvido em HTML, CSS e JavaScript consiste em uma aplicação web simples que calcula a idade do usuário e determina sua faixa etária.

**Como funciona:**
1. **Entrada de Dados:** O usuário digita seu ano de nascimento em um campo de formulário (`<input type="number">`).
2. **Processamento (JavaScript):** Ao clicar no botão "Verificar", uma função em JavaScript é acionada. Essa função instancia o objeto `Date()` para resgatar dinamicamente o ano atual do sistema.
3. **Lógica e Validação:** 
   - O sistema faz uma validação: se a caixa estiver vazia ou se o ano digitado for maior que o ano atual, um alerta de erro é exibido.
   - Caso os dados sejam válidos, o sistema subtrai o ano de nascimento do ano atual para descobrir a idade.
   - Utilizando estruturas condicionais (`if/else if`), o algoritmo classifica a pessoa em: Criança (0 a 11 anos), Adolescente (12 a 17 anos), Adulto (18 a 59 anos) ou Idoso (60+).
4. **Saída de Dados:** O resultado final é renderizado diretamente no HTML (Manipulação de DOM), alterando o conteúdo da `div` de resultados sem precisar recarregar a página.