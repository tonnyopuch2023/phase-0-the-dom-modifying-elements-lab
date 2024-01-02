// Write your code here!
// index.js

// Step 1: Creating DOM Elements Programmatically
const element = document.createElement("div");

// Step 2: Adding Elements to the DOM
document.body.append(element);

// Step 3: Creating an Unordered List (<ul>) and List Items (<li>)
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

// Step 4: Manipulating Element Style and Text Content
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";

// Step 5: Removing an Element
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Step 6: Removing the Entire Unordered List
ul.remove();
