const acceptGenders = ["male","female","non-binary","transgender","Intersex","n/a"];

let person = {
    _name:"name",
    _age:0,
    _gender:"n/a",
   
    set name (value) {
      this._name = value;
    },

    get name (){
      return this._name;
    },

    set age (value){
      if (value > 0 && value < 120){
       this._age = value;
    }
     return this._age;
    },

    get age (){
      return this._age;
    },

    set gender (value) {
      if (acceptGenders.includes(value)){
      this._gender = value;
      }
      return this._gender;
    },

    get gender (){
      return this._gender;
    },
  };

Object.defineProperties(person, {
  _name: {enumerable:false},
  _age: {enumerable: false},
  _gender: {enumerable:false}
});

console.log(person);







