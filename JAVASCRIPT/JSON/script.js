// java script object notation
// used to convert js into json or json into js

// javascript to json format

{
    let obj = {name:"srushti" , age:19 , gender:"female"}
    console.log(obj);

    let jsonobj = JSON.stringify(obj)
    console.log(jsonobj);
    
}

// json to javascript

{
    let obj = '{"name":"srushti" , "age" : 19}'

    console.log(obj);
    
    let jsobj = JSON.parse(obj)
    console.log(jsobj);
    
}