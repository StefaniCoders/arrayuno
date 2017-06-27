var assert = require("assert");

var producto = function(arreglo){
  return arreglo.reduce((n,m) => n*m);
}

describe("Ejercicio6", function(){
  it(producto = [1,2,3,4] debe ser 24 , function(){
    assert.deepEqual(producto([1,2,3,4]),24);
  });
});
