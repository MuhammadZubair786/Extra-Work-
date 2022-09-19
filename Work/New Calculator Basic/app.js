function getdata(num){
    var b = document.getElementById('res')
    b.value+=num

}

function getres(){
    var b = document.getElementById('res')
    b.value = eval(b.value)

}