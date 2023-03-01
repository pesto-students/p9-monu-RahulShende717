/** 
 * Assignment4.1
 Implement a function namedgetNumberwhich generatesa random number. If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable.
 1.JS promises should not be used.
 2.A custom promise function should be created.
 3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
 4.Should be able to accept callbacks as props.
*/



function Ipromise(promiseCallbackFn){

    var state = "pending";

    
    function resolve(val){
        if(val){
            state = val;
        }
    }

     
    function reject(error){
        if(error){
            state = error;
        }
        
    }   

    promiseCallbackFn(resolve, reject);
    
   
    if (state === "pending") return { state: "pending" };

    return {
        then: (thenFn) => {
            if(state === "resolve"){
                thenFn({state: state});
            } 
            return new Ipromise(promiseCallbackFn);      
        },
        catch: (catchFn) => {
            if(state === "reject"){
                catchFn({state: state});
            }
            return new Ipromise(promiseCallbackFn);
        }
    }
}



var responseFirst = (randomVal) => new Ipromise((resolve, reject) => {
    if((randomVal % 5) !== 0){
        resolve("resolve");
    } else {
        reject("reject");
    }
});


function getNumber(){
    var random = Math.floor(Math.random() * 100);
    return random;
}

var randomNum = getNumber();
console.log("RandomNumber", randomNum); //


responseFirst(randomNum).then(val => console.log(val)).catch(err => console.log(err));


 
const responseSecond = new Ipromise((resolve, reject) => {
    
})

console.log(responseSecond); //{ state: 'pending' }