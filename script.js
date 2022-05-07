// Challenge 1: Your Age in Days

function ageInDays() {
  var birthYear = prompt('What year were you born...Good friend?');
  var ageInDayss = (2022-birthYear) * 365;
  var h1 = document.createElement ('h1');
  var textAnswer = document.createTextNode ('You are' + '\n' + ageInDayss  + '\n'  + '\n' + 'days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

// Challenge Day 2: Generete Cat
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-generator');
  image.src="./images/cat-animated-gif-6.gif";
  div.appendChild(image);
}
