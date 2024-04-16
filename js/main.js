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
    let calculoTotal;
    let totalProv = 0;
    let totalBase = document.getElementsByClassName("totalBase")[0].value
    let totalMon = document.getElementsByClassName("totalMon")[0].value
    let totalBill = document.getElementsByClassName("totalBill")[0].value
    let totalTrans = document.getElementsByClassName("totalTrans")[0].value
    let totalVentasDia = document.getElementsByClassName("totalVentasDia")[0].value
    
    proveedoresArr.forEach (function(numero){
        totalProv += Number(numero.valorProveedor);
    });
    calculoTotal =  Number(totalBill) + Number(totalTrans) + Number(totalMon) + Number(totalBase);
    calculoTotal = calculoTotal - totalProv;
    calculoTotal = calculoTotal - totalVentasDia;
    document.getElementsByClassName("resultado")[0].innerHTML = "$" + new Intl.NumberFormat('en-DE').format(calculoTotal)

}