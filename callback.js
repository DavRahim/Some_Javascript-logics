function sample(a, b, cb){
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}

function sum(a, b){
    return a + b
}
var result = sample(5,8,sum)
console.log(result)

console.log(sample(5,8))

 callback

function sample(a, b, cb){
    var c = a + b // 5 + 8 = 13
    var d = a - b // 5 - 8 = -3

    var result = cb(c, d)
    return result
}
 var result = sample(5, 8, function(c, d){
    return c - d // 13 + 3 = 16

 })

console.log(result) // 16


var result2 = sample(50, 30, function(x, y){
    return x * y
})

console.log(result2)



function callBack(k, j, red){
    var multi = k + j
    var modulus = k % j

    var result3 = red(multi, modulus)
    return result3
}

var result4 = callBack(61, 50, function(t, r){
    return t % r
})

console.log(result4)



function exm(x, y, udd){
    var j = x * y
    var k = x / y

    var result5 = udd(j, k)

    return result5
}


var result6 = exm(50,25, function(h, f){
    return h * f
})

console.log(result6)






