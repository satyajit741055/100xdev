class Rectangle{

    constructor(width,height,color="red")
    {
        this.width=width;
        this.height=height;
        this.color=color;
    }

    area()
    {
        return this.width*this.height;
    }
    paint()
    {
        console.log(`color ${this.color}`);
    }

}


// const rect = new Rectangle(15,2,"vkaj")
// console.log(rect.area())
// rect.paint()



const now = new Date();
console.log(now.getFullYear())



const a = new Map();
a.set("name","satyajit")
a.set("age",30)

console.log(a)