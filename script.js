console.log("JavaScript is connected.");

const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {
	getStartedBtn.addEventListener("click", () => {
		console.log("Get Started button clicked.");
	});
}

let elements = document.getElementsByClassName('nav__link--burger')


function menuOpen(){
    document.body.classList += 'open--menu'

    for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('nav__link--burger__custom')
}

}

function menuClose(){
    document.body.classList.remove('open--menu')

    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('nav__link--burger__custom')
    }

}

function initTestimonialSlider(){
    if (!window.jQuery) return;
    if (!jQuery.fn || !jQuery.fn.slick) return;

    const $slider = jQuery('[data-slick]');
    if (!$slider.length) return;
    if ($slider.hasClass('slick-initialized')) return;

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: false,
        arrows: true,
        prevArrow: jQuery('.test__nav-btn--prev'),
        nextArrow: jQuery('.test__nav-btn--next'),
    });
}

function initScrollReveal(){
    const sections = document.querySelectorAll('section');
    sections.forEach((s, i) => {
        s.classList.add('reveal', i % 2 === 0 ? 'reveal--left' : 'reveal--right');
    });

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        sections.forEach((s) => s.classList.add('is-visible'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        sections.forEach((s) => s.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            }
        },
        {
            /* threshold 0.15 fails for tall sections (intersection ratio stays below 15%). */
            threshold: 0,
            /* Negative bottom = wait until section is further into view (less “too soon”). */
            rootMargin: '0px 0px -22% 0px',
        }
    );

    sections.forEach((s) => observer.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
    initTestimonialSlider();
    initScrollReveal();
});
