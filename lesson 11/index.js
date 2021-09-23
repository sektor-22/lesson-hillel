const header = document.createElement('h1');
header.innerHTML = 'Vladislav Titov';

const paragraph = document.createElement('p');
paragraph.innerHTML = `
Задача: создать страницу с элементами &#60;h1&#62;, &#60;p&#62; и &#60;button&#62; без использования html, 
а лишь используя методы объекта window.document. В заголовке &#60;h1&#62; должны быть ваше имя и фамилия, в &#60;p&#62; 
- текст задания, которое вы сейчас выполняете. В &#60;input&#62; можно что-то ввести, если нажать на кнопку то будет 
выведен alert с введенным в поле значением и после закрытия alert'а поле будет очищаться
`;
paragraph.style.width = '300px'

const input = document.createElement('input');

const button = document.createElement('button');
button.innerHTML = 'alert message';
button.addEventListener('click', () => {
    alert(input.value);
    input.value = '';
})

document.body.append(header);
document.body.append(paragraph);
document.body.append(input);
document.body.append(button);
