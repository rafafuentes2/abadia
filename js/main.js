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
    let totalBase = getElementsByClassName("totalBase")[0].value
    let totalMon = getElementsByClassName("totalMon")[0].value
    let totalBill = getElementsByClassName("totalBill")[0].value
    let totalTrans = getElementsByClassName("totalTrans")[0].value
    let totalVentasDia = getElementsByClassName("totalVentasDia")[0].value
    
    proveedoresArr.forEach (function(numero){
        totalProv += Number(numero.valorProveedor);
    });
    calculoTotal =  Number(totalBill) + Number(totalTrans) + Number(totalMon) + Number(totalBase);
    calculoTotal = calculoTotal - totalProv;
    
}