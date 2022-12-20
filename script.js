const navEmail = document.querySelector ('#navEmail');
const opcionesDesktop = document.querySelector ('.opcionesDesktop');

const menuHam = document.querySelector ('.iconmenu');
const opcionesMobile = document.querySelector ('.opcionesMobile');

const menuCart = document.querySelector ('.shoppingIcon');
const shoppingCart = document.querySelector ('.shoppingCart');

const cardConteiner = document.querySelector ('.conteinerCard');

navEmail.addEventListener ('click', toggleopcionesDesktop);
menuHam.addEventListener ('click', toggleopcionesMobile);
menuCart.addEventListener ('click', toggleoshoppingCart);

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

    shoppingCart.classList.toggle ('inactive');
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

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}
for (product of productlist){
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const img = document.createElement ('img');
    img.setAttribute ('src', product.image);

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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardConteiner.appendChild(productCard);
}



