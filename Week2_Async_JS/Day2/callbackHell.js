// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2



 


function hi()
{
    console.log("Hi called")
    setTimeout(hello,3000)
}


function hello()
{
    console.log("Hellow")
    setTimeout(hellothere,5000)
}


function hellothere()
{
    console.log("Hellow there")
}



// setTimeout(hi,1000)

function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });
