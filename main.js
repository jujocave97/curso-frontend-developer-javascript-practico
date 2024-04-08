const menuEmail= document.querySelector('.navbar-email'); // seleccionar navbar-email
const desktopMenu= document.querySelector('.desktop-menu'); 
const menuBurguerIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');
const cardsContainer= document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);  // llama al metodo, el metodo tiene que existir
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){  
    console.log('Click');
    desktopMenu.classList.toggle('inactive');  // añadir o quitar la clase inactive a desktop menu en el html
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}                                               // la clase inactive tiene en css display none para que desaparezca, cuando llamamos a este metodo aparece o desaparece el menu

function toggleMobileMenu(){  // aparece y desaparece el menu hamburguesa de la version movil
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive'); // cierra el menu del carrito
    desktopMenu.classList.add('inactive');
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');  // cierra el menu
    desktopMenu.classList.add('inactive');
}


const productList= [];  // se deberia coger la info de una api 

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike2',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike3',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike4',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(productos){
    for( product of productos){  // crear elementos productos 
        const productCard=  document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName= document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
}
renderProducts(productList);


/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    -->  Estructura que se crea en html
    */