window.onload = () => {
    // burger menu
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu__overlay');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle("active");
    })

    menuOverlay.addEventListener('click' , () => {
        menu.classList.remove("active");
    })

    //links

    const links = document.querySelectorAll('.menu__nav a');
    const sections = Array.from(document.querySelectorAll('section, header'));

    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const machedSection = sections.filter(item => {
                const patt = item.className;
                if (link.dataset.url.match(patt)) {
                    return item
                }
            });
            const sectionCoord = machedSection[0].getBoundingClientRect();
            const {body} = document;
            const docEl = document.documentElement;
            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            const clientTop = docEl.clientTop || body.clientTop || 0;
            const top = sectionCoord.top + scrollTop - clientTop;

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
            menu.classList.remove("active");
        })
    })

    const contactBtn = document.querySelector('.intro__button a');
    const contactSec = document.querySelector('.contact');

    contactBtn.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: contactSec.offsetTop,
            behavior: 'smooth'
        })
    })
    
    //slider

    let slider = document.querySelectorAll('.slider');
    let sliderBtns = document.querySelectorAll('.slider__buttons span');
    let sliderImg = document.querySelectorAll('.slider__background img');
    let urls = [];

    sliderBtns.forEach((btn) => {
        btn.addEventListener('click', e => {
            
            if (e.target.parentElement.parentElement.parentElement.className === 'about__content'){
                slider = slider[0];
                sliderImg = sliderImg[0];
                urls = ['./img/logo.png', './img/about_slider.png', './img/head_logo.png', './img/about_slider.png'];
                sliderBtns = document.querySelectorAll('.about .slider__buttons span');
            }else{
                slider = slider[1];
                sliderImg = sliderImg[1];
                urls = ['./img/team_1.png', './img/team_3.png', './img/team_2.png', './img/team_4.png'];
                sliderBtns = document.querySelectorAll('.reviews .slider__buttons span');
            }
            sliderBtns.forEach(item => {
                item.classList.remove('active');
            })
            sliderImg.src = urls[Number(e.target.dataset.num)];
            e.target.classList.toggle('active');
            slider = document.querySelectorAll('.slider');
            sliderImg = document.querySelectorAll('.slider__background img');
        })
    })

    //services

    const openInfoBtns = document.querySelectorAll('.img__content a');

    openInfoBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            e.target.parentElement.parentElement.classList.add('active');
        })
    })

    const closeInfoBtn = document.querySelectorAll('.img__moreinfo i');
    
    closeInfoBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            e.target.parentElement.parentElement.classList.remove('active');
        })
    })

    //reviews slider

    const prev = document.querySelector('.reviews__info__buttons .prev');
    const next = document.querySelector('.reviews__info__buttons .next');
    const revSldrBtns = Array.from(document.querySelectorAll('.reviews .slider__buttons span'))

    const reviews = Array.from(document.querySelectorAll('.reviews__info__block'));

    let counter = 1;
    const revSldr = btn => {
        const activeRev = reviews.filter(rev => rev.className.includes('active'));
        activeRev[0].classList.remove('active');
        if(btn.target.className.includes('next') || btn.target.parentElement.className.includes('next')){
            if (counter < reviews.length - 1) {
                counter++;
            } else {
                counter = 0;
            }
        }else{
            if (counter <= 0) {
                counter = reviews.length - 1;
            } else {
                counter--;
            }
        }
        revSldrBtns[counter].click();
        reviews[counter].classList.add('active');
    }
    next.addEventListener('click', revSldr);
    prev.addEventListener('click', revSldr);
}