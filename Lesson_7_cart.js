const cart = {
    items: [
        {
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
        },
    ],

    getTotalPrice() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);
    },

    getCartLength() {
        return this.items.length;
    },

    addToCart(id) {
        const idx = this.items.findIndex(item => {
            return item.id === +id;
        });

        this.items[idx].count++;
        this.render();
    },

    deleteFromCart(id) {
        const idx = this.items.findIndex(item => {
            return item.id === +id;
        });

        if (this.items[idx].count === 1) {
            this.removeFromCart(id);
            return;
        } else {
            this.items[idx].count--;
        }
        this.render();
    },

    removeFromCart(id) {
        console.log(this.items);
        console.log(id);
        const indexItem = this.items.findIndex((item) => {
            return item.id === +id;
        });

        console.log(indexItem);
        this.items.splice(indexItem, 1);
        this.render();
    },

    clickHandler(event) {
        if (event.target.tagName === 'BUTTON') {
            const { id, action } = event.target.dataset

            switch (action) {
                case '/':
                    this.removeFromCart(id);
                    return;
                case '+':
                    this.addToCart(id);
                    return;
                case '-':
                    this.deleteFromCart(id);
                    return;
            }
        }
    },

    renderOrder() {
        const cartWrapperElem = document.getElementById('order');

        cartWrapperElem.innerHTML = '';

        const itemH3Elem = document.createElement('h3');
        itemH3Elem.textContent = 'Состав заказа';
        cartWrapperElem.appendChild(itemH3Elem);

        const cartElem = document.createElement('div');
        this.items.forEach(item => {
            const itemElem = document.createElement('div');

            //создаем заголовок товара
            const itemH3Elem = document.createElement('h5');
            itemH3Elem.textContent = item.name;
            itemElem.appendChild(itemH3Elem);

            const itemPElem = document.createElement('p');
            itemPElem.innerHTML = item.price + '<br>';
            itemElem.appendChild(itemPElem);

            const itemCountElem = document.createElement('p');
            itemCountElem.innerHTML = item.count + '<br>';
            itemElem.appendChild(itemCountElem);

            cartElem.appendChild(itemElem);

        });

        cartWrapperElem.appendChild(cartElem);
    },

    render() {
        const cartWrapperElem = document.getElementById('cart');
        cartWrapperElem.innerHTML = '';
        const cartElem = document.createElement('div');

        this.items.forEach(item => {
            const itemElem = document.createElement('div');

            //создаем заголовок товара
            const itemH3Elem = document.createElement('h5');
            itemH3Elem.textContent = item.name;
            itemElem.appendChild(itemH3Elem);

            const itemPElem = document.createElement('p');
            itemPElem.innerHTML = item.price + '<br>';
            itemElem.appendChild(itemPElem);

            const itemCountElem = document.createElement('p');
            itemCountElem.innerHTML = item.count + '<br>';
            itemElem.appendChild(itemCountElem);

            const itemButtonPlusElem = document.createElement('button');
            itemButtonPlusElem.textContent = '+';
            itemButtonPlusElem.dataset.id = item.id;
            itemButtonPlusElem.dataset.action = '+';
            itemElem.appendChild(itemButtonPlusElem);

            const itemButtonMinusElem = document.createElement('button');
            itemButtonMinusElem.textContent = '-';
            itemButtonMinusElem.dataset.id = item.id;
            itemButtonMinusElem.dataset.action = '-';
            itemElem.appendChild(itemButtonMinusElem);

            const itemButtonDeleteElem = document.createElement('button');
            itemButtonDeleteElem.textContent = 'X';
            itemButtonDeleteElem.dataset.id = item.id;
            itemButtonDeleteElem.dataset.action = '/';
            itemElem.appendChild(itemButtonDeleteElem);

            const itemHrElem = document.createElement('hr');
            itemElem.appendChild(itemHrElem);

            cartElem.appendChild(itemElem);

        });
        cartElem.addEventListener('click', (event) => {
            this.clickHandler(event);
        });
        cartWrapperElem.appendChild(cartElem);
    },

    nextEvent() {
        const next = document.getElementById('next');
        next.addEventListener('click', () => {
            this.nextHandler();
        });
    },

    nextHandler() {
        const close = document.getElementById('close');

        let element = null;
        for (let i = 0; i < close.children.length; i++) {
            if (close.children[i].dataset.display === 'true') {
                element = close.children[i];
                element.dataset.display = false;
                element.style.display = 'none';

                if (close.children[i + 1]) {
                    close.children[i + 1].dataset.display = true;
                    close.children[i + 1].style.display = 'block';
                } else {
                    close.children[0].dataset.display = true;
                    close.children[0].style.display = 'block';
                }
                break;
            }
        }
    }
};

cart.renderOrder();
cart.render();
cart.nextEvent();
