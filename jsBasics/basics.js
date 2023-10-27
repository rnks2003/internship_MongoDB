// Arrays 
var arr = [
    // heterogenety
    0,
    "ele1",
    // object in array
    {
        key : "value"
    },
    // array in array
    [0,1,2]
]

// objects
var obj = {
    key1 : "value1",
    key2 : "value2",
    // array in object
    key3 : arr,
    // object in object
    key4 : { key: "value"}
}

// console logging
console.log("\nConsole Logging : ");
console.log("arr : ",arr,'\nobj.key1 : ',obj.key1);

// for loops
console.log("\nFor loops : ");
for( var i=0;i<arr.length;i++){
    console.log(i," : ", arr[i]);
}

