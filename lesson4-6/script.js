let userNum;
let userEven;
button.onclick = function() {
 userNum = prompt();
 userNum = +userNum;
 if (Number.isNaN(userNum)){
  alert(' Введите корректное значение!' );
 }else{
  alert (userNum % 2 === 0 ? ' Odd'  : ' Even' );
  alert (Number.isInteger(userNum) ? 'Integer':'NoInteger');
  for(let i = 2; i < userNum; i++){
      if(userNum % i === 0) {
        alert(' Nosimple' )
        } else {
        alert(' Simple' )
        };
      break
    };
  }; 
};

