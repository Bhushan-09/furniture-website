const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isOpen ? "bx bx-x" : "bx bx-menu-alt-right");
}); 



navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
 
    menuBtnIcon.setAttribute("class","bx bx-menu-alt-right");
});

const navSearch = document.getElementById("nav-search-1");
navSearch.addEventListener("click",(e)=>{
    navSearch.classList.toggle("open");
});



const scrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:"1000",
};

ScrollReveal().reveal(".header-image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header-content div",{
    duration:1000,
    delay:500,
});
ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    delay:1500,
});



ScrollReveal().reveal(".deals-card",{
    ...scrollRevealOption,
    interval:500,
});



ScrollReveal().reveal(".about-image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".about-card",{
    duration:1000,
    interval:500,
    delay:500,
});



const swiper = new Swiper(".swiper",{
    loop:true,
});




let addcart = document.querySelector('.add-cart');
let orders = document.querySelector('.orders');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listproducthtml = document.querySelector('.listproduct');

let listproducts =[];

addcart.addEventListener('click',()=>{
    body.classList.toggle("show-cart");
});
orders.addEventListener('click',()=>{
    body.classList.toggle("show-cart");
});
closecart.addEventListener('click',()=>{
    body.classList.toggle("show-cart");
});
    


const product = [
    {
        "id":1,
        "name":"Stackable Chair",
        "price":7499 ,
        "image":"images/product-1.png"
    },
    {
        "id":2,
        "name":"Lamp tool",
        "price":2999 ,
        "image":"images/product-2.png"
    },
    {
        "id":3,
        "name":"Dining Chair",
        "price":6499 ,
        "image":"images/product-3.png"
    },
    {
        "id":4,
        "name":"Hand Base Lamp",
        "price":2999 ,
        "image":"images/product-4.png"
    },
    {
        "id":5,
        "name":"Glass Dinning Table",
        "price":19999 ,
        "image":"images/product-13.png"
    },
    {
        "id":6,
        "name":"Modern wall Lamp",
        "price":1999,
        "image":"images/product-11.png"
    },
    {
        "id":7,
        "name":"Stylish Chair",
        "price":3999 ,
        "image":"images/product-5.png"
    },
    {
        "id":8,
        "name":"Modern Sofa",
        "price":13499,
        "image":"images/product-16.png"
    },
    {
        "id":9,
        "name":"Modern zumar",
        "price":13499,
        "image":"images/product-12.png"
    },
    {
        "id":10,
        "name":"Wooden Zula",
        "price":11499 ,
        "image":"images/product-15.png"
    },
    {
        "id":11,
        "name":"Wingback Chair",
        "price":8999 ,
        "image":"images/product-6.png"
    },
    {
        "id":12,
        "name":"Vintage Chair",
        "price":3499 ,
        "image":"images/product-7.png"
    },
    {
        "id":13,
        "name":"Modern Chair",
        "price":5499 ,
        "image":"images/product-8.png"
    },
    {
        "id":14,
        "name":"Wall Lamp",
        "price":1499 ,
        "image":"images/product-10.png"
    },
    {
        "id":15,
        "name":"Wooden Dinning Table",
        "price":15499 ,
        "image":"images/product-14.png"
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('grid').innerHTML = categories.map((item)=>
    {
        var {image,price,name}=item;
        return(
            `<div class='product-card'>
                   <h4>${name}</h4>
                   <p>${price}.00</p>
                   <img src=${image}></img>`+
                   "<button class='btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>`
        )
    }).join('');


    var cart =[];

    function addtocart(e){
        cart.push({...categories[e]});
        displaycart();
    }

   function delElement(e){
    cart.splice(e,1);
    displaycart();
   }

    function displaycart(e){
        let j = 0 , total=0;
        document.getElementById('count').innerHTML = cart.length;
        if(cart.length==0){
            document.getElementById('list-cart').innerHTML="Your Cart Is Empty";
            document.getElementById('total').innerHTML="Rs"+0+".00";
        }else{
            document.getElementById('list-cart').innerHTML=cart.map((Item)=>
            {
               var{image,name,price} = Item;
               total=total+price;
               document.getElementById('total').innerHTML = "Rs "+total+".00";   
                return(
                `<div class='item'>
                    <div class='image'>
                        <img class='images' src=${image}>
                    </div>
                    <div class="name">${name}</div>
                    <div class="total-price">${price}</div>`+
                    "<i class='bx bxs-trash' onclick='delElement("+ (j++) +")'></i></div>"
               )
            }).join('');
        }

    }

    let msg=document.querySelector('#msg')

    function checkoutClick(){
            window.location.href="http://127.0.0.1:5500/checkout.html";
    }




