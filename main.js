var bill = document.getElementById("bill").value;
var people = document.getElementById("people").value;

if ( document.getElementsByName('tip').value ) {
    var radios = document.getElementsByName('tip');
    for (var radio of radios)
    {
        if (radio.checked) {
            var tip = radio.value;
        }
    }   
}
else if (document.getElementById("custom").value) {
    var tip = document.getElementById("custom").value;
}


document.getElementById('custom').onclick = function() {
    var checkboxes = document.getElementsByName('tip');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}

var tip_amount = ((tip*bill)/100) / people
var total = tip_amount + bill /2;

if (bill && people && tip) {
    document.getElementById("tip-amount").innerHTML ="$" + tip_amount.toFixed(2);
    document.getElementById("total").innerHTML ="$" + total.toFixed(2);
}