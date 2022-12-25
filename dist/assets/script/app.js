const navSearch = document.querySelector('.navSearch');
const faq = document.querySelectorAll('.faqLi');
const faqMessage =  document.querySelectorAll('.faqs-message');

if(navSearch != null){
  navSearch.addEventListener('click', ()=> {
    document.querySelector('.navSearchWrapper > input').style.opacity = 1;
  })
}

for(let i = 0; i < faq.length; i++){
  faq[i].addEventListener('click', () => {
    faqMessage.forEach((el, index) => {
      if(i == index){
        el.classList.toggle('hidden')
      }
    })
  })
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});