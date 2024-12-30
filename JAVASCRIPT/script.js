// ES 5 - variable
// var keyword [global scope variable]

// var x=10;
// // var y=20;

// {
//     console.log(x);
//     console.log(x+y);
// }

// var x=20;
// {
//     console.log(x);
//     console.log(x+y);
// }
// var y=30;

// ES6 - const,let

// var - [global scope variable] redefine/ redeclare
// let - [block scope variable] reassigned / not redeclare
// const -[block scope variable] not reassigned / not redeclared

// let x = 10
// x=20

// {
//     x=50
//     console.log(x);
// }

// console.log(x);

// const variable

// const name = "java"
// console.log(name);   (predefine)

// const boolean = "java"
// console.log(boolean);

// const profile = "srushti"
// // profile = "srushti" - not reassigned
// // profile = "riya"   - not redeclared

// {
//     console.log(profile);

// }
// console.log(profile);

// javascript hoisting [var / let support hoisting] const not supported

// {var x
// var y
// var z

// x=10
// y=20
// z=30

// console.log(x);
// console.log(y);
// console.log(z);
// }

// {
//     let x
// let y
// let z

// x=10
// y=20
// z=30

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// {
// const variable not supported hoisting
// const x
// const y
// const z

// x=10
// y=20
// z=30

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// javascript templet literals

// {
//     let str1='java'
//     let str3="javvva"
//     let str2=`javaaa`

//     console.log(str1);
//     console.log(str2);
//     console.log(str3);

//     let str4 = 'This is "Javascri☺☻♥♦♣♠•◘○pt"'
//     let str5 = "This is `Javascript`"
//     let str6 = `This is "Javascript"`

//     console.log(str4);
//     console.log(str5);
//     console.log(str6);

//     let namee = "srushti"

//     let str7 = `this is ${namee}`  only [``]

//     console.log(str7);
// }

// string object - [declare with new]

// {
//     let names = 'SkillQode'

//     let str = String(`This is ${names} String Object`)
//     // let str = new String(`This is ${names} String Object`)

//     console.log(str);
// }

// STRING OPERATORS [inside () all operators works]

// let str = 'java' + ' script'
// console.log(str);

// let str1 = 'Javascript' - 'Lecture'
// console.log(str1);

// let math = 100 + 100 + 'Javascript' + 100 + 100 - 100 - 100
// console.log(math);

// let sum = 'srushti ' + (100 + 100 ) + 100
// console.log(sum);

// let str2 = 'java' + 100 + 100
// console.log(str2);

// let str3 = 'javaa' + 100 - 100
// console.log(str3);

// let math2 = "100" + 100 - 100 - 100 // 99900
// console.log(math2);

// let math3 = (100 - 100 + 'Javascript' + 100 + 100 + 100) + 100 // 0javascript100100100100
// console.log(math3);

// operators in js

// 1. Arithmetic
// 2. Assigement
// 3. Logical
// 4. Comparision
// 5. Ternary
// 6. typeOf
// 7. instanceOf
// 8. Bitwise
// 9. ++ , -- [ unary operators ]

// Arithmetic operators

// {
//     let x=10
//     let y=5

//     console.log(x + y);
//     console.log(x - y);
//     console.log(x * y);
//     console.log(x / y);
//     console.log(x % y);
//     console.log(x ** y);

// }

// Assignment operators

// {
//     let x=10
//     let y=5

//     console.log(x += y); //15
//     console.log(x -= y); //10
//     console.log(x /= y); //2
//     console.log(x *= y); //10
//     console.log(x %= y); //0
//     console.log(x **= y); //0

// }

// logical operators

// {
//     let x=true
//     let y=false
//     let z=true

//     console.log(x && y);
//     console.log(x && z);
//     console.log(x && y && z);
//     console.log(x || y);
//     console.log(x || z);
//     console.log(x || y || z);
//     console.log(!(x || y) && !(x || z) && !(y && z)); // false

// }

// comparison operators

// {
//     let x=1000
//     let y="1000"

//     console.log(x == y);
//     console.log(x === y);  // data type check
//     console.log(x != y);
//     console.log(x !== y);
//     console.log(x > y);
//     console.log(x < y);
//     console.log(x >= y);
//     console.log(x <= y);

// }

// Ternary Operator [?]

// syntax : statement ? code1 : code2

// {
//     let Age=17

//     Age>=18 ? console.log('you are eligible') : console.log('you are under 18');

// }

// typeof operator

// {
//     console.log(typeof 'string');
//     console.log(typeof true);
//     console.log(typeof 12);
//     console.log(typeof []);

// }

// Bitwise Operators [with boolean values]

// {
//     let x=10 // 1010
//     let y=5 //  0101

//     console.log(x & y);
//     console.log(x | y);
// }

// Task:-   for(let key in Profile){
//     console.log(`For in ${Profile.key}`);
// }

// {
//     let profile = {
//         name: 'Rakesh',
//         age: 45,
//         email: `Rakesh@gmail.com`,
//         occupation: 'farmer'
// };
//     for(let key in profile){
//         // console.log(`${key}`);
//         // console.log(`${profile[key]}`);
//         console.log(`${key} = ${profile[key]}`);
//     }
// }

// {
//     let array = [1 , 2 , 3 , 4 , 5 , 6]

//     for(value of array){
//         console.log(`${value * 2}`);
//     }
// }

// Javascript String Method

// String.prototype.at()

// at(index) [ + and - both allowed]

{
  // let str = "This is Javascript String Method!"
  // console.log(str.at(-12));
  // console.log(str.at(12));
}

// String.prototype.CharAt()

// charAt(index) [only + number allowed]

// {
// let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

// console.log(str.charAt(1));
// }

// String.prototype.charCodeAt()

// charCodeAt(index) [returns ascii value of index number]

// https://www.toptal.com/designers/htmlarrows/letters/

// {
// let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

// console.log(str.charCodeAt(10));
// }

// String.prototype.concat()

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

// {
// let x = "Hello"
// let y = "Javascript"

// console.log(y.concat("\t"+x));

// }

// String.prototype.includes()

// includes(searchString) [answer is true or false]
// includes(searchString, position)

// {
// let str = "Dog is very cute and cat is lovable"

// console.log(str.includes('cute'));
// console.log(str.includes('cute' , 10));

// }

// String.prototype.indexOf()

// indexOf(searchString)
// indexOf(searchString, position)

// {
// let str = "Dog is very cute and cat is lovable"

// console.log(str.indexOf("v" , 20));

// }

// String.prototype.lastIndexOf()

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// {
//     let str = "Dog is very cute and cat is lovable"

//     console.log(str.lastIndexOf("v" , 20));
// }

// String.prototype.padStart() /  padEnd()

// padStart(targetLength) [ oly string is allowed]
// padStart(targetLength, padString)
// padEnd(targetLength)
// padEnd(targetLength, padString)

// {
// let x = 'hello'

// console.log(x.padStart(20)); [space in start]
// console.log(x.padEnd(15 , 'h')); [add in last]

//     // 03:12

// let x = '3'

// console.log(x.padStart(2 , '0'));

//     console.log(x.repeat(10));
// }

// Slice and Substring

// {
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                01234567890123456789012345
//                12345678901234567890123456

//     // slice(indexStart)
//     // slice(indexStart, indexEnd)

//     console.log(str.slice(0));
//     console.log(str.substring(0));
//     console.log(str.slice(10));
//     console.log(str.substring(10));
// console.log(str.slice(-10)); [ last starts with 1]
//     console.log(str.substring(-10)); [start with 0 - not alloud]
// console.log(str.slice(10 , 15));
//     console.log(str.substring(10 , 15));
//     console.log(str.slice(-10 , 10));
//     console.log(str.substring(-10 , 15));
// console.log(str.slice(-10 , -8));
// console.log(str.substring(-10 , -1));
// console.log(str.slice(0 , 0));
// console.log(str.substring(0 , 0)); [empty]

// }

// String.prototype.split() [ convert string to array]

// syntax :
// slice(indexStart)
// slice(indexStart, indexEnd)
{
  // let str = "i am srushti gangani"
  // console.log(str.slice(5));
  // console.log(str.slice(-4));
  // console.log(str.slice(5 , 14)); [doesn't print index end char]
  // console.log(str.slice(5 , -10)); [print srush]
}

// String.prototype.startsWith()

// syntax:
// startsWith(searchString)
// startsWith(searchString, position)
//  [gives output in boolean value (true or false)]

{
  // let str = "java script or java"
  // console.log(str.startsWith('java'));
  // console.log(str.startsWith('java' , 1)); [false]
}

// String.prototype.toLowerCase()

// syntax:
// toLowerCase()

// {
//     let str = "THE MAN AND WOMEN"

//     console.log(str.toLowerCase());

// }

// String.prototype.toString()

// syntax:
// toString()

{
  // let str = new String ("tooo many")
  // console.log(str); [string('tooo many')]
  // console.log(str.toString()); [tooo many]
}

// String.prototype.toUpperCase()

// syntax:
// toUpperCase()

// {
//     let str = "the man and women"

//     console.log(str.toUpperCase());

// }

// String.prototype.trim()

// syntax:
// trim()  [remove spaces]

/* javascript string match and matchAll Method [output in array]*/

// match(regexp)  [g-global i-ignore case]
// matchAll(regex) [only gi and g allowed]

// {
//     let str= "Dog is sweet and Cat is very cute but dog and cats both are scary"

//     let regex = /[Dog]/gi

//     // let demo = str.match(regex)
//     // let demo = [...str.matchAll(regex)]

//     console.log(demo);

// }

// replace(pattern, replacement)

{
  let str =
    "Dog is sweet and Cat is very cute but dog and cats both are scary this is dog his name is candy and this is cat her name is pummy . cat are blessed with beautiful scary eyes that kill all dogs  ";

  // let regex = /Dog/g

  // console.log(str.replace(/Dog/gi,'fox'));
  // console.log(str.replace(/dog/gi,'fox'));
}

// object

{
  let object = {
    name: "SkillQode",
  };

  let obj = (object.name = "srushti");

  console.log(object.name);

  console.log(object);

  console.log(obj);
}

// map

{
  let demo = new Map()  
  
  demo.set('language' , 'javascript')

  console.log(demo);
  
}
