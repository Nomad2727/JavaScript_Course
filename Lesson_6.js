/* 1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.  */

const cart = {
    items: [
        /* {
             id: 0,
             productID: 0,
             name: 'Мухомор',
             price: 3700,
             count: 1,
         },
         {
             id: 1,
             productID: 1,
             name: 'Белый гриб',
             price: 870,
             count: 1,
         },
         {
             id: 2,
             productID: 2,
             name: 'Лисички',
             price: 450,
             count: 1,
         },
         {
             id: 3,
             productID: 3,
             name: 'Подберезовик',
             price: 399,
             count: 1,
         },
         {
             id: 4,
             productID: 4,
             name: 'Опята',
             price: 300,
             count: 1,
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
        const idx = this.items.findIndex(item => {
            return item.productID === +product.id;
        });
        if (idx === -1) {
            this.items.push({
                id: this.items.length === 0 ? 0 : this.items[this.items.length - 1].id + 1,
                productID: product.id,
                name: product.name,
                price: product.price,
                count: 1,
            });
        } else {
            this.items[idx].count++;
        }
        this.render();
    },

    deleteFromCart(id) {
        const indexItem = this.items.findIndex((item) => {
            return item.id === id;
        });
        this.items.splice(indexItem, 1);
    },

    render() {
        const cartWrapperElem = document.getElementById('cart');
        cartWrapperElem.innerHTML = '';
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

    cart,

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

    clickHandler(event) {
        if (event.target.tagName === 'BUTTON') {
            const idx = this.items.findIndex(item => {
                return item.id === +event.target.dataset.id;
            });
            cart.addToCart(this.items[idx]);
        }
    },

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

            const itemButtonElem = document.createElement('button');
            itemButtonElem.textContent = 'Купить';
            itemButtonElem.dataset.id = item.id;
            itemElem.appendChild(itemButtonElem);

            const itemHrElem = document.createElement('hr');
            itemElem.appendChild(itemHrElem);

            catalogElem.appendChild(itemElem);

        });
        catalogElem.addEventListener('click', (event) => {
            this.clickHandler(event);
        });
        catalogWrapperElem.appendChild(catalogElem);
    }
}
catalog.render();
cart.render();