//store the document for id in const "element"
const element = document.getElementById("container");
//store the doc for paragraph in variable container paragraph
let paragraph = document.createElement('p');
//store the doc for creating a paragraph text in variable node
let node = document.createTextNode("Hey I'm Red!");
//append (store, attach) the node variable in the paragraph variable making it a parent 
paragraph.appendChild(node);
//then append (store, attach) the parent paragraph into the ID container stored in const "element" 
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
