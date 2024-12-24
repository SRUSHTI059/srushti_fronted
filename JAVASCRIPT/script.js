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

{
    let x=10
    let y=5

    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log(x ** y);
    
}

// Assignment operators

{
    let x=10
    let y=5

    console.log(x += y); //15
    console.log(x -= y); //10
    console.log(x /= y); //2
    console.log(x *= y); //10
    console.log(x %= y); //0
    console.log(x **= y); //0
    
}

// logical operators

{
    let x=true
    let y=false
    let z=true

    console.log(x && y);
    console.log(x && z);
    console.log(x && y && z);
    console.log(x || y);
    console.log(x || z);
    console.log(x || y || z);
    console.log(!(x || y) && !(x || z) && !(y && z)); // false
    
}

// comparison operators

{
    let x=1000
    let y="1000"

    console.log(x == y);
    console.log(x === y);  // data type check
    console.log(x != y);
    console.log(x !== y);
    console.log(x > y);
    console.log(x < y);
    console.log(x >= y);
    console.log(x <= y);
    
}

// Ternary Operator [?]

// syntax : statement ? code1 : code2

{
    let Age=17

    Age>=18 ? console.log('you are eligible') : console.log('you are under 18');
    
}

// typeof operator

{
    console.log(typeof 'string');
    console.log(typeof true);
    console.log(typeof 12);
    console.log(typeof []);
    
}

// Bitwise Operators [with boolean values]

{
    let x=10 // 1010
    let y=5 //  0101

    console.log(x & y);
    console.log(x | y);
}

// Task:-   for(let key in Profile){
    //     console.log(`For in ${Profile.key}`); 
    // }

    {
        let profile = {
            name: 'Rakesh',
            age: 45,
            email: `Rakesh@gmail.com`,
            occupation: 'farmer'
    };
        for(let key in profile){
            // console.log(`${key}`);   
            // console.log(`${profile[key]}`);
            console.log(`${key} = ${profile[key]}`);
        }
    }









