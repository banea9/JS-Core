function solve() {
  let generateButton = document.getElementsByTagName('button')[0];
  let buyButton = document.getElementsByTagName('button')[1];
  let nameArray = [];
  let priceArray = [];
  let decFactorArray = [];
  generateButton.addEventListener('click', function () {
    let input = document.getElementsByTagName('textarea')[0];
    let objectInput = JSON.parse(input.value);
    for (let object of objectInput) {
      let table = document.getElementsByTagName('tbody')[0];
      let newRow = document.createElement('tr');
      for (let [key, value] of Object.entries(object)) {
        let newTableData = document.createElement('td');

        if (key === 'img') {
          let newElement = document.createElement('img');
          newElement.src = value;
          newTableData.appendChild(newElement)
        }
        else {
          let newElement = document.createElement('p');
          newElement.textContent = value;
          newTableData.appendChild(newElement)
        }
        newRow.appendChild(newTableData);
        if (key === 'decFactor') {
          let inputTd = document.createElement('td');
          let inputData = document.createElement('input');
          inputData.type = 'checkbox';
          inputTd.appendChild(inputData)
          newRow.appendChild(inputTd)
        }

      }
      table.appendChild(newRow)


    }

  })
  buyButton.addEventListener('click', function () {
    let output = document.getElementsByTagName('textarea')[1];
    let checkboxes = document.getElementsByTagName('input');
    let checkboxElement = Array.from(checkboxes);
    for (let checkbox of checkboxElement) {
      if (checkbox.checked === true) {
        let furniturePiece = checkbox.parentNode.parentNode;
        nameArray.push(furniturePiece.childNodes[1].childNodes[0].textContent);
        priceArray.push(Number(furniturePiece.childNodes[2].childNodes[0].textContent));
        decFactorArray.push(Number(furniturePiece.childNodes[3].childNodes[0].textContent));
      }
    }
    let price = (priceArray.reduce((acc, curr) => acc + curr)).toFixed(2);
    let decFactor = decFactorArray.reduce((acc, curr) => acc + curr) / decFactorArray.length;
    
    output.textContent += `Bought funiture ${nameArray.join(', ')}` + '\n' + `Total price: ${price}` + '\n' + `Average decoration factor: ${decFactor}`
  })
}


