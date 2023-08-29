const switchButtons = document.querySelector('.galery-controll_switch');
const sliderItems = document.querySelector('.slider-items');

const total = document.querySelector('.total');
const current = document.querySelector('.current');



// const sliderMaxWidth = 770;
const imgArray = [
  'assets/headline.png',
  'assets/about1.png',
  'assets/headline.png',
];

const sliderWidth = imgArray.length * 100;
const percentsMove = sliderWidth / imgArray.length;
let count = 0;

function onForward() {
  count = count === imgArray.length - 1 ? imgArray.length - 1 : count + 1;
  sliderItems.style.marginLeft = `-${count * percentsMove}%`;
  current.textContent = count + 1;
};
function onBack() {
  count = count === 0 ? 0 : count - 1;
  sliderItems.style.marginLeft = `-${count * percentsMove}%`;
  current.textContent = count + 1;
};
function onSwitch(e) {
  if (e.target.classList.contains('slider-forward')) {
    onForward();
  };
  if (e.target.classList.contains('slider-back')) {
    onBack();
  }
}

// forwardBtn.addEventListener('click',onForward);
// backBtn.addEventListener('click', onBack);

switchButtons.addEventListener('click', onSwitch)

~function () {
  sliderItems.style.width = `${sliderWidth}%`;
  total.textContent = imgArray.length;
  current.textContent = count + 1;
  imgArray.forEach(img => {
    const imageElem = `
      <div class="image-wrapper">
        <img class="sliderImg" src="${img}" alt="image">
      </div>
    `;
    sliderItems.innerHTML += imageElem;
  });
}();