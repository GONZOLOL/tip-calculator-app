let bill = document.getElementById("bill").value;
let people = document.getElementById("people").value;
let tip = 0;

function btn_value(val){
    tip  = val;
    console.log(tip);
}

function getCustomValue(val) {
    tip = val;
    console.log(tip);
}

let tip_amount = ((tip*bill)/100) / people
let total = tip_amount + bill /2;

function run() {
    document.getElementById("tip-amount").innerHTML ="$" + tip_amount.toFixed(2);
    document.getElementById("total").innerHTML ="$" + total.toFixed(2);
    console.log("esto funciona");
}

document.getElementById('custom').onclick = function() {
    var checkboxes = document.getElementsByName('tip');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}