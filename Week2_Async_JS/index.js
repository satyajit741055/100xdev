// const fs = require("fs")


// // function print(err,data)
// const print = (err,data) => {
//     if(err)
//     {
//         console.log("file not found")
//     }
//     else
//     {
//         console.log(data)
//     }
// }


// const content = fs.readFile("an.txt","utf-8",print);

// // setTimeout(1000);

// const conten = fs.readFile("b.txt","utf-8",print);

// console.log("content")

class Rectangle {
    constructor(width,height,color='blue')
    {
        a.width = width;
        a.height= height;
        a.color = color;
    }

    area()
    {
        const area = a.width * a.height;
        console.log(a)
        return area;
    }

    paint()
    {
        console.log(`Painting with color ${a.color}`);
    }
}


// const rect = new Rectangle(2,4);
// const area = rect.area();

// console.log(area);
// console.log(rect.paint());
// console.log(rect)


const l = () =>{
    console.log("HAre Krishna");
}


setTimeout(l,1000);