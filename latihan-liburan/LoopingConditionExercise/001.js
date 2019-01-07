/*
    ============
    Generate Bar 
    ============

    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 

*/

function generateBar(p,t) {
    for(i = 0; i < t; i++){
        var result = ''
        if(i === 0 || i === t - 1){
            for(j = 0;j < p;j++){
                result += 'o'
            }
            console.log(result)
        }else{
            for(j = 0; j < p;j++){
                if(j === 0 || j === p-1){
                    result += 'o'
                }else{
                    result += ' '
                }
            }  
            console.log(result) 
        }
    }
}

generateBar(4,3)//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) // 
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi 