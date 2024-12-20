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

// STRING OPERATORS

let str = 'java' + ' script'
console.log(str);

let str1 = 'Javascript' - 'Lecture'
console.log(str1);

let math = 100 + 100 + 'Javascript' + 100 + 100 - 100 - 100
console.log(math);

let sum = 'srushti ' + (100 + 100 ) + 100
console.log(sum);









