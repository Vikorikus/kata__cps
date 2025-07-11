var swiper = null;

function onSwiper() {
  if (window.innerWidth <= 768) {
    if (!swiper) {
      const totalW = window.innerWidth;
      const buttonW = 272;
      const gap = 16;
      const k = (totalW + gap) / (buttonW + gap);

      swiper = new Swiper(".brands", {
        slidesPerView: k,
        spaceBetween: gap,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
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
    btn.classList.remove("btn__action--rotate");
    isExpand = false;
  } else {
    for (var i = 0; i < brandsItem.length; i++) {
      brandsItem[i].classList.remove("hidden");
    }
    btn.textContent = "Скрыть";
    btn.classList.add("btn__action--rotate");
    isExpand = true;
  }
});
