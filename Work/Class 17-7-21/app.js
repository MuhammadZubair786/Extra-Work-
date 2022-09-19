// // var a = document.getElementById('list').childNodes[1]
// var a = document.getElementById('list')
// console.log(a.nodeType)
// value = 3


// if(a.nodeType == 1){
//     alert("ok")
//     // value++;
//     console.log(a.childNodes[value])
//     var tg = document.getElementsByTagName('ul')
//  console.log(tg.childNodes)
// }
// else{
//     console.log(a.childNodes[value])
// }

// var a = document.getElementById('txt').childNodes
// console.log(a[1].childNodes[1].nodeValue)

// var x = document.getElementById("myDIV").firstChild;
// console.log(x.nodeValue)

// var a = document.getElementById('d1').hasAttribute('class')
// console.log()


// a= document.getElementById('d1').getAttribute('class')
// var b = a.split(" ")
// console.log(b)\

// a= document.getElementById('d1')
// a.setAttribute("class","fnt")

a = document.getElementById('txt')
var p = document.createElement('p')
var text = document.createTextNode("Hello")
// console.log(p)
// console.log(text)
var b = p.appendChild(text)
var h1 = a.firstChild
// a.insertAfter(h1,b)

a.removeChild(h1)
// a.appendChild(b)