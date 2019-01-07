/*
    wajib pseudocode. 

    Jawaban pseudocode disini 
    
*/

function soal2(param)
{
    var alphabet = ['a','b','c','d','e','f','g','h',
                    'i','j','k','l','m','n','o','p'
                    ,'q','r','s','t','u','v','w','x'
                    ,'y','z','a','b','c','d','e','f'
                    ,'g','h','i','j','k','l','m','n'
                    ,'o','p','q','r','s','t','u','v'
                    ,'w','x','y','z','a','b','c','d'
                    ,'e','f','g','h','i','j','k','l'
                    ,'m','n','o','p','q','r','s','t'
                    ,'u','v','w','x','y','z']

    //buat perulangan untuk ambil indeks ke param - 1 peratama

    //membuat variabel untuk menampilkan hasil dari array yang di push
    var newArray = []

    //membuat sebuah variabel penampung untuk dimasukkan ke variabel newArray
    var tampungArray = []

    var count = 0

    if(param === 0){
      return 'invalid input'

    }
    else{ for( i = 0; i < param; i++){
        for(j = 0; j < param;j++){
            tampungArray.push(alphabet[count])
            count++
        }
        newArray.push(tampungArray)
        tampungArray = []
    }

    return newArray
    }
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input