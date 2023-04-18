/* Advanced Javascript Concepts */

//Install VsCode and latest Node.js versions

// Nested Function's scope

let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

//Closure

/* Commbination of a function bundled together with references to its surrounding state. Closures are created everytime a function is created, at function creation time */

function outer2() {
  let counter = 0;
  function inner2() {
    counter++;
    console.log(counter);
  }
  return inner2;
}
const fn = outer2();
fn();
fn();

// Function Currying
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
console.log(curriedSum(5)(6)(7));

//this Keyword

/*Implicit binding */

const person = {
  name: "Anderson",
  sayMyName: function () {
    console.log(`My Name is ${this.name}`);
  },
};

person.sayMyName();
/* Explicit Binding*/

const person1 = {
  name: "Vishwas",
};
function sayMyName() {
  console.log(`My Name is ${this.name}`);
}
sayMyName.call(person1);

/*New Binding */

function Person2(name) {
  //this ={}
  this.name = name;
}
const p1 = new Person2("Adonko");
const p2 = new Person2("BuzzMan");

console.log(p1.name, p2.name);

/* Default Binding */
//browser = const name = 'Superman

sayMyName();

//Prototype

function Perrson(fName, lName) {
    this.firstName = fName
    this.lastName = lName

}
const perrson1 = new Perrson('Samuel', 'Pipper')
const persson2 = new Perrson('jonas', 'James')

perrson1.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}
console.log(perrson1.getFullName())
Perrson.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}
console.log(persson2.getFullName())

//Prototypal inheritance
function SuperHero(fName, lName) {
    //this = {}
    Perrson.call(this, fName, lName)
    this.isSuperhero = true
}


SuperHero.prototype.fightCrime = function () {
    console.log('Fighting Crime')
}
SuperHero.prototype = Object.create(Perrson.prototype)
const batman = new SuperHero('Bruce', 'Wayne')
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())

//Class
class Nipa {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
    //Method
    sayMyDin() {
        return this.firstName + ' ' + this.lastName
    }
}
const classP1 = new Nipa('kofi', 'Swagger')
console.log(classP1.sayMyDin())

class SuuperHero extends Nipa {
    constructor(fName, lName) {
        super(fName, lName)
        this.isSuuperHero = true
    }
    fightCrime() {
        console.log('Destroy Bad Guys')
    }
}

const ironMan = new SuuperHero('Sammy', 'Forson')
console.log(ironMan.sayMyDin())

//Iterables and Iterators

const str = 'Vishwas'

for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}
console.log(' ')

const arr = ['V', 'i', 's', 'h', 'w', 'a', 's']
for (let i = 0; i< arr.length; i++) {
    console.log(arr[i])
}

/*STARTING For ..of loop  "for strings , maps and sets"*/
const str1 = 'Vishwas'
for (const char of str1) {
    console.log(char)
}
console.log(' ')
const arr1 = ['V', 'i', 's', 'h', 'w', 'a', 's']
for (const item of arr) {
    console.log(item)
}
//
const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function () {
                step++
                if (step === 1) {
                    return {value: 'Hello', done: false}
                } else if (step === 2) {
                    return {value: 'World',done:false}
                }
                return {value: undefined, done: true}
            },
        }
        return iterator
    },
}
for (const word of obj) {
    console.log(word)
}

//Generators
//Simplifies the tasks of writting iterators

function normalFunction() { 
    console.log('hello')
    console.log('fellas')
}
console.log(' ')
normalFunction()
console.log('')
//writting generator function
//yield keyword='to pause a generator function
function* generatorFunction() {
    console.log('Eat')
    console.log('Banku')
    console.log('Thank You')
}
const generatorObject = generatorFunction()
for (const word of generatorObject) {
    console.log(word)
}

//Combining Arrays

//Use keyword 'concat'

let c1 = ["Html", 'Css']
let c2 = ["Js", "C++"]
const courses = c1.concat(c2)
console.log(courses)

// in associative arrays index numbers are replaced with 'strings'

// 'setInterval'  & clearInterval
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);