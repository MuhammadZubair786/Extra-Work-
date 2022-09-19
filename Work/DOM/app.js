// console.log(document.childNodes[1].firstChild.childNodes[1])

// setInterval(function abc(){
//     console.log("Hi")
// },1000)
var mil=0 ;
var snd=0;
var mnt=0;


function timer(){
    var milsec = document.getElementById('mili')
    var sec = document.getElementById('sec')
    var min = document.getElementById('min')

   
    mil +=1;
    milsec.innerText = mil
    if(mil>100){
        mil = 0;
        snd +=1;
        sec.innerText = snd;
    if(snd>60){
        snd = 0 ;
        mnt +=1;
        min.innerText =mnt

    }

    }

}


function start(){
    setInterval(timer, 100);
   
}