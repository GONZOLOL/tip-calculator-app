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
    tip_amount = ((tip*bill)/100) / people
    total = tip_amount + bill /2;

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