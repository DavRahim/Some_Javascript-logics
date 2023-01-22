var arr = [6, 7, 8, 9, 4];



//orginal map

var sqr = arr.map(function(value, index, arr){

    // return Math.floor( Math.random() * 100)    
      return value * value

})

console.log(arr)
console.log(sqr)









// my map

var arr2 = [3, 9, 50, 50]

var sqr = arr2.map(function(value){
    return value * value
})


console.log(sqr)

// // call back map

function myMap(arr, cb){
    var newArray = [];

    for(var i = 0; i < arr.length; i++){
        
        // var temp = arr[i] * arr[i]

        var temp = cb(arr[i],i, arr)
        
        newArray.push(temp)
    }
     
    return newArray
} 


var orArray = myMap(arr2, function(value, index, array){

     console.log(value, index, array)
    return value, index, array
})

console.log(orArray)








var arr4 = [40, 70, 50, 20, 10, 2]



function myMop(arr2, cb){
    var newArry = []

    for(var i = 0; i < arr2.length; i++){
          
      var temp =  cb(arr2[i], i, arr2)

      newArry.push(temp)
    }

    return newArry
}


var orginal = myMop(arr4, function(value, index, array){

    return value * 2
    // console.log(value, index, array)
})

var mten = myMop(arr2, function(value){
    return value + 2
})

console.log(arr2)

 console.log(orginal)

 console.log(mten)
 



console.log(myMop(arr2))


 var sqr = arr2.map(function(value){
    return value + 4
 })

 var sqr2 = arr2.map(function(value){
    return value * value
 })


 console.log(sqr);
 console.log(sqr2)
