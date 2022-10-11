let openNavButton = document.querySelector('.navigation-toggle');
let changeNavButtonImage = document.querySelector('.navigation-toggle__image');
let mainNavigationShow = document.querySelector('.main-navigation__list');

document.querySelector('.navigation-toggle').classList.remove('navigation-toggle--nojs');
document.querySelector('.main-navigation__list').classList.remove('main-navigation__list--nojs');
document.querySelector('.navigation-toggle__image').classList.remove('navigation-toggle__image--nojs');

openNavButton.onclick = function() {
  changeNavButtonImage.classList.toggle('navigation-toggle__image--open');
  mainNavigationShow.classList.toggle('main-navigation__list--closed');
}
