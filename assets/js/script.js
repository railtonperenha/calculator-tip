// //10% OF TIP
// function percent10 (salary) {
//     salary = parseFloat(document.getElementById('value-bank').value);

//     let newValue = salary + (salary * 10 / 100);

//     document.getElementById('result-account').value = `R$ ${newValue.toFixed(2).toString().replace('.', ',')}`;

// }

// //15% OF TIP
// function percent15 (salary) {
//     salary = parseFloat(document.getElementById('value-bank').value);

//     let newValue = salary + (salary * 15 / 100);
//     document.getElementById('result-account').value = `R$ ${newValue.toFixed(2).toString().replace('.', ',')}`;
// }

// //20% OF TIP
// function percent20 (salary) {
//     salary = parseFloat(document.getElementById('value-bank').value);

//     let newValue = salary + (salary * 20 / 100);
//     document.getElementById('result-account').value = `R$ ${newValue.toFixed(2).toString().replace('.', ',')}`;
// }

// //PERSONALIZED TIP
// function percentPerson(salary) {
//     salary = parseFloat(document.getElementById('value-bank').value);
//     let percentPerson = Number(prompt('Digite o valor desejado: '));

//     let newValue = salary + (salary * percentPerson / 100 );
//     document.getElementById('result-account').value = `R$ ${newValue.toFixed(2).toString().replace('.', ',')}`;
// }

// //CLEAN
// let inputValue = document.getElementById('value-bank');
// let resulValue = document.getElementById('result-account');
// let buttonClean = document.getElementById('clean');

// buttonClean.addEventListener ('click', () => {
//     resulValue.value = '';
//     inputValue.value = '';
// });

//CÓDIGO CORRIGIDO!
// Função para calcular a gorjeta com base em uma porcentagem fornecida
function calculateTip(percent) {
    const salary = parseFloat(document.getElementById('value-bank').value);

    if (isNaN(salary) || salary <= 0) {
        alert("Insira um valor válido para a conta.");
        return;
    }

    const newValue = salary + (salary * percent / 100);
    document.getElementById('result-account').value = `R$ ${newValue.toFixed(2).toString().replace('.', ',')}`;
}

// Função para calcular gorjeta personalizada
function calculateTipCustom() {
    const percent = Number(prompt('Digite a porcentagem desejada: '));

    if (isNaN(percent) || percent <= 0) {
        alert("Insira uma porcentagem válida.");
        return;
    }

    calculateTip(percent);
}

// Evento para limpar os campos de entrada e saída
const inputValue = document.getElementById('value-bank');
const resultValue = document.getElementById('result-account');
const buttonClean = document.getElementById('clean');

buttonClean.addEventListener('click', () => {
    inputValue.value = '';
    resultValue.value = '';
});

// Adicionando os eventos aos botões de porcentagens fixas
document.querySelector('.button[data-percent="10"]').addEventListener('click', () => calculateTip(10));
document.querySelector('.button[data-percent="15"]').addEventListener('click', () => calculateTip(15));
document.querySelector('.button[data-percent="20"]').addEventListener('click', () => calculateTip(20));
document.querySelector('.button[data-percent="custom"]').addEventListener('click', calculateTipCustom);
