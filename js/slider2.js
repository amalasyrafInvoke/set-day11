var sliderHolder = document.getElementById('slider-holder');
var rightBtn = document.getElementById('right-btn');
var leftBtn = document.getElementById('left-btn');
var sliderPos = 0;

var sliderArrayList = [
  {
    id: 1,
    src: './images/image1.webp',
    name: 'A volcano',
    text: 'Feel the heat',
  },
  {
    id: 2,
    src: './images/image2.webp',
    name: 'Hello There',
    text: 'Enjoy your date!',
  },
  {
    id: 3,
    src: './images/image3.webp',
    name: 'Sunset',
    text: 'Make the most out of the view',
  },
  {
    id: 4,
    src: './images/image4.webp',
    name: 'The Latest IPad',
    text: 'Another brilliant product by Apple',
  },
];

for (var i = 0; i < sliderArrayList.length; i++) {
  var createSliderEl = document.createElement('div');
  createSliderEl.classList.add('slide');
  createSliderEl.setAttribute('id', `slide${sliderArrayList[i].id}`);
  sliderHolder.appendChild(createSliderEl);
  createSliderEl.style.backgroundImage = `url(${sliderArrayList[i].src})`;

  var createSliderTitle = document.createElement('h1');
  createSliderTitle.classList.add('slider-title');
  createSliderTitle.innerHTML = sliderArrayList[i].name;
  var createSliderText = document.createElement('p');
  createSliderText.classList.add('slider-text');
  createSliderText.innerHTML = sliderArrayList[i].text;

  createSliderEl.appendChild(createSliderTitle);
  createSliderEl.appendChild(createSliderText);
}

var maxSliderHolderWidth = 100 * sliderArrayList.length;
sliderHolder.style.width = `${maxSliderHolderWidth}vw`;

rightBtn.addEventListener('click', () => {
  moveSlider(-100, 'right');
});
leftBtn.addEventListener('click', () => {
  moveSlider(100, 'left');
});

function moveSlider(val, direction) {
  if (
    sliderPos === -(maxSliderHolderWidth - 100) &&
    direction === 'right'
  ) {
    sliderHolder.style.transform = `translateX(${0}vw)`;
    sliderPos = 0;
    return;
  }
  if (sliderPos === 0 && direction === 'left') {
    sliderHolder.style.transform = `translateX(${
      -(maxSliderHolderWidth - 100)
    }vw)`;
    sliderPos = -(maxSliderHolderWidth - 100);
    return;
  }
  sliderPos += val;
  sliderHolder.style.transform = `translateX(${sliderPos}vw)`;

  console.log(sliderPos);
}

setInterval(() => {
  if (sliderPos === -(maxSliderHolderWidth - 100)) {
    sliderHolder.style.transform = `translateX(${0}vw)`;
    sliderPos = 0;
    return;
  }
  sliderPos += -100;
  sliderHolder.style.transform = `translateX(${sliderPos}vw)`;
}, 3000);
