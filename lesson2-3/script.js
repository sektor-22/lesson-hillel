let parone;
let partwo;
let operate;
let result;

parone = prompt('Введите первый операнд');
parone == +parone;
if(Number.isNaN(parone)){
    alert('Ошибка ввода');
}else {
    operate = prompt('Введите оператор');
    partwo = prompt('Ввведите второй операнд');
  
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

