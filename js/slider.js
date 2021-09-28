var rightBtn = document.getElementById('right-btn');
var leftBtn = document.getElementById('left-btn');
var sliderHolder = document.getElementById('slider-holder');
var slidePos = 1;
var sliderPos = 0;

rightBtn.addEventListener('click', () => {
  moveSlider(-100, 'right');
});
leftBtn.addEventListener('click', () => {
  moveSlider(100, 'left');
});

function moveSlider(val, direction) {
  if (sliderPos === -200 && direction === 'right') {
    sliderHolder.style.transform = `translateX(${0}vw)`;
    sliderPos = 0;
    return;
  }
  if (sliderPos === 0 && direction === 'left') {
    sliderHolder.style.transform = `translateX(${-200}vw)`;
    sliderPos = -200;
    return;
  }
  sliderPos += val;
  sliderHolder.style.transform = `translateX(${sliderPos}vw)`;

  console.log(sliderPos);
}

setInterval(() => {
  if (sliderPos === -200) {
    sliderHolder.style.transform = `translateX(${0}vw)`;
    sliderPos = 0;
    return;
  }
  sliderPos += -100;
  sliderHolder.style.transform = `translateX(${sliderPos}vw)`;
}, 3000);