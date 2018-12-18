//1. Menyusun Barisan Bintang
console.log('Menyusun barisan bintang');
var rows1 = Math.floor((Math.random()* 10)+1);
console.log(rows1);
for(i = 0; i<rows1;i++){
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = Math.floor((Math.random()* 10)+1);
console.log(rows2);
for(i = 1; i <= rows2; i++){
    var str = ''
    for(j = 1; j <= rows2 ;j++){
        str += '*';
    }
    console.log(str);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = Math.floor((Math.random()* 10)+1);
console.log(rows3);
for(i = 1; i <= rows3; i++){
    var str = ''
    for(j = 1; j <= i; j++){
        str += '*'
    }
    console.log(str);
}