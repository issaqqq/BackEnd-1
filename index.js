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

//object in JS
// var obj = {
//     name : "John",
//     age : 44
// }

// this is a function
// function greet(){
//     return "Hello World";
// }
// var reply = greet();

// line by line code chale isey kehte hai synchronous 
//jo code async nature ka ho, usey side stack mein bhej do and agle code ko chaloa jo bhi sync nature ka ho, jab bhi saara sync code chal jaye, tab check karo ki async code complete hua ki nhi, agar wo complete hua ho toh usey main stack mein laao and chala do. isey kehte hai asynchronous
