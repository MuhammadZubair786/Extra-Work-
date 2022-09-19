var mil = 0;
var snd =0; 
var mnt =0;
var interval 

function timer(){
    var milsec = document.getElementById('millsec');
    var sec = document.getElementById('sec');
    var min = document.getElementById('min');

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
     interval = setInterval(timer,10)
    document.getElementById('start').disabled= true
    document.getElementById('stop').disabled= false
   
}

function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;

}
function reset(){

    var milsec = document.getElementById('millsec');
    var sec = document.getElementById('sec');
    var min = document.getElementById('min');

    mil = 0 ;
    snd =0 ;
    mnt = 0;
    milsec.innerText = 0;
    sec.innerHTML = 0;
    min.innerText=0;
    // stop()

}