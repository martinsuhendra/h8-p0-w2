function persegi(param1,param2)
{
    if(param1 === 0 || param2 === 0 ){
        return 'invalid value'
    }else{ 
        for(i = 0 ;i < param2;i++){
        var result = ''
        if(i === 0 || i === param2 - 1){
            for(j = 0 ; j < param1;j++){
                result += '#'
            }
            console.log(result)
        }else{
            for(j = 0 ; j < param1;j++){
                if(j === 0 || j === param1 - 1){
                    result += '#'
                }else{
                    result += ' '
                }
            }
            console.log(result)
            }   
        }
    }
    return ''
}

console.log(persegi(5,7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 