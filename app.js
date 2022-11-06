const page = document.querySelectorAll(".page");


for (let a of page) {

    a.addEventListener("mouseenter", function () {

        let li = a.parentElement;

        li.style.borderBottom = "3px solid var(--Orange)";
    });
    a.addEventListener("mouseleave", function () {

        let li = a.parentElement;

        li.style.borderBottom = "3px solid var(--White  )";
    });
}


const hamburgerIcon = document.querySelector(".hamburger-icon");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const spaceDark = document.querySelector(".space-dark");

hamburgerIcon.addEventListener("click", function () {

    menu.classList.add("menu-effect");
    spaceDark.classList.add("space-dark-effect");
});
close.addEventListener("click", function () {
   
    menu.classList.remove("menu-effect");
    spaceDark.classList.remove("space-dark-effect");


});


const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");


cartIcon.addEventListener("click", function () {
    cart.classList.toggle("cart-effect");
});

const bigImage = document.querySelector(".big-image");
const smallImages = document.querySelector(".small-images");

const galleryClose = document.querySelector(".gallery-close");
const lightBox = document.querySelector(".lightbox-design");
const choosedImg = document.querySelector(".choosed-img");

const smallGallery = document.querySelector(".small-gallery");

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

let val = 0;

const imagesArr = [
    {
        name: "images1",
        src: "./images/image-product-1.jpg"
    },
    {
        name: "images2",
        src: "./images/image-product-2.jpg"
    },
    {
        name: "images3",
        src: "./images/image-product-3.jpg"
    },
    {
        name: "images4",
        src: "./images/image-product-4.jpg"
    }
];



const bigImgFonc = function (id) {
    document.querySelector(".big-image img").addEventListener("click", function (e) {

        lightBox.classList.add("lightbox-effect");

        val = id;

        choosedImg.innerHTML = `
          <div class="img-small">
        <img src="${imagesArr[val - 1].src}" alt="${imagesArr[val - 1].name}">
          </div>
    
        `;


      
        for (let smallImg of smallGallery.children) {

            if (choosedImg.children[0].children[0].alt == smallImg.children[0].alt) {
                smallImg.classList.add("active");
            }
        }


    });
}

bigImage.innerHTML = `
  <div class="img-small">
        <img src="${imagesArr[0].src}"  alt="${imagesArr[0].name}">
          </div>


`;



for (let image of smallImages.children) {
    image.addEventListener("click", function () {
        val = image.id;
        bigImage.innerHTML = `
        <div  class="img-small">
<img src="${imagesArr[image.id - 1].src}"  alt="${imagesArr[image.id - 1].name}">
        </div>
`;

        document.querySelector(".img-small.active").classList.remove("active");
        image.classList.add("active");






        bigImgFonc(image.id);



    });


}

bigImgFonc(val + 1);


galleryClose.addEventListener("click", function () {
    lightBox.classList.remove("lightbox-effect");

    for (let smallImg of smallGallery.children) {
        smallImg.classList.remove("active");
    }

});



next.addEventListener("click", function () {

    val++;

    if (val > imagesArr.length) {
        val = 1;
    }

    choosedImg.innerHTML = `
    <div class="img-small">
   <img src="${imagesArr[val - 1].src}" alt="${imagesArr[val - 1].name}">
    </div>
 
    `;



    for (let smallImg of smallGallery.children) {

        if (choosedImg.children[0].children[0].alt == smallImg.children[0].alt) {
            document.querySelector(".gallery-small.active").classList.remove("active");
            smallImg.classList.add("active");
        }
    }

});

previous.addEventListener("click", function () {
    val--;

    if (val == 0) {
        val = imagesArr.length;
    }

    choosedImg.innerHTML = `
    <div class="img-small">
    <img src="${imagesArr[val - 1].src}" alt="${imagesArr[val - 1].name}">
    </div>
    `;

    for (let smallImg of smallGallery.children) {

        if (choosedImg.children[0].children[0].alt == smallImg.children[0].alt) {
            document.querySelector(".gallery-small.active").classList.remove("active");
            smallImg.classList.add("active");
        }
    }
});



for (let smallimg of smallGallery.children) {


    smallimg.addEventListener("click", function () {
        let dataId = smallimg.getAttribute("data-id");
        val = dataId;

        choosedImg.innerHTML = `
              <div class="img-small">
          <img src="${imagesArr[val - 1].src}" alt="${smallimg.children[0].alt}">
        </div>
        `;


        document.querySelector(".gallery-small.active").classList.remove("active");
        smallimg.classList.add("active");




    });
}



const piece = document.querySelector(".piece");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const addBtn = document.querySelector(".add-cart");
const money = document.querySelector(".money");
const productName = document.querySelector(".product-name");
const custom = document.querySelector(".custom");
const products = document.querySelector(".products");


plus.addEventListener("click", function () {
    piece.textContent++;

    if (piece.textContent > 0) {
        addBtn.classList.add("add-cart-active");

    }


});

minus.addEventListener("click", function () {
    piece.textContent--
    if (piece.textContent < 0) {
        piece.textContent = 0;
    }

    if (piece.textContent == 0) {
        addBtn.classList.remove("add-cart-active");
    }
});

addBtn.addEventListener("click", function () {






    let total = (money.textContent * piece.textContent).toFixed(2);



    let div = `
    
          <div class="product">
          <img src="${bigImage.children[0].children[0].getAttribute("src")}" alt="${bigImage.children[0].children[0].getAttribute("alt")}">
          <div class="cart-product-description">
            <p>${productName.textContent}</p>
          <p>$${money.textContent} x ${piece.textContent} <span class="result">$${total}</span></p>
          </div>
          <svg width="14" height="16" class="cart-delete" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a" />
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
          </svg>
        </div>

      </div>
      
    `;

    products.innerHTML += `
    ${div}
    `;

    piece.textContent = 0;
    addBtn.classList.remove("add-cart-active");

    custom.textContent++;




    cartEmpty(custom);
    cartDelete(document.querySelectorAll(".product"));


});



const cartDelete = function (svg) {


    for (let cartDelete of svg) {
        let deleteCart = cartDelete.children[2];

        deleteCart.addEventListener("click", function () {
            deleteCart.parentElement.remove();
            custom.textContent--;
            cartEmpty(custom);
        });
    }


}


const cartEmpty = function (custom) {

    if (custom.textContent == 0) {
        let empt = `<p class="empt">Your cart is empty.</p>`;

        products.innerHTML = `
        ${empt}`;
    }

    else {
        for (let i of products.children) {
           
            if (i.classList.value == "empt") {
           
                i.remove();
            }
        }
    }




}




cartEmpty(custom);


const mobileGallery = document.querySelector(".mobile-gallery");
const mobilePrevious = document.querySelector("#previous-mobile");
const mobileNext = document.querySelector("#next-mobile");


mobileGallery.innerHTML = `
    <img src="${imagesArr[val].src}" alt="${imagesArr[val].name}">
    `;


mobilePrevious.addEventListener("click", function () {
    val--;

    if (val == 0) {
        val = imagesArr.length - 1;
    }

    mobileGallery.innerHTML = `
    <img src="${imagesArr[val].src}" alt="${imagesArr[val].name}">
    `;

});

mobileNext.addEventListener("click", function () {
    val++;

    if (val == imagesArr.length) {
        val = 0;
    }
    
    mobileGallery.innerHTML = `
    <img src="${imagesArr[val].src}" alt="${imagesArr[val].name}">
    `;

});