
function Enemy(name,age,reasonHate,enemyGender,enemyRace){
    this.name = prompt("Введите имя врага");
    this.age = prompt("Возраст врага");
    this.reasonHate = prompt("Причина вражды");
    this.enemyGender = prompt("Пол врага");
    this.enemyRace = prompt("Раса врага");
};

let enemy = new Enemy();

console.log(enemy);

arr = [enemy];

console.log(arr);
