var assert = require("assert");

var ejercicio4=function(arreglo){

  return arreglo.map( n=> n*2 +1);
}


  describe("Ejercicio4", function(){
    it("Prueba de [1,5,6,3,7,3,5,0] " , function(){
      assert.equal([3,11,13,7,15,7,11,1] , ejercicio4 ([1,5,6,3,7,3,5,0]));
    });
  });
