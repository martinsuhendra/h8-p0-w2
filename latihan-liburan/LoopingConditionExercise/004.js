/*
    ================
    simple Trapesium
    ================

    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)

    Program ini memiliki 2 release. 
    yaitu : 

    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo

    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo

*/

function trapesiumRelease0(t) {
    var count = t;
    for(var i = 0; i < t;i++){
        var result = '';
        for(var j = 0; j < count; j++){
            result += 'o'
        }
        count++
        console.log(result)
        
    } 
    return ''
}

console.log(trapesiumRelease0(5))
/* 
trapesiumRelease0(5)
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

function trapesiumRelease1(t) {
    var count = t
    for(var i =0;i < t;i++){
        var result = ''
        for(var j = 0;j < count;j++){
            if(i === 0 || i === t - 1){
                result += 'o'
            }else if(j=== 0 ||j === count - 1){
                result += 'o'
            }else{
                result += ' '
            }
        }
        count++
        console.log(result)
    }
    return ''
}

console.log(trapesiumRelease1(5))
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/

