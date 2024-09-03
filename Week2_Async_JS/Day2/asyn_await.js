const fs = require("fs")
function readFilePromisified(fileName)
{
    return new Promise((resolve,reject)=>
    {
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if (err)
            {
                reject("Some Error while Handling")
            }
            else
            {
                resolve(data)
            }
        }
        )
    })
}




async function readData(){
    try {
        const content = await readFilePromisified("F:\\Development\\100XDev\\Week2_Async_JS\\Day1\\a.txdt")
        console.log(content)
    }
    catch(err)
    {
        console.error(err)
    }
}



readData()