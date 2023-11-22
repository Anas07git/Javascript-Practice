const cc = console.log

// *CLASS - Class is a templete/blueprint of an object and object is an instance of class

// In OOPS, a class is an extensible program-code-template for creating objects,
// providing initial values for state (member variables) and implementations of behavior (member functions or methods)

// "class" syntax
// No commas(,) are required btw class methods
class MyClass{
    constructor(){}
    method1(){}
    method2(){}
    // So on...
}

// constructor() is automatically called by "new" keyword
// Eg:
class User{
    constructor(name){
        this.name=name
        cc("Constructor Called")
    }
    sayHello(){
        cc(this.name)
    }
}
let user= new User("Anas")
user.sayHello()
// cc(user.__proto__.constructor===User)
let user2= new user.constructor("Abc")
user2.sayHello()

class Empty{
    constructor(name){
        this.name=name
    }
    sayHi(){
        cc(this.name)
    }
} 
let x= new Empty("empty")
cc(Object.getOwnPropertyNames(Empty)) // name,length,prototype
cc(Empty.length) // 1 - Shows how many times the constructor is called
cc(Empty.name)   // Empty- Simply the name of class
cc(Empty.prototype) // Shows obj with constructor and other methods as properties

// In JS, class is kinda Function
cc(typeof MyClass) //function
// But still there are differences
// 1) A function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually
// Unlike regular functions class must be called with "new"
// Empty()  // Error : Class constructor Empty cannot be invoked without 'new'

// 2) Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
// 3) Classes always use strict. All code inside the class construct is automatically in strict mode.


// *CLASS EXPRESSION
// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc
let Exp= class{
    sayHello(){
        cc("Hello")
    }
}
new Exp().sayHello()
// Named Experssion:
let Exp2= class Expr{
    sayHello(){
        cc(Expr) // Only visible inside class
    }

}
new Exp2().sayHello()
// cc(Expr) // Error: Not visible outside class

// We can even make classes dynamically:
function makeClass(content){

    return class{
        sayHi(){
            cc(content)
        }
    }
}
let sclass= makeClass("Hi")
cc(typeof sclass)
new sclass().sayHi()

// *GETTER/SETTER
class User1 {

    constructor(name) {
      // invokes the setter
      cc("constructor called")
      this.name = name;
      
    }
    b="anything"; // “Class fields” is a syntax that allows to add any properties.
  
    get name() {
        cc("getter called")
      return this._name;
      
    }
  
    set name(value) {
        cc("setter called")
      if (value.length < 4) {
        cc("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user1 = new User1("John");
  cc(user1.name); // John
  user1.name="Johnny"
  //   user = new User(""); // Name is too short
  cc(user1.b); // "anything"
// Imp diff of class fields is they are set on individual objs,not User1.prototype
cc(User1.prototype.b) // undefined

// Making bound methods with class fields
class Button{
    constructor(name){
        this.name=name
    }
    click=()=>{   // special syntax only available with     class fields
        cc(this.name)
    }
}
let btn= new Button("button")
// setTimeout(btn.click,1000)



// *CLASS INHERITANCE
// It is a way for one class to extend to another class and to create functionality on the top of existing

class Animal{
    constructor(name){
        this.name=name
        this.speed=0
        cc("Parent const called")
    }
    run(speed){
        this.speed=speed
        cc(`${this.name} is running with ${this.speed} speed`)
    }
    stop(){
        this.speed=0
        cc(`${this.name} stopped`)
    }

}
let animal = new Animal("General Animal")
// Extending from Animal
class Cat extends Animal{
   constructor(name,eyeColor){
    super(name)
      this.eyeColor=eyeColor
      cc("Derived Cons called")
   }
    meow(){
        cc(`${this.name} is meowing`)
    }
   stop(){
    super.stop() // Will call parent stop
    // setTimeout(()=>super.stop(),1000)
    this.meow()
   }
}
let cat = new Cat("Rossy")
cat.run(10)
cat.meow()

// Any expression is allowed after "extends"
function F(content){
    return class{
        sayHi(){
            cc(content)
        }
    }

}
class C extends F("HellO"){}
new C().sayHi()

// *OVERRIDING METHODS
// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).
// Go to line no.171
cat.run(12)
cat.stop()

// Arrow functions donot have "super" they take from their parent outer function
// See line no.172

// *OVERRIDING CONSTRUCTOR
// If extended class has no constructor then the following empty constructor is generated:
//  constructor(...args){
//     super(...args)
//  }

// *Adding custom constructor in extended class
// Constructors in derived classes must call super(...), and do it before using "this"
// A derived constructor has a special internal property [[ConstructorKind]]:"derived"
// When base class is executed with "new", it creates empty object and assigns it to "this"
// But when derived constructor runs it expects the parent constructor to do this
// See line no.162

let cat1= new Cat("AKA","blue")
cc(cat1.name,cat1.eyeColor)


// *OVERRIDING CLASS FIELDS
 class X{
    name="x"

    constructor(){
        cc(this.name)
    }
 }
 class Y extends X{
     name="y"
 }
 new X() // x
 new Y() // x
// the parent constructor always uses its own "field" value, not the overridden one
// Bcoz: Field intialization order
// i)  Before constructor for the base class (that doesn’t extend anything),
// ii) Immediately after super() for the derived class.


// *[[HomeObject]] - Special internal property of functions
// When a function is specified as a class or object method, its [[HomeObject]] property
// becomes that object.
// "super" uses that 

// *STATIC METHODS/PROPERTIES
// Assignning a method to the class as a whole are called "static" methods
class Stc{
    static func(){
        cc(this===Stc)
    }
}
Stc.func() //true
// We can also
class Dc{}

Dc.staticMethod = function() {
  cc(this === Dc);
}

Dc.staticMethod()
// For instance, we have Article objects and need a function to compare them
class Article{
    constructor(title,date){
        this.title=title
        this.date=date
    }
    static compare(aA,aB){
        return aA.date-aB.date
    }

}
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];

  articles.sort(Article.compare)
  cc(articles[0])   

// Another way "factory" method
class Article2{
    constructor(title,date){
        this.title=title
        this.date=date
    }
    static createToday(){
        return new this("Today's",new Date())
    }

}
let article= Article2.createToday()
cc(article.date)

// static properties are not available for individual objects
//  cc(article.createToday()) // Error

// Static properties : A recent addition
class Prop{
    static publisher="Anony"

}
cc(Prop.publisher)


// *PRIVATE & PROTECTED PROPERTIES AND METHODS
class CoffeeMachine{
    _waterLvl=0  // Protected properties are usually prefixed with an underscore(_) and these methods/properties shouldnot be acessed from outside


    constructor(power){
        this._power=power
        cc(`Created CoffeMachine with power: ${power}`)
    }
    set waterLvl(val){
        if(val<0) val=0
        this._waterLvl=val
    }
    get waterLvl(){
        return this._waterLvl
    }
    get power(){
        return this._power
    }
    #waterLimit = 200

    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
}

let CoffeeA= new CoffeeMachine("100")
CoffeeA.waterLvl=-2
cc(CoffeeA.waterLvl)// the access is under control,water lvl below zero becomes impossible.

// Read-Only
// sometimes happens that a property must be set at creation time only, and then never modified.
// See line no.321
cc(`Power is ${CoffeeA.power} W`) 
CoffeeA.power=200

// PRIVATE(#)
// See line no.323
// CoffeeA.#waterLimit=100 // Error

// * instanceof 
// Checks whether a object belongs to certain class or not  including inheritance
class A{}
let a= new A()
cc(a instanceof A)
let arr=[1,2,3]
cc(arr instanceof Array)
cc(arr instanceof Object)


// *MIXINS
// A class containing methods that can be used by other classes without inheritance.
// Some other languages allow multiple inheritance. Js doesn't support multiple inheritance,
// but mixins can be implemented by copying methods into prototype.
let sayHiMixin = {
    sayHi() {
      cc(`Hello ${this.name}`);
    },
    sayBye() {
      cc(`Bye ${this.name}`);
    }
  };

class Mix{
    constructor(name){
        this.name=name

    }
}
cc(Mix.prototype)
Object.assign(Mix.prototype,sayHiMixin)
cc(Mix.prototype)
new Mix("Mixin").sayBye()
