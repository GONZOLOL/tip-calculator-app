let bill, people, tip, tip_amount, total;

function getBillValue(val) {
    bill = val;
    console.log(bill);
}

function getPeopleValue(val) {
    people = val;
    console.log(people);
}

function btn_value(val){
    tip = val;
    console.log(tip);
}

function getCustomValue(val) {
    tip = val;
    console.log(tip);
}


function run() {
    if (bill && tip && people && bill > 0 && people > 0 && tip > 0 && tip <= 100){
        tip_amount = ((tip*bill)/100) / people
        total = tip_amount + bill /2;
    
        document.getElementById("tip-amount").innerHTML ="$" + tip_amount.toFixed(2);
        document.getElementById("total").innerHTML ="$" + total.toFixed(2);
    
        console.log("esto funciona");
    }
}

document.getElementById('custom').onclick = function() {
    var checkboxes = document.getElementsByName('tip');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}

//Detectar Valores incorrectos
let test = document.querySelector('.guess');
test.addEventListener('keypress', function (event) {
    const teclaKey = event.key;
    const teclaCode = event.code;

    if (teclaKey === '-' || teclaCode === 'Slash') {
    console.log('La cagó');
    console.warn('Valor Incorrecto');
    this.style.borderColor = '#FF0000';
    } else if (teclaKey === 'Backspace' || teclaCode === 'Backspace') {
    console.log('Ya la arregló');
    } else {
    console.log(teclaKey, teclaCode);
    this.style.borderColor = '#FFFFFF';
    }
});