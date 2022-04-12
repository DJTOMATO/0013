var nombre = prompt("Ingrese su nombre", "");

var n1_html = parseFloat(prompt("Ingrese Nota 1 de HTML", ""));
var n2_html = parseFloat(prompt("Ingrese Nota 2 de HTML", ""));
var n3_html = parseFloat(prompt("Ingrese Nota 3 de HTML", ""));
var n1_css = parseFloat(prompt("Ingrese Nota 1 de CSS", ""));
var n2_css = parseFloat(prompt("Ingrese Nota 2 de CSS", ""));
var n3_css = parseFloat(prompt("Ingrese Nota 3 de CSS", ""));
var n1_js = parseFloat(prompt("Ingrese Nota 1 de JavaScript", ""));
var n2_js = parseFloat(prompt("Ingrese Nota 2 de JavaScript", ""));
var n3_js = parseFloat(prompt("Ingrese Nota 3 de JavaScript", ""));


var promedio_html = (n1_html + n2_html + n3_html) / 3;
var promedio_css = (n1_css + n2_css + n3_css) / 3;
var promedio_js = (n1_js + n2_js + n3_js) / 3;

document.getElementById("nota1_html").innerHTML = n1_html;
document.getElementById("nota2_html").innerHTML = n2_html;
document.getElementById("nota3_html").innerHTML = n3_html;
document.getElementById("nota1_css").innerHTML = n1_css;
document.getElementById("nota2_css").innerHTML = n2_css;
document.getElementById("nota3_css").innerHTML = n3_css;
document.getElementById("nota1_js").innerHTML = n1_js;
document.getElementById("nota2_js").innerHTML = n2_js;
document.getElementById("nota3_js").innerHTML = n3_js;
document.getElementById("n").innerHTML = nombre;
document.getElementById("prom_html").innerHTML = promedio_html;
document.getElementById("prom_css").innerHTML = promedio_css;
document.getElementById("prom_js").innerHTML = promedio_js;