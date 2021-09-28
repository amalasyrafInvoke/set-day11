var boxy = document.getElementById('boxy');
var boxyPos = {
  x: 0,
  y: 0,
};

var keyList = [];
var aud1 = document.getElementById('aud1');
var aud2 = document.getElementById('aud2');
var aud3 = document.getElementById('aud3');
var aud4 = document.getElementById('aud4');
var aud5 = document.getElementById('aud5');

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

function keyPressed(evt) {
  // console.log(evt);
  keyList[evt.keyCode] = true;
  // console.log(keyList);

  if (keyList[39]) {
    console.log('go right');
    boxyPos.x += 5;
  }
  if (keyList[37]) {
    console.log('go left');
    boxyPos.x -= 5;
  }
  if (keyList[40]) {
    console.log('go down');
    boxyPos.y += 5;
  }

  if (keyList[38]) {
    console.log('go up');
    boxyPos.y -= 5;
  }

  // switch (evt.keyCode) {
  //   case 39:
  //     boxyPos.x += 5;
  //     break;
  //   case 37:
  //     boxyPos.x -= 5;
  //     break;
  //   case 38:
  //     boxyPos.y -= 5;
  //     break;
  //   case 40:
  //     boxyPos.y += 5;
  //     break;
  // }

  boxy.style.left = `${boxyPos.x}px`;
  boxy.style.top = `${boxyPos.y}px`;
}

function keyReleased(evt) {
  delete keyList[evt.keyCode];
}
