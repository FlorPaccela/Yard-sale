const navEmail = document.querySelector ('#navEmail');
const opcionesDesktop = document.querySelector ('.opcionesDesktop');

const menuHam = document.querySelector ('.iconmenu');
const opcionesMobile = document.querySelector ('.opcionesMobile');

const menuCart = document.querySelector ('.shoppingIcon');
const shoppingCart = document.querySelector ('.shoppingCart');

const cardConteiner = document.querySelector ('.conteinerCard');
const conteinerMain = document.querySelector ('.conteinerMain');

const productDetailConteiner = document.querySelector ('#productDetail');
const productDetailclose = document.querySelector ('.iconclose');

navEmail.addEventListener ('click', toggleopcionesDesktop);
menuHam.addEventListener ('click', toggleopcionesMobile);
menuCart.addEventListener ('click', toggleoshoppingCart);
productDetailclose.addEventListener ('click', closeproductdetail)

function toggleopcionesDesktop() {
    const isCartClosed = shoppingCart.classList.contains('inactive');
    if (!isCartClosed){
       shoppingCart.classList.add ('inactive'); 
    }

    opcionesDesktop.classList.toggle ('inactive');
}

function toggleopcionesMobile() {
    const isCartClosed = shoppingCart.classList.contains('inactive');
    if (!isCartClosed){
       shoppingCart.classList.add ('inactive'); 
    }

    closeproductdetail();

    opcionesMobile.classList.toggle ('inactive');
}

function toggleoshoppingCart() {
    const isopMobileClosed = opcionesMobile.classList.contains('inactive');
    const opDesktopClosed = opcionesDesktop.classList.contains('inactive');

    if (!isopMobileClosed){
        opcionesMobile.classList.add ('inactive'); 
    }

    if (!opDesktopClosed){
        opcionesDesktop.classList.add ('inactive'); 
    }

    const productDetailsClosed = productDetailConteiner.classList.contains('inactive');

    if (!productDetailsClosed){
        productDetailConteiner.classList.add ('inactive'); 
    }

    shoppingCart.classList.toggle ('inactive');
}

function openproductdetail(){
    shoppingCart.classList.add('inactive');
    productDetailConteiner.classList.remove('inactive');
}

function closeproductdetail(){
    productDetailConteiner.classList.add('inactive');
}

//CARDS DE PRODUCTOS

const productlist = [];
productlist.push({
    name: 'Captus',
    price: 120.00,
    image: '../products/plant1.jpg',
});

productlist.push({
    name: 'Suculenta',
    price: 240.00,
    image: '../products/plant2.jpg',
});

for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const productimg = document.createElement ('img');
    productimg.setAttribute ('src', product.image);
    productimg.addEventListener ('click', openproductdetail)

    const productInfo = document.createElement('div');
    productInfo.classList.add('productInfo');

    const productInfodiv = document.createElement('div');
    productInfodiv.classList.add('productPrice');

    const productPrice = document.createElement('h1');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');
    const productimgfigure = document.createElement ('img');
    productimgfigure.setAttribute ('src', '../icons/bt_add_to_cart.svg');

    productFigure.appendChild(productimgfigure);

    productInfodiv.appendChild(productPrice);
    productInfodiv.appendChild(productName);

    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);

    conteinerMain.appendChild(cardConteiner);
}