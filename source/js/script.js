// Меню навигации, интерактивная кнопка

const openNavButton = document.querySelector('.navigation-toggle');
const changeNavButtonImage = document.querySelector('.navigation-toggle__image');
const mainNavigationShow = document.querySelector('.main-navigation__list');

document.querySelector('.navigation-toggle').classList.remove('navigation-toggle--nojs');
document.querySelector('.main-navigation__list').classList.remove('main-navigation__list--nojs');
document.querySelector('.navigation-toggle__image').classList.remove('navigation-toggle__image--nojs');

const toggleNavButton = () => {
  changeNavButtonImage.classList.toggle('navigation-toggle__image--open');
  mainNavigationShow.classList.toggle('main-navigation__list--closed');
}

openNavButton.addEventListener('click', toggleNavButton)

// Слайдер

const sliderElement = document.querySelector('.slider');
const sliderLeftButtonElement = sliderElement.querySelector('.slider-button--left');
const sliderRightButtonElement = sliderElement.querySelector('.slider-button--right');
const sliderSmallButtonElements = sliderElement.querySelectorAll('.small-buttons__button');

const searchSliderIndex = (element) => element.findIndex((element) => element.classList.contains ('slider__container--current'));

const changeCurrentSliderNumber = (element, elementsArray) => {
  const currentSliderElement = elementsArray.find((element) => element.classList.contains('slider__container--current'));
  const smallButtons = Array.from(sliderElement.querySelectorAll('.small-buttons__button'));
  const currentSmallButton = smallButtons.find((element) => element.classList.contains ('small-buttons__button--current'));

  currentSmallButton.classList.remove('small-buttons__button--current');
  currentSliderElement.classList.remove('slider__container--current');
  elementsArray[element].classList.add('slider__container--current');
  smallButtons[element].classList.add('small-buttons__button--current');
}

const onSliderLeftButtonClick = () => {
  const sliderContainerElements = Array.from(sliderElement.querySelectorAll('.slider__container'));
  let newSliderNumber = searchSliderIndex(sliderContainerElements) - 1;

  if (newSliderNumber < 0) {
    newSliderNumber = sliderContainerElements.length - 1;
  }

  changeCurrentSliderNumber(newSliderNumber, sliderContainerElements);
};

const onSliderRightButtonClick = () => {
  const sliderContainerElements = Array.from(sliderElement.querySelectorAll('.slider__container'));
  let newSliderNumber = searchSliderIndex(sliderContainerElements) + 1;

  if (newSliderNumber > sliderContainerElements.length - 1) {
    newSliderNumber = 0;
  }

  changeCurrentSliderNumber(newSliderNumber, sliderContainerElements);
};

const onChangeSliderSmallButtonClick = (evt) => {
  if (evt.target.classList.contains('small-buttons__button--current')) {
    return;
  }

  const smallButtons = Array.from(sliderElement.querySelectorAll('.small-buttons__button'));
  const currentSmallButtonIndex = smallButtons.findIndex((element) => element.classList.contains ('small-buttons__button--current'));

  smallButtons[currentSmallButtonIndex].classList.remove('small-buttons__button--current');
  evt.target.classList.add('small-buttons__button--current');

  const smallButtonsNew = Array.from(sliderElement.querySelectorAll('.small-buttons__button'));
  const newSliderNumber = smallButtonsNew.findIndex((element) => element.classList.contains('small-buttons__button--current'));
  const sliderContainerElements = Array.from(sliderElement.querySelectorAll('.slider__container'));

  changeCurrentSliderNumber(newSliderNumber, sliderContainerElements);
};

sliderLeftButtonElement.addEventListener('click', onSliderLeftButtonClick);
sliderRightButtonElement.addEventListener('click', onSliderRightButtonClick);

sliderSmallButtonElements.forEach((element) => {
  element.addEventListener('click', onChangeSliderSmallButtonClick)
});

// Карта

document.querySelector('.map__static-image').classList.toggle('map__static-image--nojs');
document.querySelector('.map__container').classList.toggle('map__container--nojs');
