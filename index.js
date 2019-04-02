// ****** Tradional bind function.*****
let myname = {
    firstname:"Guna",
    lastname:"M",
}

let printMyName = function(){
    console.log(this.firstname+" "+this.lastname);
}

let copyPrintMystate = printMyName.bind(myname);

copyPrintMystate()

// output : Aadvik Krishna 



// ***** Own bind method ********...

Function.prototype.mybind=function(...obj){
    let myfunc = this;
    return function(){
        myfunc.call(obj[0])
    }
}

let myownBindFunction= printMyName.mybind(myname);
myownBindFunction();





// ****** with extra params *******

let printMyHometown = function(hometown){
        console.log(this.firstname+" "+this.lastname+" from "+ hometown);
}

Function.prototype.myNewBind=function(...args){
    let myfunc = this;
    // here we are slice ie remove the first argument and the we are returing the rest of the argumet.. in param
    params = args.slice(1)
    return function(){
        // here we changed to apply method instead of call because the param in which we are using is array , call method can't take array but apply method can..
        myfunc.apply(args[0],params)
    }
}
let myownBindWithMoreArgs = printMyHometown.myNewBind(myname, 'Banglore');
myownBindWithMoreArgs();
// output : Guna M from Banglore




// ******** Argument while invoking the function...*****

let printMyState = function(hometown, state){
        console.log(this.firstname+" "+this.lastname+" from "+ hometown+" , "+ state);
}

Function.prototype.myStatebind=function(...args){
    let myfunc = this;
    params = args.slice(1)
    return function(...args2){
        // here args2 we will get from while we invoking the function..
        //[...params,...args2] we are concatinating array from mybind and also from while we invoking the function..
        myfunc.apply(args[0],[...params,...args2])
    }
}
let myownStateBindFunction = printMyState.myStatebind(myname, 'Banglore');
myownStateBindFunction("Tamilnadu");
// Output : Guna M from Banglore , Tamilnadu

