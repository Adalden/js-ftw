var js = function(){
    return "JavaScript";
} 

var awesome = function(){
    return "is Awesome!";
}

var flexible = function(){
    return "is Flexible!";
}

var norris = function(){
    return "is more powerful than Chuck Norris";
}

var phrase = function(a, b){
    console.log(a(), b());
}

var driver = function(a, b){
    phrase(js, awesome);
    phrase(js, flexible);
    phrase(js, norris);
}

driver();

