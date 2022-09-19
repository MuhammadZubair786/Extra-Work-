// // console.log(window.location.href)
// function data(){
// //  window.location.href='index2.html'
// history.go(3)
// }

// function data1(){
//     history.back()
// }

// function data2(){
//     history.forward()
// }

// function data3(){
//     window.location.href='index3.html'
//    }

function click2(){
    
   mywindow =  window.open('',"","width=300,height=200,left=300,top=300")
   if ( mywindow  === null) {
    alert("Please disable your popup blocker.");
     }
     mywindow.close();
}