// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

const aRefElement = document.createElement("a");
aRefElement.href = " ";

const arefText = document.createTextNode("Buy Now");

aRefElement.appendChild(arefText);

const body = document.getElementsByTagName("main")[0];

body.appendChild(aRefElement);
aRefElement.id = "cta";

// Access (read) the data-color attribute of the <img>,
// log to the console

const img = document.getElementsByTagName("img")[0];

const colorImg = img.dataset.color;

console.log(colorImg);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

const listItems = document.getElementsByTagName("li")[2];
listItems.className = "highlight";
console.log(listItems);

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const lastPara = document.querySelector("p");

// not clear if I should remove p, went went with removing the content
lastPara.innerHTML = "";
