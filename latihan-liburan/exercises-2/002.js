function soal2(param){
    var newArray = [];
    var tampungArray = [];
    var count = param.length - 1;

    for(i = 0; i <= Math.round(param.length / 2) - 1;i++){
        tampungArray.push(param[i]);
        
        if(count !== Math.floor(param.length / 2 - 1)){
            tampungArray.push(param[count])
            count--
        }
        if(tampungArray[0]===tampungArray[1]){
            tampungArray[1] = 'Instruktur'
        }
        newArray.push(tampungArray)
        tampungArray = [];
    }
    return newArray
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]