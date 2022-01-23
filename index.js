/*
    Elaborar um programa para uma lan house de um aeroporto – O programa deve
    ler o valor de cada 15 minutos de uso de um computador e o tempo de
    uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
    sabendo que as frações extras de 15 minutos devem ser cobradas de
    forma integral.    
*/

function global() {
    const valorUso = document.getElementById('inValor').value;
    const tempoUso = document.getElementById('inTempo').value;

    function calculaTotalPagar(tempoUso, valorUso) {
        let valor = Math.ceil(tempoUso / 15) * valorUso;
        return document.getElementById('outValorPagar').textContent = 'Valor a pagar R$ ' + valor.toFixed(2);
    }
    calculaTotalPagar(tempoUso, valorUso)
}
let mens = document.getElementById('brValorPagar');
mens.addEventListener('click', global);