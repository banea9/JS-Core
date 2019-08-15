function solve() {
   let buttons = Array.from(document.getElementsByClassName('add-product'));
   let resultField = document.getElementsByTagName('textarea');
   let productArr = [];
   let price = 0;
   for (let button of buttons) {
      button.addEventListener('click', function (event) {
         let product = event.target.parentNode.parentNode
         let productName = product.childNodes[3].childNodes[1].textContent;
         let productPrice = Number(product.childNodes[7].textContent).toFixed(2);
         resultField[0].textContent += `Added ${productName} for ${productPrice} to the cart.` + '\n';
         if (!(productArr.includes(productName))) {
            productArr.push(productName);
         }
         price += Number(productPrice);
      })
   }
   let checkout = document.getElementsByClassName('checkout');
   checkout[0].addEventListener('click', function () {
      for(let button of buttons) {
         button.disabled = true;
      }
      checkout[0].disabled = true;
      resultField[0].textContent += `You bought ${productArr.join(', ')} for ${price.toFixed(2)}`
   })
}