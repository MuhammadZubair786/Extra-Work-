// var date = new Date().toString().slice(0,3)
// console.log(date)


// switch(date) {
//  case "Sat" :
//  alert("Whoopee");
//  break;
//  case "Sun" :
//  alert("Whoopee");
//  break;
//  case "Fri" :
//  alert("TGIF!");
//  break;
//  default :
//  alert("Shoot me now!");
//  }

var a = 12

// switch(a){
//     case 10:
//         console.log("Data 10")
//     case 11:
//         console.log("Data 11")
//     case 12:
//         console.log("Data 12")
//         break
//     default:
//         console.log("default")
// }

switch(a){
    case a>10 && a<11:
        console.log("Data 10")
    case a>11 && a==11:
        console.log("Data 11")
    case a>=12 && a<=20:
        console.log("Data 12")
    default:
        console.log("Default")
}