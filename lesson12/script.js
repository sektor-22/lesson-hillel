class Item {
  constructor(id, title, description, complete) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.complete = complete;
  }
}

class List {
  constructor(items = []) {
      this.items = items;
  }
  
  add() {}
  completeAll() {}

}

class TodoList extends List{

  add() {
      let title = prompt('Enter title: '),
          description = prompt('Enter description: '),
          complete = false,
          id = this.items.length + 1;

      const todoItem = new Item(id, title, description, complete);

      this.items.push(todoItem);
  }

  completeAll() {
      this.items.map((item) => {
          item.complete = true;
      })
  }

}