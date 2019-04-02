// Debouncing in javascript
let counter =0
function getdata(){
    // lets say we are calls an API and gets data.
    console.log("Fetching data...", ++counter);
}


const debounce = function(getdata, delayTime){
    let timer
    return function(){

        let context = this;
        args = arguments;

        clearTimeout(timer);

        timer = setTimeout(()=>{
            getdata.apply(context,args)
        },delayTime)
    }
}

const betterFunction = debounce(getdata, 300);