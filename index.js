var num1 = Math.random();
num1 = Math.floor((num1*6) + 1);
var num2 = Math.random();
num2 = Math.floor((num2*6) + 1);
console.log(num1 + " " + num2);

switch(num1){
  case 1:
    window.onload = addLinkLeft("images/one.png");
    break;
  case 2:
    window.onload = addLinkLeft("images/two.png");
    break;
  case 3:
    window.onload = addLinkLeft("images/three.png");
    break;
  case 4:
    window.onload = addLinkLeft("images/four.png");
    break;
  case 5:
    window.onload = addLinkLeft("images/five.png");
    break;
  case 6:
    window.onload = addLinkLeft("images/six.png");
    break;
}

switch(num2){
  case 1:
    window.onload = addLinkRight("images/one.png");
    break;
  case 2:
    window.onload = addLinkRight("images/two.png");
    break;
  case 3:
    window.onload = addLinkRight("images/three.png");
    break;
  case 4:
    window.onload = addLinkRight("images/four.png");
    break;
  case 5:
    window.onload = addLinkRight("images/five.png");
    break;
  case 6:
    window.onload = addLinkRight("images/six.png");
    break;
}

function addLinkLeft(link){
  document.getElementById('ldice').setAttribute("src", link);
}

function addLinkRight(link){
  document.getElementById('rdice').setAttribute("src", link);
}

if (num1 == num2) {
  window.onload = function(){document.getElementsByTagName('h1')[0].innerHTML = "Tie!"};
}
else if (num1 > num2) {
  window.onload = function(){document.getElementsByTagName('h1')[0].innerHTML = "Player 1 Win!"};
}
else {
  window.onload = function(){document.getElementsByTagName('h1')[0].innerHTML = "Player 2 Win!"};
}
