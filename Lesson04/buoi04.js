// Bai 1
var findEven = [4,8,11,15,17,6,20,16,19];

for (index = 0; index < findEven.length; index++) {

    if (findEven[index] % 2 == 0) {
        console.log('Giá trị' + ' ' + findEven[index] + ' ' + 'là số chẵn');
    }
}

// Bai 3
function numberOneTriangle(t){
    for (let i=1; i <= t; i++){
      let eachLine = ''
  
        for (let j=1; j<=i; j++)
        {
          eachLine += 1
        }
        eachLine = eachLine.trim();
        console.log(eachLine);
    }
  }
  
  let t = 5 ;
  numberOneTriangle(t);