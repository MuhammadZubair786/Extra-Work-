function chg(){
     
    document.getElementById('head').className+=" bg";

    // document.getElementById('head').style.fontSize = "100px";
    document.getElementById("head").style.margin = "100px 100px 0 100px";

}

// var a = document.getElementsByTagName('p')
// console.log(a[2].innerText)


var a = document.childNodes[1].childNodes[2].childNodes[1]
console.log(a.innerText)