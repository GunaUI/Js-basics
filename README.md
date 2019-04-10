# Js-basics

## Closure
* In Javascript there is something called lexical scope - Means the variable that defined outside the scope, basically upper scope are automatically available inside. you don't have to explicity pass that.Lets say
```js
let i = 1;

const newFunc = () => {
    console.log(i)
}
```
* this "i" should be available inside because of the lexical scope. here you are trying to use from outside the scope, that may become unpredictable. what if "i" is not available outside the scope ??

```js
let  newFunc
if(true){
    let i = 1;
    newFunc = () => {
        console.log(i)
    }
}

newFunc();
//output : 1
console.log(i)
// Incase if we didn't define  let  newFunc it will through error
//output : undefined error since i is not in this scope...
```
* Example 2

```js
let newFunc = () => {
        let i = 1;
        let j = 2
        return  () => {
            // Here i is outside its scope, not available inside this scope.. still we acess i through closure
            // here i is the closure variable but not j since we are not using j
            console.log(i)
        }
}
```
* Example 3 - closure inside the loop

```js
for( let i=0; i<3; i++){
    const myfunc = () => {
        console.log(i);
    }
    myfunc();
}
//output : 0 1 2
```

```js
// Note here we are using Let keyword
for( let i=0; i<3; i++){
    // execute console after one sec
    setTimeOut( () => {
        console.log(i);
    }, 1000)
}
console.log("After loop")
//output : After loop 0 1 2
```
* here in let every time the closure i is saved with new key i and new value to it , see below for detailed understanding

```js
i=0 myfunc(c:i(0)); 
i=1 myfunc(c:i(1));
i=2 myfunc(c:i(2));
```

* if we use var instead of let

```js
// Note here we are using "Var" keyword
for( var i=0; i<3; i++){
    // execute console after one sec
    setTimeOut( () => {
        console.log(i);
    }, 1000)
}
console.log("After loop")
//output : After loop
//         3 (3 times)
```
* here "var" keyword is "function scope" ie it will use the same variable but with new/different value.

```js
i=3 myfunc(c:i(3)); 
    myfunc(c:i(3));
    myfunc(c:i(3));
```
* Lets say i want to keep this var how do i fix this ??? we can fix this with immediately invoked function expression.

```js
// Note here we are using "Var" keyword
for( var i=0; i<3; i++){
    ((i)=>{
        setTimeOut( () => {
            console.log(i);
        }, 1000);
    })(i);
}
console.log("After loop")
//output : After loop 0 1 2
```
* immediately invoked function expression its create a block scope since its run right away.
* Closures are nothing but FUNCTIONS WITH PRESERVED DATA
* A closure is an inner function that has access to the outer function's variables.  Obviously the inner function has access to its own function scope ('local' variables defined between its braces),  and it has access to the outer function's variables, which are Closures, and it has access to the global variables.