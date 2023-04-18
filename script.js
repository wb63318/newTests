//javascript crash course
console.log("hello from script.js");

//variables:

//variables declaration using 'let' [can be create and initialised or changed later in the code]
//Used when when variable will changed later in the code

let age = 25;
console.log(age);

//variables declaration using 'const'[Must be initialised before use and cannot be changed during the course of the program]
//Used for fixed values or will not be changed during codings
//NB: const cannot be undefined
const salary = 80000;
console.log(salary);

/*
Datatypes
Primitive:
String = 'Text','Vishwas',"Javascript",
 Number = 0,3.14,
 Boolean = true, false,
 Undefined = values not assigned eg. 'let result' ,
 Null = empty or unknown data 'const name = null,
 BigInt = larger than number datatype,
 Symbol = *
Non Primitve:
Objects = combination of Data 
" const data = null,
    const person = {
     fName: 'Samuel',
    lName: 'Jones',
    age: 30,
    works: true,
    }
"
*/
/*
Operators :

Assignment '=',
Arithmetic ' -, +, *, /, %, ++x, --y,'
Comparison ' ==, !=, ===, !==, >, >=, <, <= '
Logical ' && , ||, !Isvalid '
String 'console.log('Bruce ' + 'Wayne') = Bruce Wayne
Other 'ternary ==" const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven) = true" '
*/
/*
Type conversions:
Implicit/type coercion: between two  numeric string
console.log('4' - '2') = 2
Else result = NaN
But undefined
Explicit/manual:
console.log(DataType(data))
console.log(parseInt/Float(data))
console.log(String(data))
console.log((data).toString()) != null and undefined
console.log(Boolean(data)) NB: null, undefined, 0, '', NaN return 'false'
*/
/*
Conditional Statements
if = check single condition ,
else = used after if or else if,
else if = not restricted to one condition or use/can be used multiple times,
switch = picks the right statement related to the data ,
*/

/*
Looping Code:
initializer = let i = 5;
code to run = console.log('Iteration number ');
condition = i <= 5 ;
final-expression = i++
For = (initializer; condition; final-expression){code to run}
   for(let i =1; i <=5; i++){console.log('Iteration number' + i)},
While = initializer , while(condition){code to run    final-expression}
let i =1 while(i<=5){console.log('Iteration number ' + i) i++},
Do while = initializer do{console.log(code to run  final-expression)}while(condition)
For of = loop over collection of data; initializer for(const item of array){code to run}
*/

/*
Functions:
function name(parameter1, parameter2,..){code to be executed}
function name(argument);
const arrowSum = (a, b) => a + b
const addFive = num => num + 5
*/

/*
SCOPE:
Block = can be acessed inside the block
Function = can only be accesed in a function
Global = acessible inside a block and function
*/

/*
Nested Function Scope:
let a =10
function outer(){
    let b = 20
    function inner(){
    let c = 30
    console.log(a, b, c,)
    }
    inner()
}
outer()
*/
/*
CLOSURE
function outer(){
    let counter =0
    function inner(){
    counter++
    console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()
*/

/*
Function CUrry

function curry(fn){
    return function(a){
    return function(b){
    return function(c){
    return  fn(a, b, c)
    }
    }
    }
}
curry curriedSum = curry(sum)
console.log(curriedSum(a)(b)(c))
const addA = curriedSum(A)
const addB = addA(B)
const addC = addB(C)
console.log(addC)
*/

/*
THIS: Binding
New Binding
Implicit Binding
Explicit Binding
Default Binding
*/
const person = {
  fName: "Samuel",
  lName: "Jones",
  age: 30,
  works: true,
};
console.log(person);
const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);
console.log(Boolean());
const passAge = 18;
switch (passAge) {
  case "21":
    console.log("Not you");
    break;
  case 18:
    console.log("Of Age");
    break;
  case 15:
    console.log("Too Young");
    break;
  default:
    console.log("Not Seen Yet");
}
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number " + i);
}

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();
fn();

function Person(name) {
  this.name = name;
}
const p1 = new Person("Sandra");
const p2 = new Person("Joe");
console.log(p1);
console.log(p2);
console.log(p1.name, p2.name);

const person2 = {};
person2.fName = "Afua";
person2.lName = "Anna";
person2.age = 25;

console.log(person2);
