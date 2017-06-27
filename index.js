var assert = require("assert");

function ejercicio1(array,numero){
  var reduceArr = array.reduce(function(primerValor,segundoValor){
    return primerValor * segundoValor;
  });
  return reduceArr * numero;
}

describe("Ejercicio1", function(){
  it ("Prueba de [4,4,5,12] y 9 " , function(){
    assert.equal(8640,ejercicio1 ([4,4,5,12],9));
  });

  it ("Prueba de [0,23,35,2] y 7 " , function(){
    assert.equal(8640,ejercicio1 ([4,4,5,12],9));
  });
});
