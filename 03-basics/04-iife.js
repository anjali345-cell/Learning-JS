// immediatly invoked functions also make sure to turminate it with the semicolon

(function chai(){
    console.log("db connected")
}());

(function coffee(){
    console.log("db not connected")
}())

