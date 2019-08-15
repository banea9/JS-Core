function solve() {
    let questionSections = document.getElementsByTagName('section');
    let counter = 0;
    let correctAnswersCounter = 0;
    let answers = Array.from(document.querySelectorAll('.answer-text'));
    answers.map(el => el.addEventListener('click', function () {
        counter++;
        let correctAnswersArr = ['onclick','JSON.stringify()', 'A programming API for HTML and XML documents']
        if(correctAnswersArr.includes(this.textContent)) {
            correctAnswersCounter++;
        }
        if(counter < 3){
            questionSections[counter - 1].style.display = 'none';
            questionSections[counter].style.display = 'block';
        }
        else {
            questionSections[counter - 1].style.display = 'none';
            document.getElementById('results').style.display = 'block'
            if(correctAnswersCounter === 3) {
                document.querySelector('li.results-inner h1').textContent = "You are recognized as top JavaScript fan!";
            }
            else {
                document.querySelector('li.results-inner h1').textContent = `You have ${correctAnswersCounter} right answers`
            }
        }
  
    }))
}
