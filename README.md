# Js-basics

## Pollyfill for bind method.

* Pollyfill is sort of a browser fall back, what if suppose your bowser doesn't have bind function.And you have to write your own bind function.
* Tradional bind function.
```js
let myname2 = {
    firstname:"Aadvik",
    lastname:"Krishna"
}
let printMyName = function(){
        console.log(this.firstname+" "+this.lastname);
}
// copyPrintMystate will have the binded copy of the function, but not executed value, it will just return the function.
let copyPrintMyName = printMyName.bind(myname2);
// Once data and function binded we can invoke the refernce copy later.
copyPrintMyName()
// output : Aadvik Krishna 
```

* Our task is to write our own implementation in bind method.
```js
// we will discuss Function.protoype in upcomming discussion.. not in this branch!!
// for just now assume that if we keep any method with Function.protoype and those method can be accessed anywhere...
Function.prototype.mybind=function(...obj){
    // our bind method will always return some uninvoked method which will be invoked later...
    // here "this" refers to the function in which mybind is binded... so through this we can get access to the function which using this method.
    let myfunc = this;
    return function(){
        //...obj refers to the object which is bind to this method 
        // since we used spred operator here so that we are getting first agrument as obj[0]
        myfunc.call(obj[0])
    }
}
let myownBindFunction = printMyName.mybind(myname);
myownBindFunction();

// output : Guna M 
```

* Suppose we want send some more different argument... how can we do that ..  with the existing mybind fuction is it possible ???  no..

```js
let printMyHometown = function(hometown){
        console.log(this.firstname+" "+this.lastname+" from "+ hometown);
}

Function.prototype.mybind=function(...args){
    let myfunc = this;
    // here we are slice ie remove the first argument and the we are returing the rest of the argumet.. in param
    params = args.slice(1)
    return function(){
        // here we changed to apply method instead of call because the param in which we are using is array , call method can't take array but apply method can..
        myfunc.apply(args[0],params)
    }
}
let myownBindFunction = printMyHometown.mybind(myname, 'Banglore');
myownBindFunction();

// output : Guna M from Banglore
```


* still problem not solved..in case if we send params while invoking function will it work?? no....

```js
let printMyState = function(hometown, state){
        console.log(this.firstname+" "+this.lastname+" from "+ hometown+" , "+ state);
}

Function.prototype.mybind=function(...args){
    let myfunc = this;
    params = args.slice(1)
    return function(...args2){
        // here args2 we will get from while we invoking the function..
        //[...params,...args2] we are concatinating array from mybind and also from while we invoking the function..
        myfunc.apply(args[0],[...params,...args2])
    }
}
let myownBindFunction = printMyState.mybind(myname, 'Banglore');
myownBindFunction("Tamilnadu");
// Output : Guna M from Banglore , Tamilnadu
```