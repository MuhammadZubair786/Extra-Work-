var lst = ["Pakistan","India","South Africa"]
function call(){
   var a = document.getElementById('country')
   for(var i=0;i<lst.length;i++){
       if(i==0){
        a.innerHTML+=`<option value=''></option>`
       }
       a.innerHTML+=`<option>${lst[i]}</option>`
   }
}
var pakcity = ['karachi','lahore','islamabad']
var incity = ['Delhi','Bombay','Abc']

function select(){
    var country = document.getElementById('country').value;
    var city =  document.getElementById('city');
    var getcity ;
    console.log(country)

    document.getElementById('maincity').classList.remove('hid')
    if(country == 'Pakistan'){
        city.innerHTML =``
       
        for(var i=0;i<pakcity.length;i++){
            getcity += `<option>${pakcity[i]}</option>`
        }
        city.innerHTML +=`${getcity}`

    }
    else if(country == 'India'){
        city.innerHTML =``
      
        for(var i=0;i<incity.length;i++){
            getcity += `<option>${incity[i]}</option>`
        }
        city.innerHTML +=`${getcity}`

    }
    else{
        document.getElementById('maincity').classList.add('hid')

    }

}