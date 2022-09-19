// var d = new Date()
// console.log(d)
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getDay())
// console.log(d.getTime())
// var td = new Date('May 5,2021')
// var main = new Date()
// var tds = Date.now()
// var mains= main.getTime()
// console.log(tds,mains)
// // console.log(mains-tds)
// var ms= mains-tds
// var ddiff= ms/(1000*60*60*24)
// console.log(ddiff)
// console.log(Math.floor(ddiff))
// var age  = new Date(ms)
// console.log(age)
// console.log(age.getUTCFullYear())
// // console.log(ddiff.getDay())
// // var age = new Date(ms)
// var data = new Date('5 May 2021')
// var month = Date.now()-data.getTime()
// console.log(month)

// calculate age
var birthYear = 1999
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
age = currentYear - birthYear;
console.log(age)

// calculate Second
var DOB = 'May 5,1999'
var mils = Date.parse(DOB)
var mt = Date.now()
console.log(mt)
console.log(mils)

var agemilliseconds= mt-mils

var milliseconds = agemilliseconds
var sec = milliseconds/1000
var second = 1000;
var minute = second*60;
var hour = minute*60;
var day = hour*24;
var month = day*30; 

  var year = day*365;

//let the age conversion begin
var years = Math.round(milliseconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(milliseconds/hour);
var seconds = Math.round(milliseconds/second);
console.log("Year :",years)
console.log("Months :",months)
console.log("Day : ",days)
console.log("Hours : ",hours)
console.log("Second :",seconds)



// a=new Date()
// year = a.setYear(2012)
// diff  = a.getYear()-year
// console.log(diff)



// abc()

// var a ="hello"
// function abc(){
//     console.log("hello")
// }

function abc(c,a=2,b=5){
    
    console.log(a+b+c)
}

abc(4)





// const date1 = new Date();
// const date2 = new Date('7/10/1999');
// console.log(date1)
// console.log(date2)
// const diffTime = Math.abs(date2 - date1);
// var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

// var ms =  Math.abs(date1-date2) / 1000;
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");
//  diffDays = Math.ceil(ms /(3600)%24);
//  diffDays = diffDays*3600
// console.log(diffDays) 

// var date1 = new Date(2010, 6, 17);
// var date = new Date();

// var diff = new Date(date1.getTime() - date.getTime());
// // diff is: Thu Jul 05 1973 04:00:00 GMT+0300 (EEST)

// console.log(diff.getUTCFullYear() - 1970); // Gives difference as year
// // 3

// console.log(diff.getUTCMonth()); // Gives month count of difference
// // 6

// console.log(diff.getUTCDate() - 1); // Gives day count of difference
// 4


