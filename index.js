/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//a//
//for (let a = 0; a < 21; a++) {
  //console.log(a);
//}

//b//
//for (let b = 3; b < 30; b += 3) {
     //every three
  //console.log(b);
//}

//c//
//12, 10, 8, 6, 4, 2, 0, -2, -4, -6 

//for(let i=12;i > -14;i-=2) {
    //console.log(i);
//}

//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let name = "LaunchCode";
console.log(name);

let arr = [1, 5, 'LC101', 'Blue', 42]
console.log(m);



//Construct ``for`` loops to accomplish the following tasks:
  //a. Print each element of the array to a new line.
  //b. Print each character of the string - in reverse order - to a new line. */ 

for (let i = 0; i < name.length; i++) {
  console.log(i.reverse);
}

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  