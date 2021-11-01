/**
 *
 * Author: Alise Morgan & Stella Brown
 * Created: 18 October 2021
 * License: Public Domain
 *
 **/

function addThree(x){
    return 3 + x;
}

//test function
console.log("3 + 1", addThree(1));
console.log("3 + 2", addThree(2));
console.log("3 + 3", addThree(3));

// my array
numberArray = [ 1, 3, 4, 6, 9]
console.log("numberArray", numberArray);

result = numberArray.map(addThree);
//should return [4, 6, 7, 9, 12]
console.log("numberArray plus 3", result);

result = numberArray.map(function(x){
    return x + 4;
})
// should return (5) [5, 7, 8, 10, 13]
console.log("My array plus 4", result);

result = numberArray.map(function(x){
    return x - 1;
})
// should retun [0,2,3,5,8]
console.log("My array minus 1", result);
