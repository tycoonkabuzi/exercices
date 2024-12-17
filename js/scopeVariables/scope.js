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
