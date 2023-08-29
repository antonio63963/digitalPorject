const switchButtons = document.querySelector('.galery-controll_switch');
const sliderItems = document.querySelector('.slider-items');

const total = document.querySelector('.total');
const current = document.querySelector('.current');

const imgArray = [
  'assets/headline.png',
  'assets/headline.png',
  'assets/headline.png',
];

const sliderWidth = imgArray.length * 100;
const percentsMove = sliderWidth / imgArray.length;
let count = 0;

function setNumberSlide() {
  current.textContent = set2Digit(count + 1);
}

function set2Digit(num) {
  return num < 10 ? `0${num}` : num;
}

function onForward() {
  count = count === imgArray.length - 1 ? imgArray.length - 1 : count + 1;
  sliderItems.style.marginLeft = `-${count * percentsMove}%`;
  setNumberSlide();
};
function onBack() {
  count = count === 0 ? 0 : count - 1;
  sliderItems.style.marginLeft = `-${count * percentsMove}%`;
  setNumberSlide();
};
function onSwitch(e) {
  if (e.target.classList.contains('slider-forward')) {
    onForward();
  };
  if (e.target.classList.contains('slider-back')) {
    onBack();
  }
}

switchButtons.addEventListener('click', onSwitch)

~function () {
  sliderItems.style.width = `${sliderWidth}%`;
  total.textContent = set2Digit(imgArray.length);
  setNumberSlide()
  setNumberSlide();
  imgArray.forEach(img => {
    const imageElem = `
      <div class="image-wrapper">
        <img class="sliderImg" src="${img}" alt="image">
      </div>
    `;
    sliderItems.innerHTML += imageElem;
  });
}();