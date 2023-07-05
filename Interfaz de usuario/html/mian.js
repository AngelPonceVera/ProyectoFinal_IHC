//cambio de cantidad de articulos ingresado por el usuario


let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;
plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber=0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

//Agregar el total de productos al carrito cuando se presiona el button add to card
const addTocartBtn= document.querySelector('.details__button');
let cartNotification=document.querySelector('.header__cart-notification');
let lastValue = parseInt(cartNotification.innerText);

addTocartBtn.addEventListener('click',()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText =lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
})

//mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click',()=>{
    
    cartModal.classList.toggle('show');
    if(lastValue == 0){
        drawProductInModal();
    }
    
});
//borrar el cobtebudi del carrito.
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">your cart is emply<p>';
        lastValue=0;
        cartNotification.innerText = lastValue;
    });
}
//cambiar imagenes cuando se rpesoopne 
const imageContainer = document.querySelector('.gallery__image-container');
const perviusGalleryBtn = document.querySelector('.gallery__previus')
const nextGalleryBtn = document.querySelector('.gallery__next')
let imgIndex=0;

const imagesUrls=[
    '../images/lap1.jpeg',
    '../images/lap2.jpeg',
    '../images/lap3.jpeg',
    '../images/lap4.jpeg'
]

nextGalleryBtn.addEventListener('click',()=>{
    changeNextImage(imgContainer);
});
//funciones
function drawProductInModal(){
    productContainer.innerHTML=`
        <div class="cart-modal__details-container">  
            <img class="cart-modal__image" src="images/lap.jpeg" alt="">
            <div>
            <p class="cart-modal__product">Autum limited edittion</p>
            <p class="cart-modal__price">$1255 x3 <span>$3750.00</span></p>
            </div>
            <img class="cart-modal__delete" src="images/x-symbol-svgrepo-com copy.svg" alt="delete">
        </div>
        </div>
        <button class="cart-modal__Checkout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$1255 x${lastValue} <span>$${lastValue*1255}.00</span>`;
}


function changeNextImage(imgContainer){
    imgIndex ++;
    imgContainer.style.backgroundImage = `url('../images/${imgIndex}.jpeg')`
}