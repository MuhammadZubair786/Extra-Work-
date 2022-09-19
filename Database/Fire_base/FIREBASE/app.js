

const sigup = () => {
    const name = document.getElementById('Name').value
    const City = document.getElementById('City').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const clas = document.getElementById('Class').value

    // console.log("Email :",email)
    // console.log("Password :",password)


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("User Register :",user)
            // obj=>Key,value
           var obj = {
                Name :  name ,
                Email : email,
                City : City,
                password :password,
                class : clas
            }

            if(clas=='1'){
                firebase.database().ref('/Sudent').child('/Class_1').push(obj)
            }

            else if(clas == "2"){
                firebase.database().ref('/Sudent').child('/Class_2').push(obj)
             
                // firebase.database().ref('/Teacher').child('/Junior').push(obj)
            }

          
           
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error Code",errorCode)
            console.log("Error Message",errorMessage)

            // ..
        });
}

Home = ()=>{
    window.location = "home.html"
}

Student = ()=>{
    firebase.database().ref('/Sudent').child('/Class_2').once('value',function(snp){
     const data = snp.toJSON()
        // console.log(data)
        const value = Object.values(data)
        // console.log(value)
    
      lis = document.getElementById('user_name')
    value.map((data)=>{
        Br = document.createElement('br')
        lis.appendChild(Br)
       elem = document.createElement('b')
       text = document.createTextNode(`User Name : ${data.Name}`)
       
       elem.appendChild(text)
       lis.appendChild(elem)

       

        
        
    })

        
      
    })
}

// user=>teacher(password == corect admin)


// teacher

// database == "teacher123" teacher
// sudent



firebase.auth().sigInWithEmailAndPassord()