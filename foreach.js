var arr = [2, 5, 7, 8, 9, 4]


// foreach
var sum = 0;
arr.forEach(function(value, index, array){
    console.log(value, index, array)
    sum += value
})

console.log(sum)







// forEach emaliment

function forEach(arr, cb){
    for(var i  = 0; i < arr.length; i++){
        cb(arr[i], i, arr)

    }
}

var sum = 0;

forEach(arr, function(value, index, arr){
        console.log(value, index, arr)
       
        sum += value
       
})

console.log(sum)







// re new foreach

function forEach(arr, cb){
    for(var i = 0; i < arr.length; i++){
        cb(arr[i], i , arr)
    }
}


var sum = 0

forEach(arr, function(value, index, arr){
    console.log(value, index, arr)

    sum += value
})


console.log(sum)










