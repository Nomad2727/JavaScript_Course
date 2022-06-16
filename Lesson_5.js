/* 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
столбцы — латинскими буквами A, B, C, D, E, F, G, H.  */

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', '<div class="chessBoard"></div>');

const letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
const numbers = ['', 1, 2, 3, 4, 5, 6, 7, 8, ''];


function createChessBoard() {
    let table = document.createElement('table');
    table.style.border = "8px ridge #9999";
    table.style.backgroundColor = "#0000";
    table.style.borderCollapse = "collapse";

    for (let row = 0; row < letters.length; row++) {
        let tr = document.createElement('tr');
        table.append(tr);

        for (let col = 0; col < numbers.length; col++) {
            let td = document.createElement('td');
            td.style.width = "27px";
            td.style.height = "27px";
            td.style.textAlign = "center";

            if (row == 0 || row == 9) {
                td.innerHTML = letters[col];
            }
            else if (col == 0 || col == 9) {
                td.innerHTML = numbers[row];
            }
            else {
                td.style.border = "3px solid #000000";
                if ((row + col) % 2 == 1) {
                    td.style.backgroundColor = "#000000";
                }
            }
            tr.append(td);
        }
    }
    body.querySelector('.chessBoard').append(table);
}

createChessBoard();

/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

const cart = {
    items: [
        /* {
             id: 0,
             name: 'Мухомор',
             price: 3700,
         },
         {
             id: 1,
             name: 'Белый гриб',
             price: 870,
         },
         {
             id: 2,
             name: 'Лисички',
             price: 450,
         },
         {
             id: 3,
             name: 'Подберезовик',
             price: 399,
         },
         {
             id: 4,
             name: 'Опята',
             price: 300,
         },*/
    ],
    render() {
        this.items.forEach(item => {

        })
    },

    getTotalPrice() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);
    },

    getCartLength() {
        return this.items.length;
    },

    addToCart(product) {
        if (this.isCorrectProduct()) {
            this.items.push(product);
        }
    },

    deleteFromCart(id) {
        const indexItem = this.items.findIndex((item) => {
            return item.id === id;
        });
        this.items.splice(indexItem, 1);
    },

    render() {
        const cartWrapperElem = document.getElementById('cart');
        const cartElem = document.createElement('div');
        if (this.getCartLength() === 0) {
            cartElem.textContent = 'Корзина пуста';
        } else {
            cartElem.textContent = `В корзине: ${this.getCartLength()} товаров на сумму ${this.getTotalPrice()} рублей`;
        }
        cartWrapperElem.appendChild(cartElem);
    }
};



const catalog = {
    items: [
        {
            id: 0,
            name: 'Мухомор',
            price: 3700,
        },
        {
            id: 1,
            name: 'Белый гриб',
            price: 870,
        },
        {
            id: 2,
            name: 'Лисички',
            price: 450,
        },
        {
            id: 3,
            name: 'Подберезовик',
            price: 399,
        },
        {
            id: 4,
            name: 'Опята',
            price: 300,
        },
    ],

    render() {
        const catalogWrapperElem = document.getElementById('catalog');
        const catalogElem = document.createElement('div');
        this.items.forEach(item => {
            const itemElem = document.createElement('div');

            //создаем заголовок товара
            const itemH3Elem = document.createElement('h3');
            itemH3Elem.textContent = item.name;
            itemElem.appendChild(itemH3Elem);

            const itemPElem = document.createElement('p');
            itemPElem.innerHTML = item.price + '<br>';
            itemElem.appendChild(itemPElem);

            const itemHrElem = document.createElement('hr');
            itemElem.appendChild(itemHrElem);

            catalogElem.appendChild(itemElem);

        });

        catalogWrapperElem.appendChild(catalogElem);
    }
}
catalog.render();
cart.render();