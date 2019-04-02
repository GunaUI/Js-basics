// Here "this" refers to the myname object 
let myname = {
    firstname:"Guna",
    lastname:"M",
    printFullName: function(){
        console.log(this.firstname+" "+this.lastname);
    }
}
myname.printFullName();

let myname2 = {
    firstname:"Aadvik",
    lastname:"Krishna",
}
// ****** Call Method ******

// function borrowing
myname.printFullName.call(myname2)


let printMyName = function(){
        console.log(this.firstname+" "+this.lastname);
    }
printMyName.call(myname);
printMyName.call(myname2);

let printMyhometown = function(hometown){
        console.log(this.firstname+" "+this.lastname+" from "+hometown);
}
printMyhometown.call(myname2, "Kovilpatti");

// ***** Apply method ******

printMystate.apply(myname2, ["Kovilpatti", "TamilNadu"]);

