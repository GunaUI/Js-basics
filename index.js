// Method 1 : Bind method.
let multiplyUsingBind = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiplyUsingBind.bind(this,2)
multiplyByTwo(3);

let multiplyBythree = multiplyUsingBind.bind(this,2,7);
multiplyBythree(8);

let multiplyByeight = multiplyUsingBind.bind(this)
// here again we are trying passing y=8
multiplyByeight(2,8);

// Method 2 - Closure method.

let multiplyUsingClosure = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByclosure = multiplyUsingClosure(2);
    multiplyByclosure(5);

let multiplyByclosureNew = multiplyUsingClosure(2);
    multiplyByclosureNew(10);