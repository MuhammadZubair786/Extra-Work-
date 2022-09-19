// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7, 8, 9, 10]
// };


// function calcAnnual() {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     console.log(thisMo)
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//             bestPrice = plan1.price * .8;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }


// var annualPrice = calcAnnual();

// console.log(annualPrice)

// var data = [
//     {
//         name : 'zubair',
//         role : "hr",
//         sal : 20000
//     },
//     {
//         name : "asad",
//         role  : "trainer",
//         sal  : 10000
//     },
//     {
//         name : 'Omer',
//         role : "hr",
//         sal : 30000
//     },
//      {
//         name : 'Omer',
//         role : "trainer",
//         sal : 30000
//     },


// ]

// function inc_sal(){
//     var hr_data = []
//     for (var i in data){
//         if(data[i].role == 'hr') {
//            hr_data.push(data[i])

//         }
//     }
//     return hr_data
// }

// var hr_inc_sal = inc_sal()
// console.log(hr_inc_sal)
// console.log(data)

// function inc_sal(){
//     var hr_data = []
//     for (var i in data){
//         if(data[i].role == 'hr') {
//           data[i].sal = data[i].sal*2
//           console.log(data[i])
//         }
//     }

// }

// var hr_inc_sal = inc_sal()
// console.log(data)


// function User(fname, lname, role, sal) {
//     //Instance MEMBER
//     this.fname = fname,
//         this.lname = lname,
//         this.role = role,
//         this.sal = sal
//     // this.name = function(){
//     //     return this.fname+' '+this.lname
//     // }
// }

// var User_1 = new User("usman", "Niazi", "admin", 5000)

// var chk = 'fname' in User_1
// console.log(chk)
// User_1.name = function () {
//     return this.fname + ' ' + this.lname
// }

// PROtotype member
// User.prototype.name = function () {
//         return this.fname + ' ' + this.lname
//     }

// var User_2 = new User("omer", "Niazi", "admin", 5000)

// data.push(User_1)
// var User_1 = new User("khalid","worker",1000)
// data.push(User_1)
// console.log(User_1)
// console.log(User_1.name())
// console.log(User_2.name())

function abc(){
    // event.preventDefault();
    // window.location.reload();
    // window.location.href = window.location.href;
  
    // window.location.hash='asad'
    // window.location.assign('file:///G:/Saylani/Work/Object/home.html')
    history.forward()
}

var loc = window.location.href
var hname = window.location.pathname
console.log(loc,hname)

