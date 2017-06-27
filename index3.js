var assert = require("assert");

var ejercicio3=function(aleatorios,x){
  var respuesta = [] ;
  aleatorios.forEach(n => {
    if (n%x==0)
    respuesta.push(n);
  });
  return respuesta;
}


  describe("Ejercicio3", function(){
    it("Prueba de [7,21,44,80,77,35] y 7 " , function(){
      assert.equal(true , ejercicio2 ([121312341,435353535,435435435]));
    });
  });
