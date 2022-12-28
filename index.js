// Write your code here!
document.querySelector('main').remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent ="Duane is the champion";
//newHeader.innerHTML = "<h1>Duane is the champion</h1>";

document.body.append(newHeader);




