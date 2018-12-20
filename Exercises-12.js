function konversiMenit(menit) {
    var divideSixty = menit / 60;
    var modSixty = menit % 60;

    if (modSixty < 10){
        modSixty = '0' + modSixty
    }else{
    }

    return Math.floor(divideSixty) + ':' + modSixty;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00