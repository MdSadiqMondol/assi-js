
// 1. kilometerToMeter,,,,,

function kilometerToMeter(kilometer) {

   // at first my program cheak input data type, if it number then easily run,,
   var inputType = typeof (kilometer);
   if (inputType == "number") {
      //if input number negetive then  show an error,,
      if (kilometer >= 0) {
         meter = kilometer * 1000;
      } else {
         return ("Error!!,, Distance can't be negative.")
         //  meter = "unvalid";
      }
      return meter;
   }
   // now my program cheak that , is input data type sring or bolean? 
   //if sring it will be modified as number,and if boolean, say true for 1 ,false for 0,,
   else if (inputType == "string" || "boolean") {
      var modifiedInputType = Number(kilometer);
      //if find my program any chr in string,, show error,,
      if (isNaN(modifiedInputType)) {
         return ("Error!!,, You should have to enter any number not chr in string or boolean data.")
      } else {
         if (modifiedInputType >= 0) {
            meter = modifiedInputType * 1000;
         }
         //if input number negetive then  show an error,,
         else {
            return ("Error!!,, Distance can't be negative.")
            //  meter = "unvioolid";
         }
         return meter;
      }
   }
   // for others type input, my program show an error,,
   else {
      return ("Error!!,, You should have to enter string or boolean rype data.")
   }
}
// //for test, active those line
// console.log(kilometerToMeter(756));
// console.log(3 * kilometerToMeter("100"))


// 2. budgetCalculator,,,,

function budgetCalculator(watch, phone, laptop) {
   // price alwas exist number, so my program cheak input data type, if it number then easily run,,
   var inputTypeA = typeof (watch);
   var inputTypeB = typeof (phone)
   var inputTypeC = typeof (laptop)

   if (inputTypeA !== "number") {
      return ("Error!!,, You should have to enter any number");
   }
   if (inputTypeB !== "number") {
      return ("Error!!,, You should have to enter any number");
   }
   if (inputTypeC !== "number") {
      return ("Error!!,, You should have to enter any number");
   }

   // for only number input, my program is,,
   else {
      var totalCostForWatch = watch * 50;
      var totalCostForPhone = phone * 100;
      var totalCostForLaptop = laptop * 500;

      return totalCostForWatch + totalCostForPhone + totalCostForLaptop;
   }
}
// //for test, active those line
// console.log(budgetCalculator(4, 3, 1));
// console.log(budgetCalculator(6, "jh", 2));
// console.log(budgetCalculator(6, true, 2))

// 3. hotelCost,,,,

function hotelCost(day) {
   var typOfDay = typeof (day)
   //   input number if you want actual output,,
   if (typOfDay !== "number") {
      return ("Error!!,, You must have to enter amount of day by number");
   } else {
      var hotelFee = 0;
      // for first 10 days
      if (day <= 10) {
         hotelFee = day * 100;

      }
      // for first 200 days
      else if (day <= 20) {
         var hotelFeeA = 10 * 100;
         var remaining = day - 10;
         var hotelFeeB = remaining * 80;
         hotelFee = hotelFeeA + hotelFeeB;
      }
      // for first any amount of days
      else {
         var hotelFeeA = 10 * 100;
         var hotelFeeB = 10 * 80;
         var remainingB = day - 20;
         var hotelFeec = remainingB * 50;
         hotelFee = hotelFeeA + hotelFeeB + hotelFeec;
      }
      return hotelFee;
   }

}
// //for test, active those line
//  console.log(hotelCost("66"))
//  console.log(hotelCost(66))

//4. megaFriend,,,

function megaFriend(friends) {
   // show the rwsult as a string, so initially say ' ' ,,
   var maxLenthName = '';
   for (var i = 0; i < friends.length; i++) {
      // re store or change max name acording to lenth,,
      if(friends[i].length > maxLenthName.length) {
         // final friends name,,
         maxLenthName = friends[i];
      }
   }
   return maxLenthName;
}
// // //for test, active those line
// console.log(megaFriend(['cr3', 'hgkjhjf8', 'tok4', 'juhtg6']));
// console.log(megaFriend(["jy3", "jth4", "yhuy5"]));
