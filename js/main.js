const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    if(menu.classList.contains('active')){
        body.classList.add('hide');
    }else{
        body.classList.remove('hide');
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });

const accordion = document.querySelectorAll('.accordion');

accordion.forEach(el => {
  if(el.classList.contains('open')){
    el.querySelector('.accordion__content').style.maxHeight = el.querySelector('.accordion__content').scrollHeight + 'px'
  }
  el.addEventListener('click', e => {
    const self = e.currentTarget;
    const control = self.querySelector('.accordion__control');
    const content = self.querySelector('.accordion__content');

    self.classList.toggle('open')
    if(self.classList.contains('open')){
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px'
    }else{
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null
    }
  });
});