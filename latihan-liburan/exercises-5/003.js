function soal3(param1)
{
    var result = []
    var count = 1;
    for(i = 0; i < param1;i++){
        var tampung = []
        if(i % 2 === 0){
        for(j = 0;j < param1;j++){
            tampung.push(count)
            count++
        }
        result.push(tampung)
        tampung = []
    }   else if(i % 2 === 1){
        for(j = 0;j < param1;j++){
            tampung.unshift(count)
            count++
        }
        result.push(tampung)
        tampung = []
        }
    }
    return result
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/
