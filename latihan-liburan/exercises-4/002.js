function soal2(param)
{
    if(param.length > 2){
        var result = []
        var times = param[0] * param[param.length - 1]
        if(param.length % 2 === 1){
            for(var i = 0;i < param.length;i++){
                if(i !== Math.floor(param.length/2)){
                    result.push(param[i])
                }else{
                    result.push(times)
                }
            }
            return result
        }else{
            for(var i = 0;i < param.length;i++){
                if(i === (param.length / 2) || i === (param.length / 2) - 1 ){
                result.push(times)
                 }else{
                result.push(param[i])
                }
            }
            return result
        }
    }else{
        return 'invalid input'
    }
}

console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 