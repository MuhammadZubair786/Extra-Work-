var ImgName , ImgUrl;
var files = []
var reader = new FileReader();
var data ;

// var a = document.getElementById('img')
// a.onchange = e =>{
//     console.log(e)
// }


// select

document.getElementById('select').onclick = function(e){
    var inp = document.createElement('input')
    inp.type = 'file'
    inp.accept = 'image/*'
    inp.click()
  
    inp.onchange = e =>{
        files = e.target.files;
        
        
        console.log(files[0])
    }
    
   
}

document.getElementById('upload').onclick = async()=>{
  console.log(files[0])

   
    // var storageRef = firebase.storage().ref();
    // var uploadTask = storageRef.child('images/rivers.jpg').put(files[0]);

    // uploadTask.on('state_changed', 
    //   (snapshot) => {
      
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');

    //     if(progress==100){
    //         alert("Ok")
    //     }
    //     switch (snapshot.state) {
    //       case firebase.storage.TaskState.PAUSED: // or 'paused'
    //         console.log('Upload is paused');
    //         break;
    //       case firebase.storage.TaskState.RUNNING: // or 'running'
    //         console.log('Upload is running');
    //         break;
    //     }
    //   }, 
    //   (error) => {
    //     // Handle unsuccessful uploads
    //   }, 
    //   () => {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         data =   downloadURL;
    //       console.log('File available at', downloadURL);
    //       abc()
    //     });
    //   }
    // );
   

}

const abc =()=>{
console.log(data)
}