/*Assignment 1 Promisified version of 
setTimeout
fetch
fs.readfile */ 




// Set Time out promisified 
function setTimeoutPromisified(time)
{
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    })
}

const p = setTimeoutPromisified(3000)


function doafter()
{
    console.log("Time Done")
}


// p.then(doafter)


// setTimeout(doafter,3000)




// Promisisfied version of Read File 

const fs = require("fs")
function readFilePromisified(fileName)
{
    return new Promise((resolve,reject)=>{
        console.log("Inside")
        fs.readFile(fileName,"utf-8",(err,data)=>
        {
            if (err)
            {
                reject("No File Found");
            }
            else
            {
                resolve(data);
            }
        })
    })
}


const data = readFilePromisified("F:\\Development\\100XDevd\\Week2_Async_JS\\Day1\\a.txt")


data.then((content)=>{
    console.log(content);
}).catch((error)=>
{
    console.log("Error",error);
})