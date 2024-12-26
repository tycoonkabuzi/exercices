/*------------------------destructurisation---------------------------------------

let names = ["Krystian", "Ania", "Luc", "Adam"];
let [name1, name2, name3] = names;
console.log(name3);


------------------------destructurisation---------------------------------------
*/

/*--------------------- MethodsOnArrays------------------------------------------
let names = ["Hans", "Ania", "Adam"];
let secondNames = ["Kabuzi", "Malekani", "Malakai"];
let arrayLength = names.push("Monika"); // this helps us to add an element at the end of an array.
console.log(names);
console.log(names.push("Boss")); // here we have the position of where the element was added and in this case it would be 5.
// we have another method which is the method Join which displays a string with the elements in the array, it takes in the parameter the separetor and in case we do not put any the default is ac comma.
let joinedArray = names.join(" & ");
console.log(joinedArray);
// we also have another method which is reverse, often used in Js it reverses the order of the elments
let reversedArray = names.reverse();
console.log(names);
// we are going to sort sort() the array alphabetically
let sortedArray = names.sort();
console.log(sortedArray);
// There is also the method  concat() which add the elements of an array into another array.the concat method returns a pointer to the newly created array
let concatedArray = names.concat(secondNames);
console.log(concatedArray);
//index() this is a method which allow us to know the position or index of an element whenever we put the element in the parameter
let indexOfArray = names.indexOf("Ania");
//map()this method allows us to create a new array by modifying existing elements.
let uperCaseArray = secondNames.map((element, index) => {
  let uperCaseElement = element.toUpperCase() + index;
  return uperCaseElement;
});

console.log(uperCaseArray);
// The next method is filter () this filters our current array  which will use as well a function , it sees if every element passes the filter if it passes it is added in a new array

let filteredArray = names.filter((element, index) => {
  return element.startsWith("A");
});

console.log(filteredArray);


--------------------- MethodsOnArrays------------------------------------------

*/

/*-------------------------------------ObjectInJs-----------------------------------------------
// we have created an object with a method printName;
var person = {
  name: "hans",
  height: 180,
  printName: function () {
    console.log(`my hight is ${this.height}`); // the keyword 'this' is used when we want to refer to our internal fields or methond swithin the object itself.
  },
};
// call one element of the object.
console.log(person.name);
person.printName();
// we can also get to an element using the key into brackets.
console.log(person["name"]);
// to change the internal value of a field, we can refer to it in the same way as when we read data.
person.height = 181;

// in case we would like to add an element in the object we can do it like this.
person.age = "20 Years";
console.log(person);
let { name, height } = person;
console.log(name, height);
// in ES6 we can create the object  the same way but using let and we can also create a method easily , see below.

let secondPerson = {
  name: "Reed",
  secondName: "Kabuzi",
  height: 190,
  print() {
    console.log(
      `My name is ${this.name} ${this.secondName} and my height is ${this.height} `
    );
  },
};

secondPerson.print();
-------------------------------------ObjectInJs-----------------------------------------------*/

/*-------------------------------------Class-----------------------------------------------
class person {
  constructor(name, miaka) {
    this.noun = name;
    this.age = miaka;
  }
  statement() {
    return `My name is ${this.noun} and my age is ${this.age}`;
  }
}
let firstPerson = new person("Herman", 18);
let secondPerson = new person("Queenii");
console.log(firstPerson.statement());


-------------------------------------Class-----------------------------------------------
*/
/*-------------------------------------inheritance-----------------------------------------------
class Line {
  constructor(length = 0) {
    this.len = length;
  }
  setLength(length) {
    this.len = length;
  }
}

let linia = new Line(123); // created an object from the class Line
linia.setLength(200); // here we change the value of lenght by using the method setLength that we have created prior in the class Line
console.log(linia);

class Rectangle extends Line {
  constructor(width = 0, len = 0) {
    super(len); // always start by calling the element we need from the parent. which means that we are not allowed to start by this.width and then go to super()
    this.wid = width;
  }
  setWidth(width) {
    this.wid = width;
  }
}

class Cuboid extends Rectangle {
  constructor(height = 0, width = 0, length = 0) {
    super(width, length);
    this.height = height;
  }
  setHeight(height) {
    this.height = height;
  }
}

let rectangle = new Rectangle(202, 22);
let line = new Line();
let cuboid = new Cuboid(12, 33, 53);
cuboid.setHeight(1000);
cuboid.setWidth(2000);
cuboid.setLength(550);
console.log(cuboid);
rectangle.setLength(12);
rectangle.setWidth(12);
console.log(line, rectangle, cuboid);

-------------------------------------inheritance-----------------------------------------------*/
/*-------------------------------------Math-----------------------------------------------*/
/*-------------------------------------ReversedString-----------------------------------------------
// exercice REVERSED STRING
function reversedString(text) {
  let stringArray = text.split("");
  let reversedStringArray = stringArray.reverse();
  let textReversed = reversedStringArray.join("");
  console.log(textReversed);
}
reversedString("Akademia108");
-------------------------------------ReversedString-----------------------------------------------*/

/*-------------------------------------SortedLetters-----------------------------------------------
function sortedString(text) {
  let textArray = text.split(""); // convert string to array
  let sortedArray = textArray.sort();
  let textReversed = sortedArray.join("");
  console.log(textReversed);
}

sortedString("Akademia108");
-------------------------------------SortedLetters-----------------------------------------------*/

/* Write a function with local variables that calculates the sum and product of the elements of the array [1, 2, 3, 4, 5, 6]. 
  The function takes one parameter - the array of numbers. The function does not return anything. 
  The function displays the results in the console.

  Do the homework using the service https://repl.it.

  Hint before submitting the task for review:
  - Use a for loop or forEach in the task.
  
  */
/*-----------------------SumAndProduct---------------------------------------------
function sumAndProduct(numbers) {
  let sum = 0;
  let product = !0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
  }
  console.log(sum);
  console.log(product);
}
sumAndProduct([2, 3, 10]);
-----------------------SumAndProduct---------------------------------------------*/

/*
Write a function with local variables that calculates the sum of the squares of the elements of the array [0,1,2,3,4,5].
 The function takes one parameter - the array of numbers. 
 The function returns the sum of the squares. Display the result of the function in the console.

As a solution, send a link to your project on https://repl.it.

Hint before submitting the task for review:
- Use the loop and the Math class in the task.
*/
/*function sumOfsquareElement(arrayInput) {
  let squaredArray = [];
  let sum = 0;
  arrayInput.forEach((element, index) => {
    squaredArray.push(Math.pow(element, 2));
    sum += squaredArray[index];
  });

  return sum;
}

console.log(sumOfsquareElement([0, 1, 2, 3, 4, 5, 6]));
*/
// let a = 1;
// let b = 0;

// for (let i = 0; i < 10; i++) {
//   let result = a + b;
//   a = b;
//   b = result;
//   console.log(result);
// }
// JSON.stringify
// let theArr = [1, 2, 3, 5];
// let jsonWorkers = {
//   pracownicy: [
//     { firstName: "Krystian", lastName: "Dziopa" },
//     { firstName: "Anna", lastName: "Szapiel" },
//     { firstName: "Piotr", lastName: "Zmuda" },
//   ],
// };
// let data = JSON.stringify(jsonWorkers);
// console.log(jsonWorkers);
// theArr.forEach((element) => {
//   console.log(element);
// });

//EXERCICE on BOOK Object
// class Book {
//   constructor(title, author, read) {
//     this.title = title;
//     this.author = author;
//     this.read = read;
//   }
//   describeBook() {
//     return `The book is titled ${this.title}, the author is ${
//       this.author
//     } and ${this.read ? "it has been read" : "it has'nt been read"}`;
//   }
// }

// let firstBook = new Book("A la recherche du Bonheur", "Henry Speaker", false);
// let secondBook = new Book("Creed", "Michael B.", true);
// let thirdBook = new Book("Money Making", "Elionore Mba", false);
// let library = [];
// library.push(firstBook, secondBook, thirdBook);

// function countReadBooks(arrayOfObjects) {
//   let counter = 0;
//   arrayOfObjects.forEach((element) => {
//     if (element.read) {
//       counter++;
//     }
//     console.log(element.describeBook());
//   });
//   return `${counter} book${counter <= 1 ? " is " : "s are "}read`;
// }

// console.log(countReadBooks(library));
// bubble sort

// let numbers = [
//   12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1,
// ];

// function swapElement(array, index1, index2) {
//   [array[index2], array[index1]] = [array[index1], array[index2]];
// }

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length - 1; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       swapElement(numbers, j, j + 1);
//     }
//   }
// }
// console.log(numbers);

/* ----------------------------------------- DOMEXERCICE--------------------------------------------------
WHAT IS DOM
console.log(`Outside height of the window ${window.outerHeight}`); // here we access the value of the window's height
console.log(`Inside height of the window ${window.innerHeight}`);

window.document.write("<h2>Tycoon</h2>");
// DOCUMENT (Object)
console.log(document.location); // location of our html file.
console.log(document.doctype);
console.log(document.body);
console.log(document);
console.log(document.documentElement);

*/

/* ----------------------------------------- ACCESSING THE DOM--------------------------------------------------
let articles = document.getElementById("articles"); //getElementByID
let paragraph = document.querySelector(".content"); // take the element like in Css, this take only the first element

// Methods returning HTML collection

let paragraphs = document.getElementsByClassName("content");
let allParagraphs = document.getElementsByTagName("h1");

let paragraphsContent = document.querySelectorAll("p.content");
console.log(paragraphsContent[2]);
----------------------------------------ACCESSING THE DOM -------------------------------------------------------
*/
/*-----------------------children.childrenNodes-------------------------------------------------------------------
let header = document.querySelector(".post-header");
console.log(header.childNodes); // here to find the childNodes, all elements in the document, spaces everything.
console.log(header.children); // html child of this element.
--------------------------children.childrenNodes------------------------------------------------------------------*/

/*-----------------------------------------NAVIGATING THE DOM TREE-------------------------------------------------

// let header = document.getElementById("post-header");
// // console.log(header.firstChild); // first child of a node
// // console.log(header.firstElementChild); // first element or first child of childs of an html element
// // console.log(header.lastChild); //last child of a node
// // console.log(header.lastElementChild); // Last element of the element.
// let firstElementChild = header.firstElementChild;
// let lastElenentChild = header.lastElementChild;
// let parentNode = firstElementChild.parentNode;
// let parent = firstElementChild.parentElement; // this is how we get the parent from the element

// // console.log(firstElementChild.nextSibling); // next node sibling
// // console.log(firstElementChild.nextElementSibling); // next element sibling
// // console.log(lastElenentChild.previousElementSibling); // previous node sibling
// // console.log(lastElenentChild.previousElementSibling); // previous element sibling

// //console.log(firstElementChild.hasChildNodes()); // this is to check if the element firstElement has child nodes. and it returns a boolean
// //console.log(firstElementChild.children.length > 0 ? true : false); // This element has children
// // console.log(firstElementChild.closest("section")); // finds the closest ansestor based on the selector
-----------------------------------------NAVIGATING THE DOM TREE--------------------------------------------------*/

/*----------------------------------------CREATING NODES -------------------------------------------

let liElement = document.createElement("li"); //
let txtNode = document.createTextNode("Fourth");
let attrNode = document.createAttribute("class");
attrNode.value = "last";
liElement.appendChild(txtNode); // It is added last after all the children
liElement.setAttributeNode(attrNode);
theList = document.getElementById("list");
theList.appendChild(liElement);
console.log(theList);
----------------------------------------CREATING NODES -------------------------------------------*/

/*--------------------------------------ADDING NODES TO THE dom tree-------------------------------
let documentFragment = new DocumentFragment(); // this is like a transition container where we can store the element we would like to append and we append them at the end which will put this object to an empty object
theList = document.getElementById("list");
let liElement = document.createElement("li"); //create the element
liElement.textContent = "Seventh"; // assign the text to the li
let theClass = document.createAttribute("class"); // we create an attribute, which could have been a class an ID or whatever.
theClass.value = "last"; // we assign a name to that attribute.
liElement.setAttributeNode(theClass); //we attach the attribue to the LI element
documentFragment.appendChild(liElement); //we attach the LI to the fragment.
theList.appendChild(documentFragment); // we attach the whole fragment to the html file where we need it to appear

//insertbefore()
theList.insertBefore(liElement, theList.firstElementChild); // we put the element to the first position as the first child we could also put it on the second last by just assigning to the last position and write .previousElementSibling, and we can move the element for as much as we need to pull it up.
//replaceChild()
theList.replaceChild(
  liElement,
  theList.lastElementChild.previousElementSibling
); // this completely remove the the second last element and replace it by what we have added ourselves in other words liElement
//insertAdjacentElement

theList.insertAdjacentElement("afterbegin", liElement); // afterbegin, afterend, beforebegin,beforeend , these are strings which can be use as parameters for this method

//insertAdjacentHTML
theList.firstElementChild.insertAdjacentHTML("beforebegin", "<li>Zero</>"); // same method like the previous one, however for this one we will add the html manually

//insertAdjacentText

theList.lastElementChild.insertAdjacentText(
  "beforeend",
  "Salut comment allez vous ?"
);
console.log(theList);
--------------------------------------ADDING NODES TO THE dom tree-------------------------------*/

/*----------------------------------------REMOVING NODES FROM THE DOM Tree--------------------------------

let list = document.getElementById("list");
// remove an attribute
list.removeAttribute("id");

// removeChild we reomoved the last element child
list.removeChild(list.lastElementChild);
list.lastElementChild.remove();
console.log(list);
----------------------------------------REMOVING NODES FROM THE DOM Tree--------------------------------*/

/*-----------------------------CHANGING TEXT AND MARKUP IN HTML ELEMENTS------------------------------------
let header = document.querySelector("h1");
header.innerHTML = "<h2>The lord is my sheperd</h2>"; // change the Inside of an HTML
header.outerHTML = "<h3> I am more than your brother</h3>";
header.innerText = "Bonjourno La famillia";
console.log();
----------------------------CHANGING TEXT AND MARKUP IN HTML ELEMENTS------------------------------------*/

/*--------------------------SETTING AND MODIFYING HTML ELEMENT ATTRIBUTES-------------------------

let theList = document.getElementById("list");

for (element of theList.children) {
  element.setAttribute("id", "blueDots"); // here we crate an attribute and we give it a name
}
--------------------------SETTING AND MODIFYING HTML ELEMENT ATTRIBUTES-------------------------*/

/*--------------------------SETTING AND GETTING HTML ELEMENT CLASSES-------------------------
let list = document.getElementById("list");
let firstElement = list.firstElementChild;
let lastElement = list.lastElementChild;
firstElement.setAttribute("class", "blueviolet");
lastElement.setAttribute("class", "red");
firstElement.className = firstElement.className + " first";
lastElement.classList.add("last");
lastElement.classList.add("better");
lastElement.classList.remove("better");
lastElement.classList.toggle("better"); // add a class in case it doesnt already exist there it removes it
console.log(list);


----------------------------SETTING AND GETTING HTML ELEMENT CLASSES-------------------------*/

/*--------------------------ADDING AND CHANGING CSS STYLES OF HTML ELEMENTS-------------------------
let list = document.getElementById("list");
let firstElement = list.firstElementChild;
let lastElement = list.lastElementChild;
firstElement.style.color = "blue";
console.log(list);
---------------------------ADDING AND CHANGING CSS STYLES OF HTML ELEMENTS-------------------------*/

/*---------------------------REGISTERING EVENTS HANDLERS---------------------------------------------
let btnResult = document.getElementById("result");
// const result = () => {
//   console.log("Clicked");
// };

//btnResult.onclick = result; // the name of the function and not result()
//using addEventListener
//btnResult.addEventListener("click", result);
btnResult.addEventListener("click", () => {
  // done through an annonymous fonction
  console.log("Done");
});
---------------------------REGISTERING EVENTS HANDLERS---------------------------------------------*/

/*---------------------------REMOVE EVENT HANDLERS---------------------------------------------
let btnResult = document.getElementById("result");
const result = () => {
  console.log("Clicked");
};
btnResult.addEventListener("click", result);
btnResult.removeEventListener("click", result); // this has to take two arguments as the add eventlistener, the action and the function
btnResult.removeAttribute("onClick");// we remove it from the HTML page as we could remove anothre attribute like class etc.
btnResult.onclick = result;
btnResult.onclick = null; // to remove the previous one
getEventListener()// this is a method we use in the console and this help us get all the event listerns on a button this can help during debuginng
---------------------------REMOVE EVENT HANDLERS---------------------------------------------*/

/*---------------------------EVENT OBJECT PROPERTIES AND EVENT CONTROL---------------------------------------------
let btnResult = document.getElementById("result");
// const result = (e) => {
//   console.log(e); // we can access the event parameter and see all the information we can access eg. type, height etc.
//   console.log(e.type);
// };
// btnResult.addEventListener("click", (e) => {
//   e.preventDefault(); // prevent to go to the next page or open another page
//   console.log("Went to Chat GPT");
// });

for (let btn of document.querySelectorAll("ul a")) {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (btn.innerText == "Edit") {
      console.log("Editing");
    } else if (btn.innerText == "Delete") {
      console.log("deleting");
    } else {
      console.log("You are clicking in the blank");
    }
  });
  btn.closest(".post-header").addEventListener("click", () => {
    console.log("Touched something");
  });
}

// the event.stopPropagation() helps to only access one data if the data is in a set of data where there could be a confusion when it is clicked.
 
---------------------------EVENT OBJECT PROPERTIES AND EVENT CONTROL---------------------------------------------*/

/*---------------------------MOUSE EVENT---------------------------------------------
// aux click

let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("auxclick", (e) => {
    console.log(`${e.currentTarget} we are clicked`);
  });
} else {
  console.log("nothing Happened.");
}

//contextmenu : this is triggered when we click the right click or for some computers(mac) when we click with two fingers.

let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("contextmenu", (e) => {
    console.log(`${e.currentTarget} we are clicked`);
  });
} else {
  console.log("nothing Happened.");
}

//dbclick : is when we double click

let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("dbclick", (e) => {
    console.log(`${e.currentTarget} we have double clicked`);
  });
} else {
  console.log("nothing Happened.");
}

// mousedown is when we click and don't release the finger from the mouse, mouse up is triggered whenever we release our finger

let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mousedown", (e) => {
    console.log(`${e.currentTarget} the mouse was moved`);
  });
} else {
  console.log("nothing Happened.");
}


// mouseenter is triggered whenever we hover the mouse on the element
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mouseenter", (e) => {
    console.log(`${e.target} is triggered`);
  });
} else {
  console.log("nothing Happened.");
}

// mouseleave it is the reverse result of the mouseenter, this is whenever I leave the element it is triggered
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mouseleave", (e) => {
    console.log(`${e.target} You left`);
  });
} else {
  console.log("nothing Happened.");
}

// mousemove whenever we move the mouse
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mousemove", (e) => {
    console.log(`${e.target} You left`);
  });
} else {
  console.log("nothing Happened.");
}

// mouseover works similarly like the mouseenter
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mouseover", (e) => {
    console.log(`${e.target} You left`);
  });
} else {
  console.log("nothing Happened.");
}
  // mouseout works 
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mouseout", (e) => {
    console.log(`${e.target} mouseout`);
  });
} else {
  console.log("nothing Happened.");

  // mouseup is triggerd whenever we release the mouse after the click
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("mouseup", (e) => {
    console.log(`${e.target} mouseout`);
  });
} else {
  console.log("nothing Happened.");
}

//wheel this is triggered whenever we scroll
let theRightClick = document.getElementById("auxClick");
if (theRightClick) {
  theRightClick.addEventListener("wheel", (e) => {
    console.log(`${e.target} scrooll`);
  });
} else {
  console.log("nothing Happened.");
}

---------------------------MOUSE EVENT---------------------------------------------*/

/*---------------------------KEYBOARD EVENTS---------------------------------------------
// keyDown all the keys even the ctrl,command,delete etc
const inputElement = document.getElementById("inputText");
inputElement.addEventListener("keydown", (e) => {
  switch (e.key) {
    case (e.key = "Meta"):
      console.log("Command");
      break;
    case (e.key = "Alt"):
      console.log("option");
      break;
    case (e.key = "Backspace"):
      console.log("Delete");
      break;
    default:
      console.log(`${e.key}`);
  }
});

// keypress all keys except the ctrtl command delete etc.
const inputElement = document.getElementById("inputText");
inputElement.addEventListener("keypress", (e) => {
  switch (e.key) {
    case (e.key = "Meta"):
      console.log("Command");
      break;
    case (e.key = "Alt"):
      console.log("option");
      break;
    case (e.key = "Backspace"):
      console.log("Delete");
      break;
    default:
      console.log(`${e.key}`);
  }
});

//keyup is whenever a key is released : no longer pressed that is when it is triggered
const inputElement = document.getElementById("inputText");
inputElement.addEventListener("keyup", (e) => {
  switch (e.key) {
    case (e.key = "Meta"):
      console.log("Command key is released");
      break;
    case (e.key = "Alt"):
      console.log("option key is released");
      break;
    case (e.key = "Backspace"):
      console.log("Delete key is released");
      break;
    default:
      console.log(`${e.key} key is released`);
  }
});

---------------------------KEYBOARD EVENTS---------------------------------------------*/

/*---------------------------FORM EVENTS---------------------------------------------
// The first event  is the submit event, which is sending our form, and the second event is reset, which is restoring the default appearance of the form and the default values in the form fields.

let formulaire = document.getElementById("formulaire");
function displaySubmition(e) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (email && password != "") {
    console.log(
      `your email is "${email.value}" and your password "${password.value}"`
    );
  } else {
    console.log("You did not write anything");
  }
  e.preventDefault();
}

formulaire.addEventListener("submit", displaySubmition);
formulaire.addEventListener("reset", () => {
  console.log("It is reset from");
});

---------------------------FORM EVENTS---------------------------------------------*/

/*---------------------------FOCUS EVENTS---------------------------------------------
//focus: only at the element target with no propagation , focusin: propagation is made, blur:it does not propagate, focusout: it propagates.
let inputs = document.querySelectorAll("input");
let paragraphs = document.querySelectorAll("p");
for (let anInput of inputs) {
  anInput.addEventListener("focusin", (e) => {
    e.target.classList.add("blueviolet");
    e.target.previousElementSibling.style.color = "blue";
  });
  anInput.addEventListener("focusout", (e) => {
    e.target.classList.remove("blueviolet");
  });
}

---------------------------FOCUS EVENTS---------------------------------------------*/
