var Calculator = require('./calculator.js');

var calculator = new Calculator();

var addButton = document.getElementById("addButton");
addButton.addEventListener('click', function() {
    var var1Field = document.getElementById('var1');
    var var2Field = document.getElementById('var2');
    var resultField = document.getElementById('result');
    
    var var1 = var1Field.value;
    var var2 = var2Field.value;
    var result = calculator.add(+var1, +var2);
    resultField.value = result;
});