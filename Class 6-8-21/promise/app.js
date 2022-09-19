// var promise = new Promise((res,rej)=>{
//     var center = 'open'
//     if(center=='open'){
//         res('SMIT OPEN')
//     }
//     else{
//         rej('SMIT CLOSE')
//     }
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// var promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         numb = Math.floor((Math.random()*10))
//         if(numb%2==0){
//             res(numb)
//         }
//         else{
//             rej(numb)
//         }
//     },1000)

// })
// .then((data)=>{
//     console.log("Resolve",data)

// })
// .catch((err)=>{
//     console.log("Reject : ",err)
// })