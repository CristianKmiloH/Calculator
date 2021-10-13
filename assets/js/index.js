const btnNumbers = document.getElementsByName('number');
const btnOp = document.getElementsByName('op');
const btnEq = document.getElementsByName('equal')[0];
const btnDel = document.getElementsByName('del')[0];
var result = document.getElementById('result')
var opAct = '';
var opAnt = '';
var operation = undefined;

btnNumbers.forEach(function (boton) {
    boton.addEventListener('click', function() {
        addNum(boton.innerText);
    })
});

btnOp.forEach(function(boton) {
    boton.addEventListener('click', function() {
        selectOp(boton.innerText)
    })
});

btnEq.addEventListener('click', function () {
    calculate();
    refresh();
});

btnDel.addEventListener('click', function(){
    clear();
    refresh();
});

function selectOp(op){
    if(opAct === '') return;
    if(opAnt !== ''){
        calculate()
    }
    operation = op.toString();
    opAnt = opAct;
    opAct = '';
}

function calculate(){
    var calculo;
    const anterior = parseFloat(opAnt);
    const actual = parseFloat(opAct);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operation){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opAct = calculo;
    operation = undefined;
    opAnt = '';
}

function addNum(num){
    opAct = opAct.toString() + num.toString();
    refresh();
}
function clear(){
    opAct = '';
    opAnt = '';
    operation = undefined;
}
function refresh(){
    result.value = opAct
}

clear();
























/*function values(x) {
    document.getElementById('Result').innerHTML +=x;
}
function clear() {
    document.getElementById('Result').innerHTML ="";
}
function calculate() {
    var result = eval(document.getElementById('Result').innerHTML);
    document.getElementById('Result').innerHTML = result;
}
var coma = document.getElementById('coma');
var cero = document.getElementById('cero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eigth');
var nine = document.getElementById('nine');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var mult = document.getElementById('mult');
var div = document.getElementById('divi');
var equal = document.getElementById('equal');
var deleteN = document.getElementById('delete');

coma.addEventListener("click", function() {
    takeValue(".");
})
cero.addEventListener("click", function() {
    takeValue(0);
})
one.addEventListener("click", function() {
    takeValue(1);
})
two.addEventListener("click", function() {
    takeValue(2);
})
three.addEventListener("click", function() {
    takeValue(3);
})
four.addEventListener("click", function() {
    takeValue(4);
})
five.addEventListener("click", function() {
    takeValue(5);
})
six.addEventListener("click", function() {
    takeValue(6);
})
seven.addEventListener("click", function() {
    takeValue(7);
})
eight.addEventListener("click", function() {
    takeValue(8);
})
nine.addEventListener("click", function() {
    takeValue(9);
})


plus.addEventListener("click", function() {
    takeValue("+");
})
minus.addEventListener("click", function() {
    takeValue("-");
})
mult.addEventListener("click", function() {
    takeValue("*");
})
divi.addEventListener("click", function() {
    takeValue("/");
})


equal.addEventListener("click", function() {
    takeValue(1);
})
deleteN.addEventListener("click", function() {
    takeValue(1);
})



/*console.log("Begin js!")
var botoncito = document.getElementById("suma")
botoncito.addEventListener("click", calculo)
var botoncito = document.getElementById("resta")
botoncito.addEventListener("click", calculo)
var botoncito = document.getElementById("mult")
botoncito.addEventListener("click", calculo)
var botoncito = document.getElementById("div")
botoncito.addEventListener("click", calculo)

var numA, numB, total
function calculo(numA, numB) {
    var operation
    switch(botoncito)
        case suma:
            total = numA + numB
            break
        case resta:
            total = numA - numB
            break
        case mult:
            total = numA * numB
            break
        case div:
            total = numA / numB
            break
}*/


