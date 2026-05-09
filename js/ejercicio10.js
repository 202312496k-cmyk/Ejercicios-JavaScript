let promedio = 17;
let nivel = "";

if(promedio < 11){
    nivel = "Bajo";
}else if(promedio < 14){
    nivel = "Regular";
}else if(promedio < 18){
    nivel = "Bueno";
}else{
    nivel = "Excelente";
}

document.getElementById("resultado").innerHTML =
"Nivel de rendimiento: " + nivel;