function calculateBill(){
    var total = 0;
    var smsCost = 0;
    var callCost = 0;
    

    function totalBill(bill){
        let billItem = bill.toLowerCase().split(',');
        for (let i=0; i<billItem.length;i++){
            if(billItem[i].includes('call')){
                callCost +=2.75;
            }else if (billItem[i].includes('sms')){
                smsCost +=0.75;
            }
        }
        
        total = callCost+smsCost
    }

    function getTotalCallCost(){
        return callCost;
    }
    function getTotalSmsCost(){
        return smsCost;
    }
    function getTotalCost(){
        return total.toFixed(2);
    }
    
    function warningLevel(){
        if (getTotalCost()>=20&&getTotalCost()<30){
            return "warning";
        }
    }
    function criticalLevel(){
        if(total>30){
            return "critical";
        }
    }

    return{
        totalBill,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        warningLevel,
        criticalLevel,
    }
}

   





