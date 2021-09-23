let userNum;
let userEven;
button.onclick = function showProm(){
 userNum = +prompt();
if (Number.isNaN(userNum) || userNum === 0){
  alert('Введите корректное значение!');
 }else{
  alert (`
    
       Check to simple: ${calcSimple()};\n
       Check to Integer: ${calcInteger()}\n
       Check to Even:   ${calcEven()}\n
          `);
    };
  };
let calcEven = () => {
 return userNum % 2 === 0 ? 'Even' : 'Odd'  ;
}
let calcInteger = () => {
  return Number.isInteger(userNum) ? 'Integer':'NoInteger';
}
let calcSimple = () => {
  for(let i = 2; i < userNum; i++){
    if (userNum % i === 0) {
      return ('Nosimple'); 
      };
    };
      return ('Simple' );
    };
