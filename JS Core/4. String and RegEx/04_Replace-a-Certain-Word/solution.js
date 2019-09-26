function solve() {
    let wordToReplaceWith = document.getElementById('word').value;
    let text = document.getElementById('text').value;

    function replaceWord(wordToReplaceWith, text) {
        let jsonText = JSON.parse(text);

        for (let string of jsonText) {
            let regexPattern = /programming/gmi;
            let ifMatch = regexPattern.exec(string)
            if (ifMatch) {
                string = string.replace(ifMatch, wordToReplaceWith);
            }

            let p = document.createElement('p');
            p.textContent = string;
            document.getElementById('result').appendChild(p);
        }

    }
   
    

    replaceWord(wordToReplaceWith, text);
}