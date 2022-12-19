// STICKY HEADER
const header = document.querySelector('header')

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0)
})

// BARS
const bars = document.querySelector(".fa-bars")

bars.addEventListener('click', function () {
    navbar = document.querySelector(".nav-links")
    navbar.classList.toggle("active")
})

//Typing
var typed = new Typed('.input', {
    strings: ["Mammadov", "Web Developer", "Designer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
})

//   COUNT UP
let valueDisplays = document.querySelectorAll(".num")
let interval = 4000

valueDisplays.forEach(valueDisplay => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))

    let duration = Math.floor(interval / endValue)

    //setInterval() metodu müəyyən edilmiş intervallarla (millisaniyələrlə) funksiyanı çağırır.
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            //setInterval() metodu clearInterval() çağırılana və ya pəncərə bağlanana qədər funksiyanı çağırmağa davam edir.
            clearInterval(counter)
        }
    }, duration)

})


// TESTIMONIALS START
const myCardsContainer = document.querySelector('.testimonials-content')

window.addEventListener('DOMContentLoaded', butunCommentleriGetir)

async function butunCommentleriGetir() {
    const unvan = "comments.json"

    try {
        const gelenComments = await fetch(unvan)

        const frontEndinAnladigiForma = await gelenComments.json()

        for (let i = 0; i < frontEndinAnladigiForma.length; i++) {
            myCardsContainer.innerHTML += `
            <div class="row swiper-slide">
                <img src="${frontEndinAnladigiForma[i].user_img}" alt="">
                <div class="main-row">
                    <div class="row-text">
                        <h6>${frontEndinAnladigiForma[i].user_name}</h6>
                    </div>
                <div class="row-icon">
                    <i class="fa-regular fa-user"></i>
                </div>
            </div>
            <h3>${frontEndinAnladigiForma[i].user_job}</h3>
            <p>${frontEndinAnladigiForma[i].user_comment}</p>
        </div>         
            `
        }
    }
    catch (error) {
        console.log(error)
    }
}
// TESTIMONIALS END


function myFunction(x) {
    if (x.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    }
    else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}
var x = window.matchMedia("(min-width: 955px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




