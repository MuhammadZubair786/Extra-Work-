var ul_list=document.getElementById('unorder')
console.log(ul_list)

function add(){
    item_val = document.getElementById("inp")
    if(item_val.value == ""){
        alert("no")
    }
    else{
    list_item = document.createElement('li')
    list_value = document.createTextNode(item_val.value)
    list_item.appendChild(list_value)
    list_item.setAttribute('class','list')

    ul_list.appendChild(list_item)

    edit_btn = document.createElement('button')
    edit_value = document.createTextNode("Edit")
    
    edit_btn.setAttribute('class',"btn btn-success edit")
    edit_btn.setAttribute('onclick','edit(this)')

    del_btn = document.createElement('button')
    del_value = document.createTextNode("Delete")
    
    del_btn.setAttribute('class',"btn btn-danger delete")
    del_btn.setAttribute('onclick','del(this)')
  
    
    edit_btn.appendChild(edit_value)
    del_btn.appendChild(del_value)

    list_item.appendChild(del_btn)
    list_item.appendChild(edit_btn)

    item_val.value=" "
    
}
}
function edit(e){
    console.log( e.parentNode.childNodes[0])
    inp = e.parentNode.childNodes[0].nodeValue
     edit = prompt("Enter Edit Value",inp)
     if(edit == ""){
         alert("Enter Value")
     }
     else{
         e.parentNode.childNodes[0].nodeValue=edit
     }
}

function del(e){
    console.log(e.parentNode.childNodes[0])
    e.parentNode.remove()
}

function dele(){
    ul_list.innerHTML=""
}
