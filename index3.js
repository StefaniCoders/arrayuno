var array = [7,21,44,80,77,35];
var num=7;
var resultado="";


array.forEach(function multiplo(valor){
  if (valor&num==0){
    resultado += valor+" ";
  }
});
document.write(resultado);
