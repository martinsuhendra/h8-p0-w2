/*
    =========
    Triangel
    =========

    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********

    triangel(3)
    output:
        *    
       ***
      *****

*/

function triangel(t) {
  
if(t === 1){
    console.log('t is invalid')
}else{
     for(var i = 0; i < t; i++){
     var result = ''
        for(var j = 0; j < (t - i);j++){
           result += ' '
        }
        for(var k = 0; k <= i;k++){
           result += '* '
        } 
            console.log(result)
        }
    }
}

triangel(3)
/*
      *    
     ***
    *****
*/

triangel(5)
/*
        *    
       ***
      *****
     *******
    *********
*/

triangel(1) // t is invalid