/* 
    ===================
    Two Array Operation
    ===================

    Buatlah sebuah Program yang dapat mengoperasikan bilangan - bilangan yang ada
    didalam 2 buah array sesuai dengan masing - masing indexnya.

    [INSTRUCTION]
    diberikan 2 buah array yang akan dioperasikan 
    - iika bilangan tersebut berada pada index yang genap, maka tambahkan (+)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - iika bilangan tersebut berada pada index yang ganiil, maka kurangkan (-)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - iika paniang ke dua array tidak sama , 
    maka masukkan saia bilangan - bilangan tersebut ke dalam hasilnya 

    [EXAMPLE]
    twoArrayOperation([1,2,3],[1,2,3])
    array1 : [1, 2, 3]
              +  -  +
    array2 : [1, 2, 3]
    result : [2, 0, 6]

    twoArrayOperation([12,34,11,23,12],[11,78,45,20,42])
    array1 : [12, 34, 11, 23, 12]
               +   -   +   -   +
    array2 : [11, 78, 45, 20, 34]
    result : [23,-44, 56, 3, 46]

    twoArrayOperation([-4, 5, 57, 33, -90, 0],[4, 2, 54, 24])
    array1 : [-4, 5, 57, 33, -90, 0]
              +   -   +   -    +
    array2 : [4,  2, 54, 24,  34]
    result : [0,  3, 111, 9, -56, 0]

*/

function twoArrayOperation(arr1,arr2) {
    var result = []
        for(var i = 0;i < arr1.length;i++){
            if(i % 2 === 0){
               var math = arr1[i] + arr2[i]
               result.push(math)
            }else if(arr2[i] === undefined){
               var math = arr1[i]
               result.push(math)
            }else{
                var math = arr1[i] - arr2[i]
                result.push(math)
            }
        } 
    return result
}

console.log( twoArrayOperation([-4,5,57,33,-90,0],[4,2,54,24,34]) ) // [ 0, 3, 111, 9, -56, 0]
console.log( twoArrayOperation([12,34,11,23,12],[11,78,45,20,42]) ) // [ 23, -44, 56, 3, 54 ]
console.log( twoArrayOperation([1,2,3],[1,2,3]) ) // [ 2, 0, 6 ]