var globalValue = window.globalValue || {};

!(function () {
    class CartsMessages {
        constructor(options) {
            this.titleMessage = options.title
            this.bodyMessage = options.body
            this.imgMessage = options.img
            this.domElemIdMessage = options.domElemId
        }


        createDomElement() {
            const elem = document.createElement("div");
            const parentDomElement = document.querySelector(".cart-list")
            const urlImages = "./images/"
            const urlArticle = "html/article?="

            elem.innerHTML = `<h2> ${this.titleMessage}</h2>`;
            elem.innerHTML += `<img src=${urlImages + this.imgMessage}>`;
            elem.innerHTML += `<p> ${this.bodyMessage}</p>`;
            elem.innerHTML += `<div class="item-bottom"><a href="urlArticle${this.domElemIdMessage}"><button>Подробнее</button></a></div>`;
            elem.id = this.domElemIdMessage;
            elem.className = "item";

            parentDomElement.appendChild(elem);
        };
    };

    class CartsType extends CartsMessages {
        constructor(options) {
            super(options)
            this.type = options.type
        }


        createTypeNatural() {
            super.createDomElement()
            const elemItem = document.querySelector(`#${this.domElemIdMessage}`)
            elemItem.style.background = "green"
        }

        createTypeTechnologies() {
            super.createDomElement()
            const elemItem = document.querySelector(`#${this.domElemIdMessage}`)
            elemItem.style.background = "gray"
        }
    }

    globalValue.testPromise.then((result) => {
        console.log(result)
        for (let item of result) {
            if (item.type === '3') {
                const cartNatural = new CartsType(item)
                cartNatural.createTypeNatural()
            } else if (item.type === '2') {
                const cartNatural = new CartsType(item)
                cartNatural.createTypeTechnologies()
            }
            else {
                const cartMessage = new CartsMessages(item)
                cartMessage.createDomElement()
            }

        };
    })
})();
