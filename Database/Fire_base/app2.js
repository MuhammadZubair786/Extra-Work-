console.log(localStorage.getItem('user_email'))
var a= localStorage.getItem('user_email')
document.getElementById('user').innerText+=a

firebase.database().ref('student').orderByChild('Email').equalTo('USHAIKHPTCL@GMAIL.COM').once('value', (snapshot) => {
   var data = snapshot.toJSON()
   console.log(data)

})