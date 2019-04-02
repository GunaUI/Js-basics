# Js-basics

## Debouncing 
* Suppose if your are searching in a website... if the api call is made on every key press means this will create a major performance issue.

```html
<input type="text" onkeyup="getdata()"/>
```
* This getdata function will calls API for every keyup event.. that is not good actually..
```js
function getdata(){
    // lets say we are calls an API and gets data.
    console.log("Fetching data...");
}
```
* To solve the above problem we should call getdata only when user paused typing ..
* for example lets say 300 milli seconds... if only the difference between user keystroke is 300ms then we can call getdata
```jsx


// Instead of calling getdata immediately we will wait for certain delay time and after that we can call the functiobn
const debounce = function(getdata, delayTime){
    // Initialising the timer..
    let timer
    return function(){
        // maintaing context and arguments required to keep a check that the environment or lexical scope where the function is running is correct and same getdata function is called with same arguments (** if it had);
        let context = this;
        args = arguments;
        // if again keystore happens we should stop calling this method , for that we have to use clear timeout. ie if we cleared the timer getdata will not be called..
        clearTimeout(timer);

        // timer will be called if it expires the 300ms
        timer = setTimeout(()=>{
            // here we can't directly call getdata() like this ... to fix our "this" variable and context we have to use apply here
            getdata.apply(context,args)
        },delayTime)
    }
}


// this betterFunction will be called on each and every keypress event.
const betterFunction = debounce(getdata, 300);

```
* This betterFunction should be called on Keyup instead of getdata in html
* This will imporveour application performance, we can use the debounce method in other places where ever it applies, like scroll event, resize window....
