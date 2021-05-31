function limpiarFormulario() {
	document.getElementById("miForm").reset();
}
var Calcular=function(n1, n2){
var d=parseInt(document.getElementById("d").value);
var t=parseInt(document.getElementById("t").value);
var velocidad=d/t;
return"Velocidad: "+velocidad; 
}

function limpiarFormu(){
	document.getElementById("miFormu").reset();
}
var Imprimir1=function(n1, n2, n3){
var ve=parseInt(document.getElementById("ve").value);
var vi=parseInt(document.getElementById("vi").value);
var ti=parseInt(document.getElementById("ti").value);
var acelera=(ve-vi)/ti;
return"Aceleración: "+acelera;
}

function limpiarFormulario1() {
	document.getElementById("miForm1").reset();
}
var Calcular1=function(n1){
var t=parseInt(document.getElementById("t").value);
var a= 750 + 25*t +1*t^2;
return a;
}