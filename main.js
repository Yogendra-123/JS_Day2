// 1.By using object litreal:{};

let person={
    name:"ram",
    age:23
};
console.log(person)
console.log(person.age);

// 2.By using new keyword
// let vsp= new sample(person);
// vsp.name="raj"
// vsp.age=12
// console.log(vsp)
// console.log(vsp.name)
// console.log(vsp.age)

// 3.By using constructor function.

function person1(){
    this.name="Shiv",
    this.age=22
    this.hobbies=['swim','reading books','browsing net']
}
const data = new person1();
console.log(data.name)
console.log(data.age)
console.log(data.hobbies)
// console.log(data.hobbies[1])

// function constructor
function user(name,age){
this.name=name;
this.age=age;
}
var user1= new user('raja',22);
var user2=new user('dev',21);

// Q. 4 callbacks
function person1(myFunction){
return myFunction;
}
function person2(){
return ("Hi Everyone!!!")
}
let persondata=person1(person2);
console.log(persondata);

// Q. 5 prototypes
function Person(name,age){
this.name = name,
this.age = age
}
Person.prototype.nationality="Indian";
const peson1 = new Person("yogendra", 23)
console.log("name:"+ peson1.name,"age:"+peson1.age,"nationality:"+peson1.nationality);

// Q. 6 prototype chain can be seen here...

let fruits=["apple","mango","orange", 'banana', 'grapes']
console.log(fruits);

// Q. 7 inheritance

function employee(name,age,place){
this.name=name,
this.age=age,
this.place=place
}
function employee2(gender){
employee.call(this.name,this.age,this.place)
this.gender=gender
}
let emp = new employee ("yogi",23,"khargone")
let emp2= new employee2("M")
console.log(emp);
console.log(emp2);

