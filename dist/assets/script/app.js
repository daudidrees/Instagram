const navSearch = document.querySelector('.navSearch');
const faq = document.querySelectorAll('.faqLi');
const faqMessage =  document.querySelectorAll('.faqs-message');
const headerBtn = document.getElementById('headerBtn')
const headerMbl = document.querySelector('.headerBtn');

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

if(headerBtn != null) {
  headerBtn.addEventListener('click', function(){
    document.getElementById('dropdown').classList.toggle('hidden')
  })
}

if(headerMbl != null) {
  headerMbl.addEventListener('click', function(){
    document.querySelector('.mbl-dropdown').classList.toggle('hidden')
  })
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    }
  }
});