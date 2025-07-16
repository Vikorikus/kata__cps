var swiper = null;
function onSwiper() {
  if (window.innerWidth <= 768) {
    if (!swiper) {
      swiper = new Swiper(".brands", {
        slidesPerView: "1.3",
        spaceBetween: "0",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          400: {
            slidesPerView: "1.6",
          },
          500: {
            slidesPerView: "1.8",
          },
          600: {
            slidesPerView: "2.2",
          },
          700: {
            slidesPerView: "2.5",
          },
          767: {
            slidesPerView: "2.8",
          },
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
    }
  }
}

onSwiper();
window.addEventListener("resize", onSwiper);

var brandsItem = document.querySelectorAll(".brands__item");

function showCards() {
  var windowWidth = window.innerWidth;
  var visibleCards;
  if (windowWidth >= 1120) {
    visibleCards = 8;
  } else if (windowWidth >= 768) {
    visibleCards = 6;
  } else {
    visibleCards = 11;
  }

  for (var i = 0; i < brandsItem.length; i++) {
    if (i < visibleCards) {
      brandsItem[i].classList.remove("hidden");
    } else {
      brandsItem[i].classList.add("hidden");
    }
  }
}
showCards();
window.addEventListener("resize", showCards);

var btn = document.querySelector(".btn__action");
var isExpand = false;
btn.addEventListener("click", function () {
  if (isExpand) {
    showCards();
    btn.textContent = "Показать всё";
    btn.classList.toggle("btn__action--rotate");
    isExpand = false;
  } else {
    for (var i = 0; i < brandsItem.length; i++) {
      brandsItem[i].classList.remove("hidden");
    }
    btn.textContent = "Скрыть";
    btn.classList.toggle("btn__action--rotate");
    isExpand = true;
  }
});
