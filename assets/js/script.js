//10% OF TIP
function percent10 (salary) {
    salary = parseFloat(document.getElementById('value-bank').value);

    let newValue = salary + (salary * 10 / 100);

    document.getElementById('result-account').value = `R$ ${newValue.toString().replace('.', ',')}`;

}

//15% OF TIP
function percent15 (salary) {
    salary = parseFloat(document.getElementById('value-bank').value);

    let newValue = salary + (salary * 15 / 100);
    document.getElementById('result-account').value = `R$ ${newValue.toString().replace('.', ',')}`;
}

//20% OF TIP
function percent20 (salary) {
    salary = parseFloat(document.getElementById('value-bank').value);

    let newValue = salary + (salary * 20 / 100);
    document.getElementById('result-account').value = `R$ ${newValue.toString().replace('.', ',')}`;
}

//PERSONALIZED TIP
function percentPerson(salary) {
    salary = parseFloat(document.getElementById('value-bank').value);
    let percentPerson = Number(prompt('Digite o valor desejado: '));

    let newValue = salary + (salary * percentPerson / 100 );
    document.getElementById('result-account').value = `R$ ${newValue.toString().replace('.', ',')}`;
}

//CLEAN
let inputValue = document.getElementById('value-bank');
let resulValue = document.getElementById('result-account');
let buttonClean = document.getElementById('clean');

buttonClean.addEventListener ('click', () => {
    resulValue.value = '';
    inputValue.value = '';
});