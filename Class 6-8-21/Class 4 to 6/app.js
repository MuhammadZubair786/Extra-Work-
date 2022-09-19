function abc(){
    window.open("index2.html","width=420,height=380,left=100,top=100")
}

// function getdata(){
//     var d = document.getElementById('lastNameField')
//     if(d.value.length==0){
//         alert("Enter Value")
//        d.focus()
//        d.style.backgroundColor='red'
//     }
//     else{

//     d.style.backgroundColor='blue'
// }}

// function getdata(){
//     var d = document.getElementById('states')
//     // if(d.value==''){
//     //     alert("No")
//     // }
//     // else{
//     //     alert("Ok")
//     // }
//     // if(d.selectedIndex==0){
//     //     alert("No")
//     // }
//     // else{
//     //     alert("Ok")
//     // }
// }

// function getdata(){
//     var radios = document.getElementsByName("r1");

//     for (var i = 0; i < radios.length; i++) {
//          if (radios[i].checked) {
//          return true;
//        }

//       }
//       alert("Please check one.");
     
//        return false;

      
        
// }

// function getdata(){
//     var e = document.getElementById('email').value
//     if(e.indexOf(" ") === 0){
//         alert("no space ")
//     }
    
// }

// function abc(){
//     try {
//         adddlert("Welcome guest!");
//       }
//       catch(err) {
//       throw err.message
//       }
// }


// es6 ECMAScript 2015 is also known as ES6 and ECMAScript 6
// The let keyword
// The const keyword
// Arrow Functions
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array.keys()
// Array.find()
// Array.findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Iterables Object.entries
// JavaScript Modules

// var ==>Functional Scope
// let or const=>Block Scope

// let a = 10;
// function abc(){
//     if(true){
//         var a = 5
//     }
    
//    console.log(a) 
   
//    console.log(a)//5
// }
// console.log(a) //10

// abc()

// function abc(){
//     alert("hello")
// }


//  abc = ()=>{
//     alert("hello")
// }
// abc = name =>{
//    return 'Hello'+name
// }

// abc = name => 'Hello : '+name



// var data = abc("zubair")
// console.log(data)

// var arr = ["Asad","Ali","Khan"]
// for(var i of arr){
//     alert(i)
// }

// var a = [2,4,6,8]

// var d = a.map(a=>a**2)
// console.log(d)

// var d = a.filter(a=>a>2)
// console.log(d)

// Template literal

// var data = 123;
// var data2 =345
// document.write("first Value  is : "+data+" Second Value is : "+data2+"Result is : "+(data+data2))

// document.write(`First Number : ${data} Second Value is : ${data2} = Result is ${data+data2}`)


var arr =[15,46,78,45]
var arr2 = [23,45,67]
// var arr3 = arr.concat(arr2)
// var arr3 = [...arr, ...arr2]

console.log(arr3)


// num1 = arr[0]
// num2 = arr[1]
// console.log(num1,num2)

// const [num1,num2]=arr
// console.log(num1,num2)