// const car = {
//   //properties
//   model: "Camry",
//   make: "toyota",
//   //methods
//   drive() {
//     console.log ("The " +  " " +  this.make +  " " + this.model + "is driving.");
//   }
// };

// car.drive();

// //Encapsulation

// //Encapsulating a bank account
// class BankAccount {
//   constructor(name, balance) {
//     this.name = name;
//     this
//   }
// }

// //object literal

// //imagine a box to store information about a cat
// const cat = {
//   name: "whiskers",  //this is like a label for name and its value is "whiskers"
//   age: 2,  //another label for age with a value of 2
//   meaow() {  //this is a mini instruction "meaow" that makes a meaow sound
//     console.log("Meaow!");
//   }

// }

// //object literal (recipe)
// const car = {
//   wheels: 4,
//   color: "red",
//   drive() {
//     console.log("Vroom");
//   }
// };

// // object (finises dish)
// console.log(car.color);
// car.drive();

// General animal prototype (cheat sheet)
// function Animal(name) {
//   this.name = name;
//   this.age = 0;  //Default age for all animals
// }

// Animal.prototype.eat = function() {
//   console.log(this.name + " is eating.")
// }

// // Cat object inheritting from animal
// function Cat(name, breed) {
//   this.breed = breed;
//   // call the Animal constructor to inherit properties (like name)
//   Animal.call(this, name);
// }

// // Inherit prototype from Animal
// Cat.prototype =  Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat; // reset the constructor

// Cat.prototype.meaow = function() {
//   console.log(this.name + " says meaow!");
// };

// // Dog object inheriting from Animal
// function Dog(name, breed) {
//   this.breed = breed;
//   // Call the Animal constructor to  inherit properties (like name)
//   Animal.call(this, name);
// }

// // Inherit prototype from Animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog; //Reset the constructor

// Dog.prototype.bark = function () {
//   console.log(this.name + " says woof!");
// }

// // Create Animal objects
// const cat1 = new Cat("Whiskers", "Siamese");
// const dog1 = new Dog("Buddy", "Labrador");

// //Access inherited properties and objects
// cat1.eat(); // Output: Whiskers is eating (Inherited from Animal)
// dog1.eat(); // Output: Buddy is eating (Inherited from Animal)

// //Use unique methods
// cat1.meaow(); // Output: Whiskers says meaow!
// dog1.bark(); // Output: Buddy says woof!




// function Button(text, backGroundColor) {
//   this.text = text;
//   this.backGroundColor = backGroundColor;
//   this.isDisabled = false;  //Add a new property for a disabled state
// }

// Button.prototype.handleClick = function() {
//   if (!this.isDisabled) {  // checks if button is disabled before action
//     console.log("Button clicked! Text: " + this.text);
//   } else {
//     console.log("Button is disabled!");
//   }
// };

// function SubmitButton(text) {
//   // Call Button constructor to inherit properties (text and backgroundcolor)
//   Button.call(this, text, "green");
// }

// SubmitButton.prototype = Object.create(Button.prototype);
// SubmitButton.prototype.constructor = SubmitButton; //Reset the constructor

// function CancelButton(text) {
//   // Call Button constructor to inherit propperties (text and backgroundcolor)
//   Button.call(this, text, "red");
// }

// CancelButton.prototype = Object.create(Button.prototype);
// CancelButton.prototype.constructor = CancelButton; // Reset the constructor

// function PrimaryButton(text) {
//   // Call Button constructor with default black background
//   Button.call(this, text, "black");
// }

// const submitButton = new SubmitButton("Submit");
// const cancelButton = new CancelButton("Cancel");

// // Click functionality (for example)
// submitButton.addEventListener("click", submitButton.handleClick());
// cancelButton.addEventListener("click", cancelButton.handleClick());



// Electronic device prototype (cheat sheet)

// function ElectronicDevice(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.isOn = false;  // is the device currently on?
// }

// ElectronicDevice.prototype.turnOn = function() {
//   this.isOn = true;
//   console.log(this.brand + " " + this.model + " " + " is turned on.");
// };

// ElectronicDevice.prototype.turnOff = function() {
//   this.isOff = false;
//   console.log(this.brand + " " + this.model + " " + " is turned off.")
// }

// // TV prototype inheriting from ElectronicDevice

// function TV(brand, model, screenSize) {
//   ElectronicDevice.call(this, brand, model); // Calls the parent constructor
//   this.screenSize = screenSize;
// }

// // Inherit prototype from ElectronicDevice

// TV.prototype = Object.create(ElectronicDevice.prototype);
// TV.prototype.constructor = TV; // Resets the constructor

// // Laptop prototype inheriting from ElectronicDevice

// function Laptop(brand, model, batteryLife) {
//   ElectronicDevice.call(this, brand, model); // Calls the function constructor
//   this.batteryLife = batteryLife;
// }

// // Inherit prototype from ElectronicDevice

// Laptop.prototype = Object.create(ElectronicDevice.prototype);
// Laptop.prototype.constructor = Laptop; // Resets the constructor

// const tv1 = new TV("Sony", "Bravia X80K", 55);
// const laptop1 = new Laptop("Apple", "Maxbook pro", 10);

// tv1.turnOn(); // Output: Sony Bravia X80K is turned on.
// laptop1.turnOff(); //Output: Apple Macbook pro is turned off.

// console.log(tv1.screenSize); // Output: 55
// console.log(laptop1.batteryLife); // Output: 10

// TV.prototype.changeChannel = function(channel) {
//   console.log(this.brand + " " + this.model + " " + " is changing channel to " + channel);
// };

// tv1.changeChannel(3); // Output: Sony Bravia X80K is changing channel to 3

// function Smartphone(brand, model, batteryLife, camera_megapixels) {
//   ElectronicDevice.call(this, brand, model); // Call parent constructor
//   this.batteryLife = batteryLife;
//   this.cameraMegapixels = camera_megapixels;
// }

// // Inherit prototype from ElectronicDevice

// Smartphone.prototype = Object.create(ElectronicDevice.prototype);
// Smartphone.prototype.constructor = Smartphone; // Reset the constructor

// Smartphone.prototype.takePicture = function() {
//   console.log(this.brand + " " + this.model + " " + " is taking a picture with " + " " + this.cameraMegapixels + " megapixels.");
// };

// const iphone14 = new Smartphone("Apple", "iphone14", 12, 12);
// iphone14.turnOn(); // Output: Apple iphone14 is turned on (inherited)
// iphone14.takePicture(); // Output: Apple iphone14 is taking  picture with 12 megapixels.


// // Washing machine prototype inheriting from electronic device

// function WashingMachine(brand, model, capacity) {
//   ElectronicDevice.call(this, brand, model); // Call parent constructor
//   this.capacity = capacity; // Washing capacity in kilograms
//   this.cycle = "Normal"; // Default cycle
//   this.waterLevel = "medium"; // Default WaterLevel
// }

// //Inherit prototype from ElectronicDevice

// WashingMachine.prototype = Object.create(ElectronicDevice.prototype);
// WashingMachine.prototype.constructor = WashingMachine; // Reset the constructor

// WashingMachine.prototype.startWash = function() {
//   console.log(this.brand + " " + this.model + " " + " is starting a wash cycle: " + this.cycle + " " + " with water level: " + this.wateraLevel);
// }

// // Optional method depending on complexity

// WashingMachine.prototype.addDetergent = function(detergentType) {
//   console.log(detergentType + " is added to " + this.brand + " " + this.model);
// };

// const washer1 = new WashingMachine("LG", "WM3900HVA", 8);
// washer1.turnOn(); // Output: LG WM3900HVA is turned on. (Inherited)
// washer1.cycle = "delicate"; // Sets cycle
// washer1.waterLevel = "low"; // sets Water level
// washer1.addDetergent("eco"); // Implementation of optional method
// washer1.startWash(); // Output: LG WM3900HVA is starting wash cycle: delicate with water level: low

// Constructors

// function ConstructorName(Argument1, Argument2, ...) {
//   // Code to initialize the objects properties
//   this.property1 = Argument1;
//   this.property2 = Argument2;
//   // ...
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.name); // Output: "Alice"
// console.log(person2.age); // Output: 25

// // Object literals
// const person = {
//   name: "Chalie",
//   age: 38
// }

// // Using classes

// class Box {
//   constructor(value) {
//     this.value = value;
//   }

//   // Methods are created on Box.prototype
//   getValue() {
//     return this.value;
//   }
// }

// class ClassName {
//   // Contructor method (optional)
//   constructor(argument1, argument2, ...) {
//     // Code to initialize object properties
//     this.property1 = argument1;
//     this.property2 = argument2;
//     // ...
//   }
//   // Methods (functions defined inside classes)
//   methodName1() {
//     // Method implementation
//   }
//   methodName2(argument) {
//     // Method implementation with an argument
//   }
//   // Static methods:(Optional) - called without creating an object
//   static staticMethodName() {
//     // Implementation of a static method
//   }
// }

// class Persons {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello, my name is " + this.name);
//   }
// }

// const person1 = new Persons("Edgar", 26);
// person1.greet() // Output: Hello, my name id Edgar

// // Object literals without the `__proto__ key` key automatically have
// // `Object.prototype` as their prototype

// const object = {
//   a: 2
// };

// Object.getPrototypeOf(object) === Object.prototype; // True

// // Array literals automatically have `Array.prototype as their `[[prototype]]`
// const array = [1, 2, 3, 4];
// Object.getPrototypeOf(array) === Array.prototype; // true

// // RegExp literals automatically have `RegExp.prototype` as their `[[prototype]]`
// const regexp = /abc/;
// Object.getPrototypeOf(regexp) === RegExp.prototype;  // true

// const arrays = new Array(2, 4, 6, 8);
// const regexps = new RegExp("abc");

// Building long inheritance chains

function Base() {
  this.sayHii = () => {
    console.log("Hi from Base!");
  };
}

function Derived() {
  Base.call(this); // Call the base constructor to inherit properties
};

Object.setPrototypeOf(Derived.prototype, Base.prototype);

const derivedObject = new Derived();
derivedObject.sayHii(); // Output: Hi from Base.