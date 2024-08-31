const fs = require("fs")
function readFilePromisified(fileName)
{
    return new Promise((resolve,reject)=>
    {
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if (err)
            {
                reject(console.log("Some Error while Handling"))
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
    const content = await readFilePromisified("F:\\Development\\100XDev\\Week2_Async_JS\\Day1\\a.txdt")
    console.log(content)

}



readData()