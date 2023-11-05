function calculateInvestment(interestRate, minAmount, maxAmount, resultId, monthsInputId) {
    var initialAmount = parseFloat(document.getElementById(resultId === 'result1' ? 'initialAmount1' : 'initialAmount2').value);
    var months = parseInt(document.getElementById(monthsInputId).value);
    var resultElement = document.getElementById(resultId);

    if (initialAmount >= minAmount && initialAmount <= maxAmount && months >= 1 && months <= 12) {
        var monthlyResults = [];
        var amount = initialAmount;

        for (var month = 1; month <= months; month++) {
            amount += amount * interestRate;
            monthlyResults.push(`Mês ${month}: R$ ${amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
        }

        resultElement.style.display = 'block';
        resultElement.innerHTML = `
            <h2>Resultados ao longo do tempo:</h2>
            <ul id="${resultId === 'result1' ? 'monthlyResults1' : 'monthlyResults2'}">${monthlyResults.join('</li><li>')}</li>`;
    } else {
        alert('Valor ou quantia incorreta ou quantidade de meses inválida. Insira um valor entre ' + minAmount.toLocaleString('pt-BR') + ' e ' + maxAmount.toLocaleString('pt-BR') + ' e uma quantidade de meses entre 1 e 12.');
        resultElement.style.display = 'none';
    }
}
