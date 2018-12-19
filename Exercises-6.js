//1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var i = 2;
while(i < 22){
    console.log(i + ' - I love coding');
    i += 2;
}
console.log('LOOPING KEDUA');
var i = 20;
while(i > 0){
    console.log(i + ' - I will become fullstack developer');
    i -= 2;
}


//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(i = 1; i < 21; i++){
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(i = 20; i > 0; i-- ){
    console.log(i + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
console.log('COUNTER GANJIL GENAP');
for(counter = 0; counter < 101; counter++){
    if(counter % 2 === 0){
        console.log(counter + ' - GENAP');
    }else{
        console.log(counter + ' - GANJIL');
    }
}

console.log('COUNTER KELIPATAN 3');
for(counter = 0; counter <= 100; counter++){
    if(counter % 3 === 0){
        console.log(counter + ' KELIPATAN 3');
    }else {
        console.log(counter);
    }
}
console.log('COUNTER KELIPATAN 6');
for(counter = 0; counter <= 100; counter++){
    if(counter % 6 === 0){
        console.log(counter + ' KELIPATAN 6');
    }else {
        console.log(counter);
    }
}

console.log('COUNTER KELIPATAN 10');
for(counter = 0; counter <= 100; counter++){
    if(counter % 10 === 0){
        console.log(counter + ' KELIPATAN 10');
    }else {
        console.log(counter);
    }
}