# Js-basics

## Function Currying

### Method 1 - bind method

* Function Currying is we can resuse a single function for many purpose...
* Here we are presetting argument...
```js
let multiply = function(x,y){
    console.log(x*y)
}
// here we are passing x=2;
let multiplyByTwo = multiply.bind(this,2)
// here we are passing y=3
multiplyByTwo(3);
// output : 6
```

* Suppose we pass both x and y on bind itself, it will take that value.
```jsx
// here we are passing x=2 and y =7
let multiplyByTwo = multiply.bind(this,2,7)
// here again we are trying passing y=8
multiplyByTwo(3);
//output : 14
```
* In the above example it will ignore 3 and it assume y=7 , so first prefernce will be given to binding arguments.

```js
let multiplyByeight = multiply.bind(this)
// here  we are trying passing both x and y
multiplyByeight(2,8);
//output : 16
```

### Method 2 - closure method

* This is the simple example for closure... in this function when a new function is return, the retun function has access to X variable even after returning..
* It is something like presetting x value over return function.
* In more easy explaination is just imagine we are creating a box in which both x and this return function exist.
```js
let multiplyUsingClosure = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByclosure = multiplyUsingClosure(2);
    multiplyByclosure(5);
let multiplyByclosureNew = multiplyUsingClosure(2);
    multiplyByclosureNew(10);

//output: 10
```