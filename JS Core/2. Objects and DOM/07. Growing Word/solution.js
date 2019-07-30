function growingWord() {
  let paragraphToChange = document.querySelector('#exercise p');
  console.log(paragraphToChange);
  let clicks = 0;
  if(clicks % 3 === 0) {
    paragraphToChange.style.color = 'blue';
  }
  else if(clicks % 2 === 0) {
    paragraphToChange.style.color = 'green';
  }
  else {
    paragraphToChange.style.color = 'red'
  }
  clicks++;
  paragraphToChange.style.fontSize = `${clicks * 2}px`
}