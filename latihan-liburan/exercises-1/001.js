function soal1(param)
{
    for(var i = 0; i <= 0;i++){
        var result = '';
        if(param === 0){
            console.log('invalid input')
        }else if(param % 2 === 1){
            for(j = 1; j <= param; j++){
                if(j === (Math.floor(param/2) + 1)){
                result += '[*]'
                    }else{
                    result += '[]'
                    }
            }
        }else{
            for(j = 1; j <= param; j++){
                 if(j === Math.floor(param/2) || j === Math.floor(param/2 + 1)){
                result += '[*]'
                }else{
                result += '[]'
                }
             }
        }
        
            }
    return result
}



// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']