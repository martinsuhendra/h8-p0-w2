function soal2(param)
{
  if(param % 2 === 0){
    return 'invalid input'
  }else{
        var result = [];    
        var count = 0;

        for(var i = 0; i < Math.round(param / 2);i++){
            var tampung = [];
            for(var j = 0; j < param;j++){
                if( j <= Math.floor(param / 2) + count && j >= Math.floor(param / 2) - count){
                  tampung.push('*')
                }else{
                  tampung.push('')
                }
            }
            result.push(tampung)
            count++
        }
        return result
  }
}

console.log(soal2(5))
/*

  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input

