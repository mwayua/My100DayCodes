// function sort() {
//     // var arr = [1,2,3,4,5,6,7,8,9,10];
//     // var x = arr.sort();
//     // return console.log(x);
// }

// var arr = [1,2,3,4,5,6,7,8,9,10];
//     var x = arr.sort();
//     console.log(x); // i seem to have a problem here


// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.sort();
// console.log(arr.sort()); // same as here

var arr = [10,9,8,7,6,5,4,3,2,1];
arr.sort(function(a, b) {
    return a - b;
  });
  
  console.log(arr); //finally this works

//  var arr = [1,2,3,4,5,6,7,8,9,10];
//  arr.sort();
// //  function arrSort(a,b) {
// //     return a + b;
// //  }
// console.log(arr.sort()); // this doesn't work

// var arr = [1,2,3,4,5,6,7,8,9,10]];
// arr.sort(function(a, b) {
//     return a + b;
//   });
  
//   console.log(arr); //hehe, doesn't works

