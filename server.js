// array mein kuch bhi dal sakte HTMLDetailsElement, array, number, string, function, object, EventCounts.
var array = [1, 2, 3, 4, 5, "hey", true, function(){},["one", "two"]];
var arr = [1,2,3,4,5];

// forEach loop, it show the same array with some operation
// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

// map loop, it gives new array for new calculated values
// var newarr = arr.map(function(val){
//     return 12;
// })
// console.log(newarr);

// filter loop, it gives new array for filtered values(it also removes the unwanted values)
// var filterarr = arr.filter(function(val){
//     if (val>3) {return true;}
//     else {return false;}
// })
// console.log(filterarr);

// find loop, it gives only the first matched value
// var findarr = arr.find(function(val){
//     return val == 3;
// })
// console.log(findarr);

var obj = {
    name : "John",
    age : 44
}