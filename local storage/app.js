function get(){
    var inp = document.getElementById('data')
    var res = document.getElementById('get')
    if(inp.value=='')
    {
        alert("no")
    }
    else{
        var stg = localStorage.getItem('data');
      if(stg == null){
          obj_tsk = []
      }
      else{
        obj_tsk = JSON.parse(stg)

      }
      obj_tsk.push(inp.value)
      localStorage.setItem('data',  JSON.stringify(obj_tsk))
      obj_tsk.forEach(element => {
        var obj = document.createElement('h1')
        var val = document.createTextNode(element)
         obj.appendChild(val)
         res.appendChild(obj)

      });
    }
}