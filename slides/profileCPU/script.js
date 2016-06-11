function doSomething(callback){
    method_a(callback);
}

function method_a(callback){
    method_b(callback);
}

function method_b(callback){
    var i = 0;
    while(i < 500000000) {
        i++;
    }
    method_c(callback);
}

function method_c(callback){
    var i = 0;
    while(i < 1000000000) {
        i++;
    }
    callback();
}