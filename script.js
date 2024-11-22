const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)


let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicator");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        indicators[i].classList.remove("active");
    }
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block";
    indicators[slideIndex].classList.add("active");
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

setInterval(() => {
    slideIndex++;
    showSlides();
}, 3000);

showSlides();