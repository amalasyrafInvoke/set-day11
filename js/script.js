var keyList = {};
var prevButton = '';
var speaker = document.getElementById('speaker');
var aud1 = document.getElementById('aud1');
var aud2 = document.getElementById('aud2');
var aud3 = document.getElementById('aud3');
var aud4 = document.getElementById('aud4');
var aud5 = document.getElementById('aud5');
var aud6 = document.getElementById('aud6');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');

var innerBtn1 = document.getElementById('inner-btn1');
var innerBtn2 = document.getElementById('inner-btn2');
var innerBtn3 = document.getElementById('inner-btn3');
var innerBtn4 = document.getElementById('inner-btn4');
var innerBtn5 = document.getElementById('inner-btn5');
var innerBtn6 = document.getElementById('inner-btn6');

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

function keyPressed(evt) {
  keyList[evt.keyCode] = true;
  if (keyList[65]) {
    console.log('Play Sound 1');
    aud1.play();
    prevButton = 'btn1';
    btn1.classList.add('clickAniBtn');
    innerBtn1.style.boxShadow = '7px 6px 28px 1px rgb(234, 58, 75, 0.24)';
  }
  if (keyList[87]) {
    console.log('Play Sound 2');
    aud2.play();
    btn2.classList.add('clickAniBtn');
    innerBtn2.style.boxShadow = '7px 6px 28px 1px rgb(255, 125, 46, 0.24)';
  }
  if (keyList[83]) {
    console.log('Play Sound 3');
    aud3.play();
    btn3.classList.add('clickAniBtn');
    innerBtn3.style.boxShadow = '7px 6px 28px 1px rgb(254, 197, 43, 0.24)';
  }
  if (keyList[68]) {
    console.log('Play Sound 4');
    aud4.play();
    btn4.classList.add('clickAniBtn');
    innerBtn4.style.boxShadow = '7px 6px 28px 1px rgb(46, 179, 74, 0.24)';
  }
  if (keyList[81]) {
    console.log('Play Sound 5');
    aud5.play();
    btn5.classList.add('clickAniBtn');
    innerBtn5.style.boxShadow = '7px 6px 28px 1px rgb(30, 125, 255, 0.24)';
  }
  if (keyList[69]) {
    console.log('Play Sound 6');
    aud6.play();
    btn6.classList.add('clickAniBtn');
    innerBtn6.style.boxShadow = '7px 6px 28px 1px rgb(123, 92, 216, 0.24)';
  }
}

function keyReleased(evt) {
  delete keyList[evt.keyCode];
  console.log(evt.keyCode);
  
  // aud1.load();
  // aud2.load();
  // aud3.load();
  // aud4.load();
  // aud5.load();
  // aud6.load();
  
  btn1.classList.remove('clickAniBtn');
  btn2.classList.remove('clickAniBtn');
  btn3.classList.remove('clickAniBtn');
  btn4.classList.remove('clickAniBtn');
  btn5.classList.remove('clickAniBtn');
  btn6.classList.remove('clickAniBtn');

  innerBtn1.style.boxShadow = '7px 6px 10px 1px rgba(8, 7, 7, 0.24)';
  innerBtn2.style.boxShadow = '7px 6px 10px 1px rgba(8, 7, 7, 0.24)';
  innerBtn3.style.boxShadow = '7px 6px 10px 1px rgba(8, 7, 7, 0.24)';
  innerBtn4.style.boxShadow = '7px 6px 10px 1px rgba(8, 7, 7, 0.24)';
  innerBtn5.style.boxShadow = '7px 6px 10px 1px rgba(8, 7, 7, 0.24)';
  innerBtn6.style.boxShadow = '7px 6px 10px 1px rgba(8, 7, 7, 0.24)';
}

// 6 rows, start dgn 3, max 8

for (var i = 0; i < 6; i++) {
  var createDiv = document.createElement('div');
  createDiv.classList.add('line-dot');
  speaker.appendChild(createDiv);

  for (var j = 1; j <= i + 7; j++) {
    var createDot = document.createElement('div');
    createDot.classList.add('dot');

    createDiv.appendChild(createDot);
  }
}

for (var i = 5; i >= 0; i--) {
  var createDiv = document.createElement('div');
  createDiv.classList.add('line-dot');
  speaker.appendChild(createDiv);

  for (var j = 1; j <= i + 7; j++) {
    var createDot = document.createElement('div');
    createDot.classList.add('dot');

    createDiv.appendChild(createDot);
  }
}