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

/*-----------------------------------------NAVIGATING THE DOM TREE--------------------------------------------------*/

let header = document.getElementById("post-header");
// console.log(header.firstChild); // first child of a node
// console.log(header.firstElementChild); // first element or first child of childs of an html element
// console.log(header.lastChild); //last child of a node
// console.log(header.lastElementChild); // Last element of the element.
let firstElementChild = header.firstElementChild;
let lastElenentChild = header.lastElementChild;
let parentNode = firstElementChild.parentNode;
let parent = firstElementChild.parentElement; // this is how we get the parent from the element

// console.log(firstElementChild.nextSibling); // next node sibling
// console.log(firstElementChild.nextElementSibling); // next element sibling
// console.log(lastElenentChild.previousElementSibling); // previous node sibling
// console.log(lastElenentChild.previousElementSibling); // previous element sibling

//console.log(firstElementChild.hasChildNodes()); // this is to check if the element firstElement has child nodes. and it returns a boolean
//console.log(firstElementChild.children.length > 0 ? true : false); // This element has children
// console.log(firstElementChild.closest("section")); // finds the closest ansestor based on the selector
