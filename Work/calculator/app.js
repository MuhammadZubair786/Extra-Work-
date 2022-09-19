function getdata(num){
    console.log(num)
var result = document.getElementById("res")
result.value += num;
}

function getresult(){
    var result = document.getElementById("res")
    // console.log(result.value)

    result.value = eval(result.value)
    
}