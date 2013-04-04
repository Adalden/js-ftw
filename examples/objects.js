//First Class Functions example

var myObj = {};

myObj.add = function(a, b){
    return a + b;
};

myObj.sub = function(a, b){
    return a - b;
};

myObj.mul = function(a, b){
    return a * b;
};

myObj.div = function(a, b){
    return a / b;
};

myObj.driver = function(){
    console.log("2 + 3 is ", doMath(2, 3, this.add), " == 5");
    console.log("5 - 2 is ", doMath(5, 2, this.sub), " == 3");
    console.log("5 * 2 is ", doMath(5, 2, this.mul), " == 10");
    console.log("10 / 2 is ", doMath(10, 2, this.div), " == 5");
    console.log("Storing 500 * 2 in myObj.result");
    this.result = doMath(500, 2, this.mul);
    console.log("myObj.result ==", this.result);
}

var doMath = function(a, b, operator){
    return operator(a, b);
}

myObj.driver();