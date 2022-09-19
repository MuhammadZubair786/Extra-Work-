ul_list = document.getElementById('unorder')
console.log(ul_list)

firebase.database().ref('student').on('child_added',function(data){
    // console.log(data.val())
    var ele = document.createElement('li')
    var text = document.createTextNode(data.val().name)
    ele.style.marginTop=5+'%'
    ele.appendChild(text)
    ul_list.appendChild(ele)

    e1 = document.createElement('button')
    e_value = document.createTextNode('Edit')
    e1.setAttribute('class','btn')
    e1.setAttribute('class','btn-warning')
    e1.setAttribute('onclick','edit(this)')
    e1.setAttribute('id',data.val().key)
    e1.style.marginLeft='50%'
    e1.appendChild(e_value)
    ele.appendChild(e1)

    d1 = document.createElement('button')
    d_value = document.createTextNode('Delete')
    d1.setAttribute('class','btn')
    d1.setAttribute('class','btn-danger')
    d1.setAttribute('onclick','del(this)')
    d1.setAttribute('id',data.val().key)
    d1.style.marginLeft=2+'%'

    d1.appendChild(d_value)
    ele.appendChild(d1)
})

function additem(){

    data = document.getElementById('data')

    key = firebase.database().ref('student').push().getKey()

    var obj = {
        name : data.value,
        key: key
    }

    firebase.database().ref(`student/+${key}`).set(obj)

    // var ele = document.createElement('li')
    // var text = document.createTextNode("data")
    // ele.style.marginTop=5+'%'
    // ele.appendChild(text)
    // ul_list.appendChild(ele)

   
    // e1 = document.createElement('button')
    // e_value = document.createTextNode('Edit')
    // e1.setAttribute('class','btn')
    // e1.setAttribute('class','btn-warning')
    // e1.setAttribute('onclick','edit(this)')
    // e1.style.marginLeft='50%'
    // e1.appendChild(e_value)
    // ele.appendChild(e1)

    // d1 = document.createElement('button')
    // d_value = document.createTextNode('Delete')
    // d1.setAttribute('class','btn')
    // d1.setAttribute('class','btn-danger')
    // d1.setAttribute('onclick','del(this)')
    // d1.style.marginLeft=2+'%'

    // d1.appendChild(d_value)
    // ele.appendChild(d1)
}

function edit(e){
    console.log(e.id)
    var p = e.parentNode.childNodes[0]
    var e1 = prompt("Edit",p.nodeValue)
    
    e.parentNode.childNodes[0].nodeValue=e1
    obj = {
        name : e1,
        key: e.id
    }
    firebase.database().ref(`student/+${e.id}`).set(obj)
}

function del(e){
    e.parentNode.remove()
    firebase.database().ref(`student/+${e.id}`).remove()

}


function del_all(){
    
    ul_list.innerHTML=' '
    firebase.database().ref(`student`).remove()

}