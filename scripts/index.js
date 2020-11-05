window.onload = () => {
    // burger menu
    const menu = document.querySelector('.menu')
    const menuBtn = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu__overlay')

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle("active");
    })

    menuOverlay.addEventListener('click' , () => {
        menu.classList.remove("active")
    })
    
    //slider

    let slider = document.querySelectorAll('.slider');
    const sliderBtns = document.querySelectorAll('.slider__buttons span');
    let sliderImg = document.querySelectorAll('.slider__background img');
    let urls = [];

    sliderBtns.forEach((btn) => {
        btn.addEventListener('click', e => {
            sliderBtns.forEach(item => {
                item.classList.remove('active')
            })
            if (e.target.parentElement.parentElement.parentElement.className === 'about__content'){
                slider = slider[0]
                sliderImg = sliderImg[0]
                urls = ['./img/logo.png', './img/about_slider.png', './img/head_logo.png', './img/about_slider.png']
            }else{
                slider = slider[1]
                sliderImg = sliderImg[1]
                urls = ['./img/team_1.png', './img/team_3.png', './img/team_2.png', './img/team_4.png'];
            }

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
            e.preventDefault()
            e.target.parentElement.parentElement.classList.add('active')
        })
    })

    const closeInfoBtn = document.querySelectorAll('.img__moreinfo i')
    
    closeInfoBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault()
            e.target.parentElement.parentElement.classList.remove('active')
        })
    })

}