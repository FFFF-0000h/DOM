//store the document for id in const "element"
const element = document.getElementById("container");
let paragraph = document.createElement('p');
let node = document.createTextNode("Hey I'm Red!");
paragraph.appendChild(node);
element.appendChild(paragraph);
paragraph.style.color = 'red';
let header = document.createElement("h3");
let nodeh = document.createTextNode("I'm a blue h3!")
header.appendChild(nodeh);
element.appendChild(header);
header.style.color = 'blue';
const deev = document.createElement("div");
deev.setAttribute('style', 'border: black; background: pink');
let headerd = document.createElement("h1");
let nodehh = document.createTextNode("I'm in a div");
headerd.appendChild(nodehh);
deev.appendChild(headerd);
let para = document.createElement("p");
var parah = document.createTextNode("ME TOO!");
deev.appendChild(parah);
element.appendChild(deev);
