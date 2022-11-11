alert('hola munco');

var nombre = "Juan";
document.getElementById("write").innerHTML = nombre;
function imprimir(valor){
    if(valor == 4){
        document.getElementById("write").innerHTML = nombre + " WINNER";
        return;
    }
    document.getElementById("write").innerHTML = nombre + "ere un paleto";
}