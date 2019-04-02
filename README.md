# Js-basics

## call Method.

```js
// Here "this" refers to the myname object 
let myname = {
    firstname:"Guna",
    lastname:"M",
    printFullName: function(){
        console.log(this.firstname+" "+this.lastname);
    }
}
myname.printFullName();
//output : Guna M
```
* Above code will print full name as "Guna M"
* In-case if we want print the full name function with new object lets say
```js
let myname2 = {
    firstname:"Aadvik",
    lastname:"Krishna"
}
```
* How to use this new object (myname2) as value in printFullName function, so thats where call method comes into picture.
* Using call method we can do function borrowing , this concept is known as function borrowing. ie function borrowed from other object and use it with the data of other object.

```js
// myname2 refers to the object which has data... ie now in printFullName function "this" refers to myname2.
myname.printFullName.call(myname2)
// output : Aadvik Krisha
```
* similarly for example if we want to call a seperate functio with new data we can like this.
```js
let printMyName = function(){
        console.log(this.firstname+" "+this.lastname);
    }
    printMyName.call(myname);
// output : Guna M
```
* Incase if we have params for this function example

```js
let printMyhometown = function(hometown){
        console.log(this.firstname+" "+this.lastname+" from "+hometown);
    }
```
* how will we pass different paramaters inside this function is the first parameter will be always the reference to "this" variable and the later arguments can be the arguments to the function.

```js
printMyhometown.call(myname2, "Kovilpatti");
// output : Aadvik Krishna from Kovilpatti
```
* incase if we didn't pass the expecting argument it will show undefined error.
* suppose our function has more argument lets say along with hometown we need to pass state.
```js
let printMystate = function(hometown, state){
        console.log(this.firstname+" "+this.lastname+" from "+hometown+" , "+ state);
    }
    printMystate.call(myname2, "Kovilpatti", "TamilNadu");
```

## apply Method.

* the only difference between call and apply method is the way we pass arguments , let see how it works.

```js
printMystate.apply(myname2, ["Kovilpatti", "TamilNadu"]);
// output : Aadvik Krishna from Kovilpatti , TamilNadu
```
* instead of passing the second aguments individually in the call method , here we are passing the arguments as array list


## bind Method.

* the bind method looks exactly same as the call method but the only difference is instead of direcly executing the method , it will bind method and return the copy of that method

```js
// copyPrintMystate will have the binded copy of the function, but not executed value, it will just return the function.
let copyPrintMystate = printMystate.bind(myname2, "Kovilpatti", "TamilNadu");
// Once data and function binded we can invoke the refernce copy later.
copyPrintMystate()
// output : Aadvik Krishna from Kovilpatti , TamilNadu
```
* Note : only difference between call and bind is , bind gives the copy which can be invoked later..