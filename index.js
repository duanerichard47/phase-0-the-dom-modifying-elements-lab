// Write your code here!
let elementMainRmove = document.querySelector('#main')
elementMainRmove.remove()

let newHeader = document.createElement("h1");
let docBody = document.querySelector('body');
docBody.appendChild(newHeader)
newHeader.setAttribute('id','victory');

newHeader.textContent = "Duane is the champion";