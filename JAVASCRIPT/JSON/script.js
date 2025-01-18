// java script object notation
// used to convert js into json or json into js

// javascript to json format

// {
//     let obj = {name:"srushti" , age:19 , gender:"female"}
//     console.log(obj);

//     let jsonobj = JSON.stringify(obj)
//     console.log(jsonobj);
    
// }

// json to javascript

// {
//     let obj = '{"name":"srushti" , "age" : 19}'

//     console.log(obj);
    
//     let jsobj = JSON.parse(obj)
//     console.log(jsobj);
    
// }

// javascript fetch

// {
//     async function data(){
//         let res = await fetch("http://localhost:3000/profile")
//         let dataa = await res.json()
//         console.log(dataa.name);  
//     }

//     data()
// }

//javascript function

// {
//     function sum(a,b){
//         console.log(a+b)
//     }

//     sum(10,20)
// }
// {
//     function sub([a,b]){
//         console.log(a-b);
        
//     }
//     sub([10,20])
// }

{
    arr1 = [10,20]
    arr2 = [30,40]

    function multi(){
        console.log(...arr1);
        console.log(...arr2);
        console.log(arr1[0] * arr2[1]);
    }
        multi()
}

// javascript arrow function

// {
//     let func = (a,b) => console.log(a+b);
//     func(10,30)

// }

// const sum = () => {
//     console.log('helloooooooooooooooooooooooooooooo');
// }
// sum()

// syncronous or asyncronous function

/*
setTimeout
clearTimeout
setInterval
clearInterval
*/

setTimeout(() => {
    console.log("heloooo guyessss");
},10000)

const func = setInterval(() => {
    console.log("hiiiiiiiiiii");
}, 2000)

console.log(func);

setInterval(() => {
    clearInterval(func)
}, 10000)