function soal1(param)
{
    var char = ['!','@','#'];
    var result = []

    if(param !== 0){
        for(i = 0;i < param ;i++){
          var count = i % char.length;
          result.push(char[count])
          }
    }else{
        return 'invalid.input'
    }
    return result
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(20));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input