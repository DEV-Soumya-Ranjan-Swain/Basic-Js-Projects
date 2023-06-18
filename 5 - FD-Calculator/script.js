function calculateMaturityAmount(){

    const principle = parseFloat(document.getElementById('principle').value);
    const intersRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);


    const maturityAmount = principle + (principle * intersRate * tenure)/100;


    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);