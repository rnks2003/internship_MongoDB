// Arrays 
var arr = [0,"ele1",{key : "value"}]

// objects
var obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : arr
}

// console logging
console.log("\nConsole Logging : ");
console.log("arr : ",arr,'\nobj.key1 : ',obj.key1);

// for loops
console.log("\nFor loops : ");
for( var i=0;i<arr.length;i++){
    console.log(i," : ", arr[i]);
}