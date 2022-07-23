// if i were to fileter out number 3, the function would be
// var arr = [1,2,3,4,5];
// var filter = arr.filter((number) => number = 3);
// console.log(filter);
// var arr = [1,2,3,4,5];
// var filter = arr.filter;
// function (number) { 
//     if (number = 3) {
//       console.log(filter);
//     }
//     else {
//         console.log("Mkuu cheki, hujui functions");
//     }
// }

//Damn

// Create a function that filters out negative numbers
var array = [1,2,3,-1,-2,-3];
array = array. filter(function(x) { return x < 0; });
console. log(array); 