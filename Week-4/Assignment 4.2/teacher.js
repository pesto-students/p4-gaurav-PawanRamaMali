var Person = function(){}

Person.prototype.initialize = function(name,age){
  this.name = name;
  this.age = age;
}

var Teacher = function(){};

Teacher.prototype.teach = function(teach){
  console.log(`${this.name} is now teaching ${teach}`)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

var him = new Teacher()

him.initialize('Adam',45);
him.teach('Inheritance')