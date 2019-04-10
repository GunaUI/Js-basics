# Js-basics

## Constructor
* JavaScript lets you use a function as a constructor.
* Usually, the job of a function is to run a specific job. Let’s say, I want to add two numbers. will write a function that takes two arguments and return the addition of the two numbers.
```js
let add = function(number1, number2) {
 return number1 + number2;
};

let sum = add(1, 2);
```
* Now, let’s look at an example of a function constructor.
```js
let Car = function(color) {
    this.color = color;
};

let redCar = new Car('red');
```
* Function constructor, on the other hand, accepts color as an argument and sets it to its this.The constructor function does not contain a return statement. Instead, it returns a new object with the property that is passed as an argument.
* The basic syntax difference for executing a regular function and a constructor function is the usage of the new keyword.
* If you were to manually create an object without using the constructor function, the syntax will look like following:

```js
let redCar = {
    color: 'red'
};
```
### Drawbacks of not using new
* Now, let’s consider a scenario where you execute a constructor function as a regular function without using the keyword ‘new’.
```js
let Car = function(color) {
    this.color = color;
};

let redCar = Car('red');
```
* In this case, this.color = color will create a new property color in the global space. You can verify the result by using console.log(window.color);
* To prevent such error, add se use strict, which throws the following exception:
* this use strict will create undefined color at car object.
* You can also use the new.target to throw a customized error message.
```js
let Car = function(color) {
    if (!new.target) throw 'Car() must be called with new';
    this.color = color; 
};

let redCar = new Car('red');
```
### Private Vs Public properties
* In JavaScript, all object properties are public, which means you can access it directly. For example, redCar.color.
* JavaScript does not have a native support for private property. Private properties are the properties you cannot access directly by using a dot notation. However, you can call a getter or have a getter method like getColor to access it and use closure.
```js
let Car = function(_color) {
    this.setColor = function(color){
        _color = color;
    }
    this.getColor = function() {
        return _color;
    };
};

let redCar = new Car('red');

console.log(redColor.getColor());
```
* Here _color is a private variable that cannot be accessed by the object using redCar._color.Since it is a closure, the methods have access to them.

### Adding methods to a Constructor

Best way to have methods is to set methods in prototype space. For more information about settings methods in the prototype space.