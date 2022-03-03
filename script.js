//store the document for id in const "element".
const element = document.getElementById("container");

//store the doc for new paragraph in variable container paragraph.
let paragraph = document.createElement('p');

//store the doc for new paragraph text in variable node.
let node = document.createTextNode("Hey I'm Red!");

//append (store, attach) the node variable in the paragraph variable making it a parent. 
paragraph.appendChild(node);

//then append (store, attach) the parent paragraph into the ID container stored in const "element". 
element.appendChild(paragraph);

//apply color to the paragraph using the (.style.color).
paragraph.style.color = 'red';

//store the doc for new h3 element in variable header.
let header = document.createElement("h3");

//store the doc for new text in header in variable nodeh.
let nodeh = document.createTextNode("I'm a blue h3!")

//then append (store, attach) the nodeh variable in the parent header variable making it a parent.
header.appendChild(nodeh);

//store the parent header into the overall element (ID). 
element.appendChild(header);

//add style to header using (.style.color).
header.style.color = 'blue';

//creates a new div and stores its doc in const "deev". 
const deev = document.createElement("div");

//style the div, setting a border and background color). 
deev.setAttribute('style', 'border: black; background: pink');

//creates a header h1 element and stores it in variable "headerd".
let headerd = document.createElement("h1");

//creates and stores text for the h1 element in "nodehh" container. 
let nodehh = document.createTextNode("I'm in a div");

//then appends (stores, attach) the nodehh variable to the headerd making it the parent.
headerd.appendChild(nodehh);

//then appends (store, attach) the headerd variable to the div's "derv" const variable container. 
deev.appendChild(headerd);

//creates a paragraph element and stores it in the variable "para". 
let para = document.createElement("p");

//creates text for the paragraph and stores the doc in the variable container "parah". 
var parah = document.createTextNode("ME TOO!");

//then appends (store, attach) the paragraph 'text' variable to the paragraph element's variable. 
para.appendChild(parah);

//then appends the paragraph's variable to the div variable created. 
deev.appendChild(para);

//then appends the div variable into the container ID element variable. 
element.appendChild(deev);
