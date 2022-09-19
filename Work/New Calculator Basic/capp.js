var lst = ["Pakistan","India","South Africa"]
var pk = ["Karachi","Hyderabad","Islamabad","Lahore"]
var ind = ["Mumbai","Delhi","Chennai","Hyderabad"]

function data(){
    var a  = document.getElementById('country')
    for(var i =0 ; i<lst.length;i++){
        if(i==0){
        a.innerHTML += `<option value=" "></option>`
    }
   
        a.innerHTML += `<option value=${lst[i]}>${lst[i]}</option>`
   
}
}

function selectcity(){
    var getcity = document.getElementById('country').value;
    console.log(getcity)
    
    document.getElementById('citylist').classList.remove('hid')

    var city = document.getElementById('city')

    if(getcity == 'Pakistan'){
        city.innerHTML = ""
        for(var i = 0;i<pk.length;i++){
            city.innerHTML +=`<option value=${pk[i]}>${pk[i]}</option>`
        }
    }
   else if(getcity == 'India'){
    city.innerHTML = ""
        for(var i = 0;i<ind.length;i++){
            city.innerHTML +=`<option value=${ind[i]}>${ind[i]}</option>`
        }
    }

    else{
        document.getElementById('citylist').classList.add('hid')
    }
}