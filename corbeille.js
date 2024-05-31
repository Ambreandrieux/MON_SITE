/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper;
testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper;
newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}


const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // Chack if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'Ecrire tous les champs de saisie'
    }else{
        // serviceID - templateID - #form - publicKey
        let emailjs;
        emailjs.sendForm('service_udy6phc','template_tj605zx','contact-form','QQ0DC9U1UUrdZgja2')
            .then(() =>{
                // Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message envoyé'

                // Remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('OUPS! QUELQUE CHOSE A ÉCHOUÉ...', error)
            })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)