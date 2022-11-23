function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    let namedFunction = function(){
        console.log("I am a named function")
    }

    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}