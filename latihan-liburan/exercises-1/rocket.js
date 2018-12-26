/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
    if(param % 2 === 0){
        console.log('invalid input')
    }else{
        for(var i = 1; i < param;i++){
            var result = ''
                if(i !== (param + 1) / 2){
                    for(j = 1; j <= param;j++){
                        if(j !== (param + 1)/2){
                            result += ' '
                        }else {
                            result += '*'
                        }
                    } console.log(result)
                }else{
                    for(j = 1; j <= param; j++){
                        result += '*'
                    }console.log(result)
                } 
        }
    } return result
    
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input