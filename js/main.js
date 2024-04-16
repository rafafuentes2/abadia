var proveedoresArr = []; 
let proveedor;
var posProvee = 0;
function pagoProveedor(){
let nombreProveedor = document.getElementsByClassName("nombreProveedor")[0].value
let valorProveedor = document.getElementsByClassName("valorProveedor")[0].value
if (nombreProveedor && valorProveedor){
    proveedoresArr.push({nombreProveedor,valorProveedor})
    document.getElementsByClassName("nombreProveedor")[0].value = ""
    document.getElementsByClassName("valorProveedor")[0].value = ""
    

    let scopeTable = document.createElement("tr"); 
    scopeTable.innerHTML = `<tr><th scope="row">1</th><td>${nombreProveedor}</td><td>${valorProveedor}</td><td><input type="button" value="Eliminar"></td></tr>`
   
    posProvee++;
    document.getElementsByClassName("tablaProveedores")[0].append(scopeTable)
}

}

function calculoCierre(){
    let cuadre;
    let totalProv = 0;
    let diferencia = 0;
    let totalBase = document.getElementsByClassName("totalBase")[0].value
    let totalMon = document.getElementsByClassName("totalMon")[0].value
    let totalBill = document.getElementsByClassName("totalBill")[0].value
    let totalTrans = document.getElementsByClassName("totalTrans")[0].value
    let totalVentasDia = document.getElementsByClassName("totalVentasDia")[0].value
    
    proveedoresArr.forEach (function(numero){
        totalProv += Number(numero.valorProveedor);
    });
    cuadre =  Number(totalProv) + Number(totalBill) + Number(totalTrans) + Number(totalMon) + Number(totalBase);
    //calculoTotal = Number(totalVentasDia) - totalProv
    //calculoTotal = Number(calculoTotal) - Number(totalProv);
    //calculoTotal = Number(calculoTotal) - Number(totalVentasDia);
    diferencia = Number(cuadre) - Number(totalVentasDia)
    document.getElementsByClassName("tirilla")[0].innerHTML = "$" + new Intl.NumberFormat('en-DE').format(totalVentasDia)
    document.getElementsByClassName("cuadre")[0].innerHTML = "$" + new Intl.NumberFormat('en-DE').format(cuadre)
    document.getElementsByClassName("diferencia")[0].innerHTML = "$" + new Intl.NumberFormat('en-DE').format(diferencia)
}