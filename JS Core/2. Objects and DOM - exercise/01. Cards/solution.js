function solve() {
   let cards = Array.from(document.getElementsByTagName('img'));
   cards.map(card => card.addEventListener('click', function (e) {
      let spanElements = document.getElementsByTagName('span')
      e.currentTarget.src = 'images/whiteCard.jpg';
      if (e.currentTarget.parentNode.id === 'player1Div') {
         spanElements[0].textContent = e.currentTarget.name;
      }
      else {
         spanElements[2].textContent = e.currentTarget.name;
      }
      if (spanElements[0].textContent && spanElements[2].textContent) {
         let winner;
         let looser;

         if (+spanElements[0].textContent > +spanElements[2].textContent) {
            winner = document.querySelector(`#player1Div img[name='${spanElements[0].textContent}']`);
            looser = document.querySelector(`#player2Div img[name='${spanElements[2].textContent}']`);
         } else {
            winner = document.querySelector(`#player2Div img[name='${spanElements[2].textContent}']`);
            looser = document.querySelector(`#player1Div img[name='${spanElements[0].textContent}']`);
         }

         winner.style.border = '2px solid green';
         looser.style.border = '2px solid darkred';

         document.getElementById('history').textContent += `[${spanElements[0].textContent} vs ${spanElements[2].textContent}] `;

         spanElements[0].textContent = "";
         spanElements[2].textContent = "";
      }


   }))
}