function calculateTextBill() {
  var callCost = 2.25;
  var smsCost = 0.75;
  var totalCost = 0;

  function billTotal(textBill) {
    let billEntered = textBill.toLowerCase().split(',');
    for (let i = 0; i < billEntered.length; i++) {
      if (billEntered[i].includes('call')) {
        callCost += 2.75;
      } else if (billEntered[i].includes('sms')) {
        smsCost += 0.75;
      }
    }

    totalCost = callCost + smsCost
  }

  function callBill() {
    return callCost;
  }
  function smsBill() {
    return smsCost;
  }
  function totalBill() {
    return totalCost.toFixed(2);
  }
  function warningLevel() {
    if (totalBill() >= 30 && totalBill() < 50) {
      return "warning";
    }
  }
  function criticalLevel() {
    if (totalBill > 50) {
      return "critical";
    }
  }

  return {
    billTotal,
    callBill,
    smsBill,
    totalBill,
    warningLevel,
    criticalLevel

  };
}




