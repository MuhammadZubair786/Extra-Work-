// function Pad(data){
//     str = data.toLowerCase()
//     split = str.split('')
//     split = split.reverse()
//     jstr = split.join("")

//     console.log(jstr)

//     if(jstr==str){
//         console.log("String Is Palindrome")
//     }
//     else{
//         console.log("String Is Not a Palindrome")
//     }
// }


// Pad("Madam")


// function Fletter(str)
// {
//   var strg = str.split(' ');
//   console.log(strg)
//   var strarr = [];

//   for(var x = 0; x < strg.length; x++){
//       strarr.push(strg[x].charAt(0).toUpperCase()+strg[x].slice(1));
//   }
//   return strarr.join(' ');
// }
// document.write("<br><br>"+Fletter("the quick brown fox")+"</h1>");

// abc("the quick brown fox")


// function len_string(str){
//     var split = str.split(" ");
//     var fstr = split[0].length;
//     var arr = []
//     console.log(split,fstr)
//     for (var i=0;i<split.length;i++){
//         if(split[i].length>fstr){
//             fstr = split[i].length
//             arr=split[i]
//         }

       
        
//     }
//     console.log( fstr,arr)
// }

// len_string("Web Development Tutorial")


// var a = new Date().getDay();

// switch (a) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       console.log(day)
    
//     case 6:
//       day = "Saturday";
//       console.log(day)
//   }

 
// a = 0
// switch(a){
//   case 0:
//     alert("Grade A +")
//   case 1:
//     alert("Grade B")
//   case 2:
//     alert("garde C")
//     break
//   default :
//   alert("fail")

// }

const grade = 70;

switch (grade) {
    // If score is 90 or greater
    case 87:
        console.log("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("B");
        break;
    // If score is 70 or greater
    case 70:
        console.log("C");
        break;
    // If score is 60 or greater
    case grade == 70:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("F");
}


function fillCity() {
 var cityName;
var zipEntered = document.getElementById("zip").value;
switch (zipEntered) {
 case "60608" :
 cityName = "Chicago";
break;
 case "68114" :
cityName = "Omaha";
 break;
 case "53212" :
  cityName = "Milwaukee";
 }
 document.getElementById("city").value = cityName; }
 