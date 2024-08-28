// console.log("week1")

function sum(a,b)
{
    return parseInt(a)+parseInt(b);
    // parsINT is type casting 
}

let ans = sum("2",30)
// console.log(ans)



function sum_to_n(n)
{
    let sum = 0
    for(let i =1;i<=n;i++)
    {
        sum = sum+i;
    }

    return sum
}

// console.log(sum_to_n(5))



// Io-Heavy Operations 

const fs = require("fs")
// const contents = fs.readFile("F:\\Development\\100XDev\\Week2_Async_JS\\a.txt","utf-8");  // Reading file asyncronously
// console.log(contents)


const contents_b = fs.readFileSync("F:\\Development\\100XDev\\Week2_Async_JS\\b.txt","utf-8"); // Reading file syncronously
// console.log(contents_b) 


function read(path)
{
    const contents_b = fs.readFileSync(path,"utf-8");
    console.log(contents_b)
}

// read("F:\\Development\\100XDev\\Week2_Async_JS\\b.txt")




/////////////////////////////// Functional Arguments : Passing a function to another function as an arguments ///////////////////

function sum(a,b)
{
    return a+b;
}

function multiply(a,b)
{
    return a*b;
}

function doOperation(a,b,op)
{
    return op(a,b)
}


// console.log(doOperation(2,3,sum));
// console.log("Multiplication",doOperation(2,3,multiply));




///////  Asynchronous opeartion 


function a(err,data)
{
    if(err)
    {
        console.log("Found Error ")
    }
    else{

        console.log(data);
    }
}

fs.readFile("F:\\Development\\100XDev\\Week2_Async_JS\\a.txt","utf-8",a);

fs.readFile("F:\\Development\\100XDev\\Week2_Async_JS\\b.txt","utf-8",a);

console.log("Hare KRishna")

