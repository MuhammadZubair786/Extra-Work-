var files ;

const select = ()=>{
    var inp = document.createElement('input')
    inp.type = 'file'
    inp.accept = 'image/*'

    inp.onchange = e =>{
        files = e.target.files;
        // reader = new FileReader();
        // console.log(reader.result)
        // reader.onload = function(){           
        // }
        // reader.readAsDataURL(files[0])
        console.log(files[0])
     
    }
    
    inp.click()
  
}

const upload = ()=>{

    console.log(files[0])

   
    var storageRef = firebase.storage().ref();

    var uploadTask = storageRef.child(`images/${files[0].name}`).put(files[0]);

    uploadTask.on('state_changed', 
      (snapshot) => {
      
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        if(progress==0){
          alert("Upload Process Star\n Plz Wait For Upload Image In Data Base")
        }

        if(progress==100){
          alert("Upload Process Finish \n Successfully Upload Image In Data Base")
        }
      
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
          
            break;
        }
      }, 
      (error) => { console.log(error)}, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            img_url =   downloadURL;
          console.log('File available at', downloadURL);
       
        });
      }
    );
   

}

const abc = ()=>{
    console.log("helo:",data)
}