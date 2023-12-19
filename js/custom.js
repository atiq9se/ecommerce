
// slider part js
var mySwiperSlider = new Swiper(".mySwiperSlider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Deal swiper js
var mySwiperDeal = new Swiper(".mySwiperDeal", {
    slidesPerView: 6,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 25,
      }
    },
});

// Latest product swiper js
var mySwiperDeal = new Swiper(".mySwiperLatest", {
    slidesPerView: 5,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
      }
    },
});

// Miss swiper js
var mySwiperMiss = new Swiper(".mySwiperMiss", {
    slidesPerView: 6,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 25,
      }
    },
});

// Product one js
var mySwiperProductOne = new Swiper(".mySwiperProductOne", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Product two js
var mySwiperProductTwo = new Swiper(".mySwiperProductTwo", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Product three js
var mySwiperProductThree = new Swiper(".mySwiperProductThree", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Miss swiper js
var mySwiperPartner = new Swiper(".mySwiperPartner", {
  slidesPerView: 6,
  spaceBetween: 25,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 25,
    }
  },
});

//Instagram swiper js
var mySwiperInstagram = new Swiper(".mySwiperInstagram", {
  slidesPerView: 6,
  spaceBetween:0,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 0,
    }
  },
});


const navSlide = ()=>{ 
  const navItem = document.querySelector('.navItem');
  const navLinks = document.querySelectorAll('.navItem li');
  const navLink = document.querySelector('.navItem li a');
  const navCross = document.querySelector('.navCross');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', ()=>{
      // navsale class add
      navItem.classList.toggle('navsale');
      // navlinks loop
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation="";
          }else{
              link.style.animation = `navLinkFade .5s ease forwards ${index / 5+.3}s`;
          } 
      });
      // cross class add
      burger.classList.toggle('cross');
  });


  //  navcross part
  navCross.addEventListener('click', ()=>{
        // navsale class add
      navItem.classList.toggle('navsale');
      // navlinks loop
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation="";
          }else{
              link.style.animation = `navLinkFade .5s ease forwards ${index / 5+.3}s`;
          } 
      });
      // cross class add
      burger.classList.toggle('cross');
  });
}
navSlide();