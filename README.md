# Js-basics

## Amazon Interview Question

* Question: Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of a+b+c....+n.

* In javascript we can pass a function as a argument to another function, even we can return a function from a function for eg
```js
let x = func(){

}
function chumma(x){
    return x
}
function chumma2(){
    return func(){

    }
}
```
* Solution for the above problem sum(a)(b)(c) is recursive function..
```js
let sum = func(a){
            return func(b){
                return func(c){
                    return a+b+c
                }
            }
        }
```
* in more simplefied way .
```js
let resursiveSum = func(a){
            return func(b){
                if(b) {
                    return resursiveSum(a+b);
                }else{
                    return resursiveSum(a);
                }
            }
        }
```
* we have to continue the same recursive sum till we don't find an argument.

## Solution in ES6 syntax
```js
let sum = a => b => b ? sum(a + b) : a;
console.log(sum(10)(20)(3)(4)());
```

