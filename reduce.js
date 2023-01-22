//only reduce


var arr = [3, 50, 31, 60, 40, 50]

 var ree = arr.reduce(function(pre, curr){

    // return 
//    return Math.max(pre, curr)

   return pre + curr

}, 100)

console.log(ree)


var arr2 = [2, 5, 6, 7, 8]

var max =arr2.reduce(function(prev, curr){
    return Math.max(prev, curr)
})

console.log(max)





//my emlimrnt reduce

var arr3 = [4,6,87,89,9,9]

function myReduce(arr, cb, acc){
    for(var i = 0; i < arr.length; i++){
         acc = cb(acc, arr[i])
    }

    return acc
}


var max = myReduce(arr3, function(prev, curr){
    return Math.max(prev, curr)
},1)

console.log(max)


var sum = myReduce(arr3, function(pre, curr){
    return pre + curr
},100)

console.log(sum)



