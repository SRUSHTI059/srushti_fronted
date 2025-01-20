
// JavaScript Program To Print Hello World

{
    console.log("Hello World");
    
}

// JavaScript Program to Add Two Numbers

{
    let a = 10
    let b = 2 

    console.log(a+b);
    
}

// JavaScript Program to Find the Square Root

{
    let a = 10

    console.log(`square of a is : ${a*a}`);
    
}

// JavaScript Program to Calculate the Area of a Triangle
// 1/2 *b*h

{
    let b = 10
    let h = 120

    let t = 1/2 * b * h

    console.log(`area of triangle : ${t}`);
    
}

// JavaScript Program to Swap Two Variables

{
    let a = 10
    let b = 20

    a = a+b
    b = a-b
    a = a-b

    console.log(`after swipe a=${a} and b=${b}`);
    
}

// 6) JavaScript Program to Solve Quadratic Equation

// x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}          

{
    function qe(a,b,c){
        let d = b * b - 4 * a * c
        let sqr = Math.sqrt(Math.abs(d))

        if(d>0){
            console.log(`roots are different`);
            console.log(`${(-b + sqr) / (2 * a)} and ${(-b - sqr) / (2 * a)}`);
        }
        else if(d==0){
            console.log(`roots are same`);
            console.log(-b / (2 * a) `and` -b / (2 * a));
        }else { 
            console.log('Roots are complex'); 
        }
    }
    qe(1,-3,2)
}
// 7) JavaScript Program to Convert Kilometres to Miles

{
    let mile = 0.621371
    let km = 2

    let convert = km * mile

    console.log(`2 km is = ${convert} miles`);
    
}
// 8) Javascript Program to Convert Celsius to Fahrenheit

{
    let c = 2
    let f = (c * 9/5) + 32

    let convert = c * f 

    console.log(`2 celcious is = ${convert} fehrenhit`);
    
}
// 9) Javascript Program to Generate a Random Number

{
    console.log(Math.random());
    
}

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero

{
    function check(a){
        if(a==0 && b==0){
            console.log(`${a} is zero`);
        }
        else if(a>0){
            console.log(`${a} is positive number`);
        }
        else{
            console.log(`${a} is nagetive number`);
        }
    }
    check(10)
}
// 11) Javascript Program to Check if a Number is Odd or Even

{
    function check(a){
        if(a % 2 == 0){
            console.log(`${a} is even number`);
        }else{
            console.log(`${a} is an odd number`);           
        }
    }
    check(7)
}
// 12)JavaScript Program to Find the Largest Among Three Numbers

{
    function largest(a,b,c){
        if(a>b && a>c){
            console.log(`${a} is largest`);
        }
        else if(b>a && b>c){
            console.log(`${b} is largest`);
        }
        else{
            console.log(`${c} is largest`);
        }
    }
    largest(10,2000,100)
}
// 13)JavaScript Program to Check Prime Number

{
    function Prime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0 || num == 1 || num == 0) {
                console.log(`${num} is not a prime number`);
            }
            else{
                console.log(`${num} is a prime number`);               
            }
        }
        
    }
    Prime(2)
}
// 14)JavaScript Program to Print All Prime Numbers in an Interval



