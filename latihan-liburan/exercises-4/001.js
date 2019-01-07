function soal1(param)
{
    var arr = []
    for(i = 1; i <= param;i++){
        if(i > 3 && i % 4 === 0 && i % 7 !== 0){
            arr.push('Fizz')
        }else if(i % 7 === 0 & i % 4 !== 0){
            arr.push('Buzz')
        }else if(i % 4 === 0 && i % 7 === 0){
            arr.push('FizzBuzz')
        }else{
            arr.push('')
        }
    }
    return arr
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']


