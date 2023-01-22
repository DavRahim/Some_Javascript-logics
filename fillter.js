var arr = [2, 5, 67, 8, 45, 56, 3, 45, 5]

var odd = arr.filter(function(value){
    return value % 2 === 1;
})

console.log(odd)

var even = arr.filter(function(value){
    return value % 2 === 0;

})

console.log(even)





//my filter

var arr3 = [40, 20, 40, 50, 30, 21, 23, 33, 45, 90]

function myFilter(arr, cb){

    var newArr3 = []


    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i], i, arr)){

            var temp = arr[i]
            newArr3.push(temp)
        }
    }

    return(newArr3)
}


var odd = myFilter(arr3, function(value){
    return value % 2 === 1
})

var even = myFilter(arr3, function(value){
    return value % 2 === 0
})

console.log('It is a odd number = ' + odd)
console.log('it is a even number = ' + even)




// console.log(myFilter(arr3))