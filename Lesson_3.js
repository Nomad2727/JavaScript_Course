/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */
outerFor:
for (let i = 1; i < 100; i++) {
    if (i === 1) {
        console.log(i);
        continue;
    }
    for (let j = i - 1; j > 1; j--) {
        if (i % j === 0) {
            continue outerFor;
        }
    }
    document.write(i + ' ');
}

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. 
    Предположим, есть сущность корзины. 
    Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
/* 3. Товары в корзине хранятся в массиве. Задачи:
    a. Организовать такой массив для хранения товаров в корзине;
    b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */
const cart = [
    ['Мухомор', 1],
    ['Белый гриб', 2],
    ['Лисички', 3],
    ['Подберезовик', 4],
    ['Опята', 5],
];
const totalPrice1 = function (cart) {
    return cart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue[1];
    }, 0);
}
const totalPrice2 = (cart) => {
    return cart.reduce((a, b) => {
        return a + b[1];
    }, 0);
}

console.log(totalPrice1(cart));
console.log(totalPrice2(cart));

/* 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
    for(...){// здесь пусто} */
for (let i = 0; i < 10; console.log(i++)) { }