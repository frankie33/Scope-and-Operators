
let user = {
  firstName: "Coder",
  lastName: "Bill",
  fullName: function() {
     return this.firstName + " " + this.lastName;
  }
};


//With the given object, using the this keyword,
//add a method named fullName that concatenates 
//the firstName and lastName with a space in between.

let product = {
  cost: 12000,
  deliveryFee: 200,
  newPayments: function() {
     return (this.cost + this.deliveryFee)/10;
  }
};

 //With the given object, using the this keyword,
 //add a method named newPayments that adds the 
 //cost and deliveryFee together then divides 
 //by 10. Hint: You may need () for the addition.

let odd = 7;
let even = 20;
let greaterThan;
if(even>19 && odd>19){
   greaterThan = true;
} else {
   greaterThan = false;
}

 //Using the logical operator for AND,
 //fill in the if statement to check if even and odd are greater than 19.

let odd = 7;
let even = 20;
let greaterThan;
if(even>19 || odd>19){
   greaterThan = true;
} else {
   greaterThan = false;
}
//Using the logical operator for OR, fill in the if statement to check if even or odd is greater than 19.

let odd = 7;
let even = 20;
let equalTo;
if(even === odd){
   equalTo = true;
} else {
   equalTo = false;
}
//Using the comparison operator for equal value and equal type, fill in the if statement to check if even is equal to odd.

let firstSet = ["q", "w", "e", "r", "t", "y"];
let secondSet = ["1", "3", "3", "7"];
let cluster=[...firstSet, ...secondSet]
//Using the spread operator combine the given arrays into given variable cluster.

let goodGrades = ["A", "B"];
let notSoGoodGrades = ["C", "D", "F"];
let grades=[...goodGrades, ...notSoGoodGrades]
//Using the spread operator combine the given arrays into given variable grades.


