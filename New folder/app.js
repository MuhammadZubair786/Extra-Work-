//  milisecond=document.getElementById('msec');
//  second=document.getElementById('sec');
//  mintues=document.getElementById('min');
//  Last=document.getElementById('get')

// var  milisec2=0
// var  snd2=0

// var interval2;


// function timer2(){
//     milisec2++
//     var milisecond=document.getElementById('msec');
//     second=document.getElementById('sec');
//     mintues=document.getElementById('min');
//     Last=document.getElementById('get')
//     milisecond.innerText=milisec2

//     if(milisec2>=100){
//         milisec2 =0
//         snd2 ++
//         second.innerText=snd2
        
//     }else if(snd2>=60){
//         mint2++
//         snd2 =0
//         mintues.innerHTML=mint2
//     }



// }

// function start2(){
//     interval2=setInterval(timer2,10)
//     document.getElementById("sbtn").disabled = true;
//     document.getElementById("stbtn").disabled = false;


// }
// function stop2(){
//     clearInterval(interval2)
//     document.getElementById("sbtn").disabled = false;
//     document.getElementById("stbtn").disabled = true;

// }

// function reset2(){
//     if(milisec2>0 || snd2>0 || mint2>0){
//         console.log('Last Time Out :'+mint2+":"+snd2+":"+milisec2)
//         Last2.innerText='Last Time Out :'+mint2+":"+snd2+":"+milisec2
//     }
//     milisec2=0
//     snd2=0
//     mint2=0
//     milisecond2.innerText=milisec2
//     second2.innerHTML=snd2
//     mintues2.innerHTML=mint2
//     stop2()


// }

window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue ='hello';
    
  });

