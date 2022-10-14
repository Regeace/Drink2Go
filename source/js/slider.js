const sliderElement = document.querySelector('.slider');
// const sliderButtonElements = sliderElement.querySelectorAll('.slider-button');
const sliderLeftButtonElement = sliderElement.querySelector('.slider-button--left');
const sliderRightButtonElement = sliderElement.querySelector('.slider-button--right');
const sliderSmallButtonElements = sliderElement.querySelectorAll('.small-buttons__button');

const searchSliderIndex = (element) => element.findIndex((element) => element.classList.contains ('slider__container--current'));

const changeCurrentSliderNumber = (element, elementsArray) => {
  const currentSliderElement = elementsArray.find((element) => element.classList.contains('slider__container--current'));

  currentSliderElement.classList.remove('slider__container--current');
  elementsArray[element].classList.add('slider__container--current');
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
