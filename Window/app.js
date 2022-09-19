function call() {
   
         var testPop = window.open("", "","width=100,height=100");
         if (testPop === null) {
         alert("Please disable your popup blocker.");
         }
         testPop.close();
         }