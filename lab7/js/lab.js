/**
 *
 * Author: Alise Morgan & Stella Brown
 * Created: 18 October 2021
 * License: Public Domain
 *
 **/

// sortUserName -  a function that takes the user input and letters and sorts the
// letters of their name
 function sortUserName() {
   var userName = window.prompt("Please enter your username")
   console.log("username", userName);
   // split string to array
   var nameArray = userName.split();
   console.log("nameArray =", nameArray);
   //sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort=", nameArraySort);
   //join array back to string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted");
   return nameSorted
 }

// Output
document.writeln(your name is fixed !: ", sortUserName"(), "</br>");
