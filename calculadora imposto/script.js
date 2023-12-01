function calcularNotaFiscal() {

    var nome = document.getElementById('nome').value;
    var servico = document.getElementById('servico').value;
    var valor = parseFloat(document.getElementById('valor').value);
    var impostoPorcentagem = parseFloat(document.getElementById('impostoPorcentagem').value);


    var imposto = (valor * impostoPorcentagem) / 100;


    var total = valor + imposto;


    var notaFiscalBody = document.getElementById('notaFiscalBody');
    notaFiscalBody.innerHTML = `
        <tr>
            <td>${servico}</td>
            <td>${valor.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Imposto (${impostoPorcentagem}%)</td>
            <td>${imposto.toFixed(2)}</td>
        </tr>
    `;

    document.getElementById('total').innerText = total.toFixed(2);
}