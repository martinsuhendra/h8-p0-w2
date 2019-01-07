function rocket(param)
{
    var tampung = [];
    for(i = 0; i < param;i++){
        var arr = []
        if(param % 2 === 1){
            for(j = 0; j < param;j++){
                if( i === Math.floor(param / 2) && j === Math.floor(param / 2)){
                    arr.push('*')
                }else{
                    arr.push('')
                }
            }
            tampung.push(arr)
        }else if(param % 2 === 0){
            for(j = 0; j < param; j++){
                if(i === param / 2 - 1 && j === param/ 2 - 1){
                    arr.push('*')
                }else if( i === param / 2 - 1 && j === param / 2){
                    arr.push('*')
                }else if( i === param / 2 && j === param / 2 - 1){
                    arr.push('*')
                }else if( i === param / 2 && j === param / 2){
                    arr.push('*')
                }else{
                    arr.push('')
                }
            }
            tampung.push(arr)
        }
    }
    return tampung
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/