/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrolly >=50 ? header.classList.add('scroll-header')
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY=window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass=document.querySelector('.nav__menu a[href*=' + sectionId)

    if(scrollY > sectionClass && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')

    }else{
        sectionClass.classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500;
    delay:400,

})

sr.reveal('.home__data, .steps__content, .footer__container');

// Reveal home image from the bottom
sr.reveal('.home__img', { origin: 'bottom' });

// Reveal product cards with a staggered interval
sr.reveal('.products__card', { interval: 100 });

// Reveal about and testimonial images from the right
sr.reveal('.about__img, .testimonial__img', { origin: 'right' });

// Reveal about and testimonial data from the left
sr.reveal('.about__data, .testimonial__data', { origin: 'left' });