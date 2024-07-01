
function calculateTip(){

const billamount = parseFloat(document.getElementById("bill amount").value);
const tippercentage = parseFloat(document.getElementById("tip-percentage").value);


const tipamount = billamount*(tippercentage/100);
const totalamount = tipamount + billamount;


document.getElementById("tip-amount").textContent = `$` + tipamount.toFixed(2);
document.getElementById("total-amount").textContent = `$` + totalamount.toFixed(2);

}