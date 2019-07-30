function solve() {
  let divElement = document.getElementsByClassName('link-1');
  console.log(divElement)
  for(const site of divElement) {
    site.addEventListener('click', function () {
      let paragraphElement = this.getElementsByTagName('p')[0];
      let tokens = paragraphElement.textContent.split(' ');
      let siteCounter = tokens[1];
      siteCounter++
      paragraphElement.textContent = `${tokens[0]} ${siteCounter} ${tokens[2]}`
    })
  }
}