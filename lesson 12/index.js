const todoItemsList = document.querySelector('.items-list');
const input = document.querySelector('#new-item');
const btn = document.querySelector('#add-item');

btn.addEventListener('click', () => {
    const todoText = input.value.trim();
    if (todoText) {
        todos.addItem(todoText);
    } else {
        alert('Строка пустая!');
    }
    input.value = '';
})

class TodoItem {

    constructor(text) {
        this._completed = false;
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }

}

class TodoList {
    constructor(list) {
        this.list = list || [];
    }

    addItem(item) {
        this.list.push(new TodoItem(item))
        this.renderItems();
    }

    renderItems() {
        while (todoItemsList.hasChildNodes()) {
            todoItemsList.firstChild.remove()

        }
        for (let item of this.list) {
            let wrapper = document.createElement('div');

            let itemText = document.createElement('p');
            itemText.innerHTML = item.text;
            if (item.completed) {
                itemText.classList.add('complete');
            }

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.completed;

            checkbox.addEventListener('change', () => {
                item.completed = !item.completed
                this.renderItems();
            })

            wrapper.append(itemText);
            wrapper.append(checkbox);
            todoItemsList.append(wrapper)

        }
    }
}

let todos = new TodoList();

todos.addItem('Убрать в квартире');
todos.addItem('Выгулять собаку');
todos.addItem('Сделать домашнее задание');
