function solve() {
  let text = document.getElementById('text').value;
  let result = document.getElementById('result');
  function asciiDecoder(text) {
    let splitText = text.split(' ').filter(el => el !== '');
    let output = '';
    for(let word of splitText) {
      if(Number(word)) {
        output += String.fromCharCode(word);
      }
      else {
        let charToNumber = [];
        for(let i = 0; i < word.length; i++) {
          charToNumber.push(word[i].charCodeAt(0))
        }
        let newEl = document.createElement('p');
        newEl.textContent = charToNumber.join(' ');
        result.appendChild(newEl)

      }
    }
    let newEl = document.createElement('p');
    newEl.textContent = output;
    result.appendChild(newEl)
  }
  asciiDecoder(text)
}