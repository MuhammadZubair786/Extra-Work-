// // function abc(){
// //     alert("hello world")
// // }

// // abc()

// // function abc(a){
// //     alert("hello")
// //     alert(a)
// // }


// // function abc(a,b){
// //     alert("hello")
// //     alert(a+b)
// // }



// // abc(3)

// // function abc(a=2,b=3)
// // {
// //     alert(a+b)
// // }

// // abc(10)


// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function mul(a,b){
//     return a+b
// }

// function div(a,b){
//     return a/b
// }

// function main(a,b,op){
//     if(op=='+'){
//         return add(a,b)
//     }
//     else if(op=='-'){
//         return sub(a,b)
//     }
//     else if(op == '*'){
//         return mul(a,b)
//     }
//     else if(op=='/'){
//         return div(a,b)

//     }
//     else{
//         alert("Enter Correct Data")
//     }
// }

// var a = main(3,4,'-')
// console.log(a)

console.log("Start CALL BACK FUNCTION")

function getcall  (data) {
        if (data == 'evening') {
            evening(alertGreeting)
        }
   else if (data == 'morning') {
           morning(alertGreeting)
        }
  else {
            night(alertGreeting)
        }
 
  }

function evening (alertGreeting){
    console.log('Evening')
    alertGreeting()
}
function morning  (alertGreeting){
    console.log('Morning')
    alertGreeting()
}
function night  (alertGreeting){
    console.log('Night')
    alertGreeting()
}
const alertGreeting=()=> {
    console.log("hello world")
}
getcall('Night')
console.log("End CALL BACK FUNCTION")
