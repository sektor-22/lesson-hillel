let parone;
let partwo;
let operate;
let result;

parone=prompt('Введите первый операнд');
parone=Number('parone');
alert(typeof parone);
if(typeof(parone) == Number){
    operate=prompt('Введите оператр');
    partwo=prompt('Ввведите второй операнд');
}else {
    alert('Ошибка ввода');
};


switch (operate) {
    case '+':
      result = +parone + +partwo;
      break;
    case '-':
      result = +parone - +partwo;
      break;
    case '*':
      result = +parone * +partwo;
      break;
      case '/':
        result = +parone / +partwo;
        break;
  }


alert(`${parone}${operate}${partwo}\=${result}`);