describe('The calculate-bill function', function (){
    it("should return total call bill for both lowercase and uppercase", function(){
      let calculate = calculateBill();
      calculate.totalBill("call,CALL")
      assert.equal(5.5, calculate.getTotalCallCost()) 
    
    });

    it("should return total sms bill for both lowercase and uppercase", function(){
      let calculate = calculateBill();
      calculate.totalBill("sms,SMS")
      assert.equal(1.50, calculate.getTotalSmsCost()) 
    
    });

    it("should return warning when the total reach the warning level", function(){
      let calculate = calculateBill();
   
      calculate.totalBill("call,CALL,Call,call,call,call,call,call,call")
      // console.log(calculate.getTotalCost())
      assert.equal("warning", calculate.warningLevel()) 
    
    });

    it("should return critical when the total reach the critical level", function(){
      let calculate = calculateBill();

      calculate.totalBill("call,CALL,Call,call,call,call,call,call,call, sms, SMS,CAll, sms, sms,sms")
      assert.equal("critical", calculate.criticalLevel()) 
    
    });

   });

