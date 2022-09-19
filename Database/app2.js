console.log(localStorage.getItem('Current_user Uid'))
var a = localStorage.getItem('Current_user Uid')

console.log(a)

firebase.database().ref().child('Resturant').orderByChild('uid').equalTo(a).once('value')
    .then((snap) => {
        var data = snap.toJSON();
        // console.log("Not json",snap)
        // console.log("JSON",data)



        if (data == null) {

            firebase.database().ref().child('User')
                .orderByChild('uid')
                .equalTo(a)
                .once('value')
                .then((snap) => {
                    var data = snap.toJSON();

                    const value = Object.values(data)

                    console.log("user:", value[0].email)

                    document.getElementById('email').innerText = value[0].email
                    document.getElementById('name').innerText = value[0].Name

                    // firebase.database().ref('Resturant').once('value')
                    //     .then((data) => {
                    //         var js = data.toJSON()
                    //         console.log(js)
                    //     })
                    //     .catch((err) => {
                    //         console.log(err)
                    //     })

                    firebase.database().ref('Resturant').once('value', (snapshot) => {

                        const data11 = snapshot.toJSON()
                        const value = Object.values(data11)
            
                        console.log("Resturants:",value)
                    })


                })

        }

        else {

            // const key = Object.keys(data)
            // console.log(key)
            const value = Object.values(data)
            console.log(value)

            console.log("Resturant:", value[0].email)

            document.getElementById('email').innerText = value[0].email
            document.getElementById('name').innerText = value[0].Name

           var user_data = []

             var data = document.getElementById("user_data")
           

            firebase.database().ref('User').once('value', (snapshot) => {

                const data11 = snapshot.toJSON()
                const value = Object.values(data11)
                
                value.forEach(v=>
                 
                   user_data.push(v)   
                )
               

                user_data.map((v,i)=>{
                    // console.log("User No :",i)
                    // console.log("User Value :",v)
               
                    var ele1 = document.createElement('h1')
                    var text = document.createTextNode(`User Name :${v.Name}`)
                    ele1.appendChild(text)
                    var ele2 = document.createElement('h3')
                    var text2 = document.createTextNode(`User Email :${v.email}`)
                    ele2.appendChild(text2)
                    data.appendChild(ele1)
                    data.appendChild(ele2)

                })
               
                
            })
           

          


          

          
        }


    })