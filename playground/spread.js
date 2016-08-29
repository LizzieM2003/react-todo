function add(a, b) {
  return a + b;
}

console.log(add(3,1));

var toAdd = [9, 5];
console.log(add(...toAdd));
//
// var groupA = ['Adam', 'Hannah'];
// var groupB = ['Speckles'];
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

var person = ['Lizzie', 25];
var personTwo = ['Speckles', 4];

function greet(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}
greet(...person);
greet(...personTwo);

var names =['Adam', 'Speckles', 'Hannah'];
var final = ['Lizzie', ...names];

function greet2(namesArr) {
  final.forEach((name) => {
    console.log(`Hi ${name}!`);
  });
}

greet2(final);
