function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  function camelOrPascal(text, namingConvention) {
    let splitText = text.toLowerCase().split(' ').filter(el => el !== '');
    let result = '';
    if (namingConvention === 'Pascal Case') {
      for (let word of splitText) {
        if (word[0] !== word[0].toUpperCase()) {
          word = word.replace(word[0], word[0].toUpperCase());
        }
        result += word;
      }
    } else if (namingConvention === 'Camel Case') {
      result += splitText[0];
      for (let i = 1; i < splitText.length; i++) {
        if (splitText[i][0] !== splitText[i][0].toUpperCase()) {
          splitText[i] = splitText[i].replace(splitText[i][0], splitText[i][0].toUpperCase());
        }
        result += splitText[i];
      }
    } else {
      result = 'Error!'
    }
    document.getElementById('result').textContent = result;
  }
  camelOrPascal(text, namingConvention)
}