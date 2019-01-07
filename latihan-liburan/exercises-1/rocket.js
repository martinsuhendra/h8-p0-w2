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
function benderaInggris(param){
    if(param % 2 === 1){
        for(var i = 0; i < param;i++){
            var result = ''
            for(var j = 0; j < param;j++ ){
                if(i === (param - 1)/2){
                    result += '*'
                }else if(j === (param - 1)/2){
                    result += '*'
                }else{
                    result += ' '
                }
            }
            console.log(result)
        } return ''
    }else{
        return 'invalid input'
    }
}

console.log(benderaInggris(3))

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