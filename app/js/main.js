const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    effect: "fade",
});

const tabsItem = document.querySelectorAll('.tabs__btn-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');

tabsItem.forEach(function (element) {
    element.addEventListener('click', openTabContent)
});

function openTabContent(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;
    console.log(tabTarget);

    tabsItem.forEach(function (element) {
        element.classList.remove('tabs__btn-item_active');
    });

    tabTarget.classList.add('tabs__btn-item_active');

    tabsContent.forEach(function (element) {
        element.classList.remove('tabs__content-item_active')
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item_active');
}

const menuBtn = document.querySelector('.nav-menu__btn');
const menu = document.querySelector('.nav-menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-menu__list_active');
});

const navLinks = document.querySelectorAll('.nav-menu__list-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {

  const linkPath = link.getAttribute('href');

  if (currentPath.endsWith(linkPath)) {
    link.classList.add('nav-menu__list-link_active');
  }
});