/*
    ========================
    Multidimensi into String
    ========================

    [INSTRUKSI]
    diberikan sebuah array multidimensi, tugas kalian adalah mengconvert
    dari array multidimensi menjadi string 

    [RULE]
    - array harus multidimensi , bila tidak multidimensi output : "input is invalid"

    [EXAMPLE]
    multidimensiIntoString([
        [4,3,2,1,5],
        [4,2,7,9,3],
        [7,4,3,7,3],
        [4,6,3,6,8],
        [3,2,5,6,4]
    ])  
    output: 4321542793743734636832564

    multidimensiIntoString([1,2,3,4])
    output: input is invalid

*/

function multidimensiIntoString(arr) {
    if(arr[0][0] === undefined){
        console.log('invalid input')
    }else{
        var newString = ''
        for(var i = 0;i < arr.length;i++){
            for(var j = 0; j < arr[i].length;j++){
                newString += arr[i][j]
            }
        }
        console.log(newString);
    }
}

multidimensiIntoString([
    [4,3,2,1,5],
    [4,2,7,9,3],
    [7,4,3,7,3],
    [4,6,3,6,8],
    [3,2,5,6,4]
])  
// 4321542793743734636832564

multidimensiIntoString([1,2,3,4])
// input is invalid

