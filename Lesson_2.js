
/* 1. Почему код дает именно такие результаты?  */
var a = 1, b = 1, c, d;
c = ++a; alert(c); //2 Инкремент увеличивает операнд на установленный фиксированный шаг (префиксная форма)
d = b++; alert(d); //1 Постфиксная форма (сначала происходит возвращение значения)
c = (2 + ++a); alert(c); //5  Инкрементирование выполнено 2 раз, значение а = 3
d = (2 + b++); alert(d); //4  Инкрементирование еще не выполнилось 2 раз значение b = 2
alert(a); //3 
alert(b); //3 Инкрементирование уже выполнилось b = 2+1 

/* 2. Чему будет равен x? */
var a = 2;
var x = 1 + (a *= 2);
alert(x) //x=5 

/* 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. 
    Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность; 
    если а и b отрицательные, вывести их произведение; 
    если а и b разных знаков, вывести их сумму; 
    Ноль можно считать положительным числом. */

var a = -12  //Math.floor(Math.random() * 100);
var b = 3    //Math.floor(Math.random() * 100);
alert(a);
alert(b);
if (a >= 0 && b >= 0)
    alert(a - b);
else if (a < 0 && b < 0)
    alert(a * b);
else if ((a >= 0 && b < 0) || (a < 0 && b >= 0))
    alert(a + b);

/* 4. Присвоить переменной а значение в промежутке [0..15]. 
     С помощью оператора switch организовать вывод чисел от a до 15. */

var a = 4;
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);

}

/* 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return. */

function add(x, y) {
    return x + y;
}
function substraction(x, y) {
    return x - y;
}
function division(x, y) {
    return x / y;
}
function multiply(x, y) {
    return x * y;
}



/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
        case '+':
            return add(arg1, arg2);
        case 'substraction':
        case '-':
            return substraction(arg1, arg2);
        case 'division':
        case '/':
            return division(arg1, arg2);
        case 'multiply':
        case '*':
            return multiply(arg1, arg2);
    }
}

console.log(mathOperation(4, 7, 'division'))