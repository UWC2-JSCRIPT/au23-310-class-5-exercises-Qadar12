// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector("body");

const bodyMain = body.children[0];
console.log(bodyMain);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector("ul");

const parentMain = ul.parentElement;

const grandBody = parentMain.parentElement;

console.log(grandBody);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
// start with p, go to the parent main, move down to ul element, then the 3rd

const p = document.querySelector("p");

const toTheParent = p.parentElement;

const ulEm = toTheParent.children[1];

const thirdUl = ulEm.children[2];

console.log(thirdUl);
