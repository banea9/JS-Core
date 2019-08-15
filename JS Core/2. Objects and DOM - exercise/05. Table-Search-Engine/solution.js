function solve() {
   let searchBtn = document.getElementById('searchBtn');
   let tableDataElements = document.getElementsByTagName('td');
   searchBtn.addEventListener('click', function() {
      let input = document.getElementById('searchField');
      for(let i = 1; i < tableDataElements.length; i++) {
         if(tableDataElements[i].textContent.match(input.value)) {
            tableDataElements[i].parentNode.classList.add('select')
         }
      }
      input.value = ''
   })
   

   
}
