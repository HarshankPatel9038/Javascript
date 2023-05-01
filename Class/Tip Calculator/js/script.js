document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault();
});

function calculateTip() {

  let billAmount = parseInt(document.getElementById("billAmount").value);
  let percentageTip = parseInt(document.getElementById("percentageTip").value);
  let tipAmount = document.getElementById("tipAmount");
  let Total = document.getElementById("Total");

  totalTipAmount = billAmount * percentageTip / 100;

  tipAmount.value = totalTipAmount;

  Total.value = billAmount + totalTipAmount;

}