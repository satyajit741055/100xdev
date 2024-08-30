const fs = require("fs")



// function readTheFile(sendtheFinalValueHere)
// {
//     fs.readFile("F:\\Development\\100XDev\\Week2_Async_JS\\Day1\\a.txt","utf-8",function(err,data){
//         sendtheFinalValueHere(data)
//     })
// }

// function readFile(fileName)
// {
//     return new Promise(readTheFile)
// }




// const p = readFile();

// function callback(contents)
// {
//     console.log(contents);
// }


// p.then(callback)


// function setTime(resolve)
// {
//     setTimeout(resolve,3000)
// }


function setTimeoutPromisified()
{
    return new Promise((resolve,reject)=>
    {
     
            setTimeout(resolve,3000)
        
    });
}



const p = setTimeoutPromisified()

function data()
{
    console.log("Hare Krishna")
}



p.then(data);