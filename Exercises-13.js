function xo(str) {
    var counterX = 0;
    var counterO = 0;
    for(i = 0; i < str.length; i++){
        var result = str[i];
        if(result === 'x'){
            counterX = counterX + 1;
        }else{
            counterO = counterO + 1;
        }
    } if(counterO === counterX){
        return true // sudah dikoreksi dari return str = true
    }else{
        return false // sudah dikoreksi dari return str = false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true