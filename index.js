const menuBtn = document.querySelector(".mobile-menu-btn");
const menu = document.querySelector(".mobile-menu");
const selectors = document.querySelectorAll(".feature-selector");
const slides = document.querySelectorAll(".feature");
const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll(".faq-answer");
const arrows = document.querySelectorAll(".arrow");

menuBtn.addEventListener('click', () => showMobileMenu());

function showMobileMenu() {
    menuBtn.classList.toggle('mobile-menu-btn-close');
    menu.classList.toggle('mobile-menu-show');
    document.querySelector('body').classList.toggle('scrol-block');
    document.querySelector('nav').classList.toggle('menu-regime');
    document.querySelector('.nav-logo').classList.toggle('mobile-menu-nav-logo');
}

let activeSlideIndex = 0;

selectors[activeSlideIndex].classList.add('feature-selector-active');
slides[activeSlideIndex].classList.add('feature-ready-to-render');
slides[activeSlideIndex].classList.add('feature-visible');

for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", () => changeSlide(i));
    selectors[i].addEventListener("keydown", (e)=>{ 
        if (e.key === "Enter") changeSlide(i);
    })
}

function changeSlide(slideIndex) {
    if (activeSlideIndex === slideIndex) {
        return;
    }

    selectors[activeSlideIndex].classList.remove('feature-selector-active');
    slides[activeSlideIndex].classList.remove('feature-visible'); // diplay: flex; opacity: 0
    // wait for opacity transition after removing .feature-visible
    setTimeout(()=>{
        slides[activeSlideIndex].classList.remove('feature-ready-to-render'); // diplay: none
    
        selectors[slideIndex].classList.add('feature-selector-active');
        slides[slideIndex].classList.add('feature-ready-to-render'); // diplay: flex; opacity: 0
        requestAnimationFrame(() => {
            slides[slideIndex].classList.add('feature-visible'); //diplay: flex; opacity: 1
        });

        activeSlideIndex = slideIndex; 
    }, 100);  
}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => slideToggle(i));
    questions[i].addEventListener('keydown', (e)=>{ 
        if (e.key === "Enter") slideToggle(i);
    })
}

function slideToggle(index) {
    arrows[index].classList.toggle('up');
    
    if (answers[index].classList.contains('slide-up')) {
        answers[index].style.height = '0';
        answers[index].style.transition = '0.2s ease-out'
        answers[index].classList.remove('slide-up');
    } else {
        answers[index].style.height = answers[index].scrollHeight + 'px';
        answers[index].style.transition = '0.2s ease-out'
        answers[index].classList.add('slide-up');
    }
}

// email validation
const submitBtn = document.querySelector('.submit-button');
const email = document.querySelector('.contact-email');
const invalidIcon = document.querySelector('.invalid-icon');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const emailValidation = function() {
    if (emailRegex.test(email.value)) {
        invalidIcon.classList.remove('invalid-icon-visible');
    } else {
        console.log('email is not valid');
        invalidIcon.classList.add('invalid-icon-visible');
    }
};

submitBtn.addEventListener('click', () => emailValidation());

 