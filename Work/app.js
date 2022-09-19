// function getcity(){
//     var a = document.getElementById('zip').value;
//     var city;
//     switch (a) {
//         case "711":
//             city = "Hyd"
//             break;
//         case "710":
//             city = "karachi"
//             break;
//         case "712":
//             city = "Islamabad"
//             break;
//         default :
//         city = "Incorrect Zip Code"
            
//     }
//     document.getElementById('city').value = city;
// }
function test(){
    var a = document.getElementById('select_zip').value;
    var city;
    switch(a){
        case '7110':
            city="hyderabad";
            break;
        case '7112':
            city="Karachi";
            break;
       default :
            city="Inccorect Zip Code";
            
    }
    document.getElementById('city').value=city;
}

function show(){
    document.getElementById('add').setAttribute("class","para");
    document.getElementById("para").removeAttribute("class");
    document.getElementById("hid").removeAttribute("class");
}

function hid(){
    document.getElementById('add').setAttribute("class","show");
    document.getElementById("para").setAttribute("class","para");
    document.getElementById("hid").setAttribute("class","para");
}

// function expandLoris() {
//      var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
//     make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
//     distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
//     adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
//     Slow lorises have a toxic bite, a rare trait among mammals.`;
//      document.getElementById("slowLoris").innerHTML += expandedParagraph;
//      }


function show(){
    document.getElementById('lnk').setAttribute('class','para')
    document.getElementById('para').removeAttribute('class')
    document.getElementById('hid').removeAttribute('class')

}

function hid(){
    document.getElementById('para').setAttribute('class','para')
    document.getElementById('hid').setAttribute('class','para')
    document.getElementById('lnk').removeAttribute('class','para')
}

