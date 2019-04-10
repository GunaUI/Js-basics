# Js-basics

## Protypal Inheritance
* Inheritance is one object trying to access the properties and methods of another object.
* In javascript everything is object. eg: array, object access to lot of predefined properties and methods how ??
* There is something known as prototype , here prototype into picture.(.__proto__.)
```js
let arr = ["test1", "test2"]
console(arr.__proto.__);
console(Array.prototype);
```
* object's protype is object, if you check object's protype's protype that will return null
```js
console(object.__proto__)
// object
console(object.__proto__.__proto__) // aka console(object.prototype.__proto__) 
//null
```
* In javascript everything array , object, function.... everything is object.

```js
let object1 = {
    name: "Aadvik",
    age : "1",
    height: "2feet",
    city: "chennai"
}

let object2 = {
    name: "krishna",
}
// Never do this , just for undestanding 
object2.__proto__ = object1;
console.log(object2.__proto__)
//{
    name: "krishna",
    age : "1",
    height: "2feet",
    city: "chennai"
}

```
* if we try to access city property in object2, it will check object2 , in case if it doesn't find anything it will go to the proto, there also if it doesn't find anything it will go to the proto's proto... it will goes through out the chain,

```js
Function.prototype.mybind=function(){
    console.log("mybind method called");
}
function test(){

}
function test2(){

}

test.mybind()
// mybind method called
test2.mybind()
// mybind method called
```
* After the above change all function have access to mybind method.. because mybind method added to function's prototype.