describe('The test-bill function', function (){
    it("should be able to calculate the total cost for call in lowercase & in uppercase", function(){
        var textBill=calculateTextBill("Call");
       assert.equal(2.25, textBill.callBill(2.25));

    });

    it("should be able to calculate the total cost for sms in lowercase and in uppercase ", function(){
        var textBill=calculateTextBill("SMs");
       assert.equal(0.75, textBill.smsBill(0.75));

    });
    
    it("should be able to return total cost for calls & sms when both call & sms has been made", function(){
        var textBill=calculateTextBill("call");
        var textBill=calculateTextBill("sms");
       assert.equal(0.75, textBill.smsBill(0.75));
       assert.equal(2.25, textBill.callBill(2.25));

    });
    it("should be able to return warning when the warning level is reached", function(){
        var textBill=calculateTextBill("call");
        
        textBill.billTotal("Call,call,call,CALL,CALL,call,call, call,call,call,call,CALL,SMS,sms,sms,sms,sms,sms")
       

        textBill.totalBillCost()
        assert.equal("warning", textBill.warningLevel()) 
    
       });

       it("should be able to return critical when the critical level is reached", function(){
        var textBill=calculateTextBill("call");
        
        textBill.billTotal("Call,call,call,CALL,CALL,call,call, call,call,SMS,sms,sms,sms,sms,Call,call,call,CALL,CALL,call,call, call,call,call,call,CALL")
        textBill.totalBillCost()
        assert.equal("critical", textBill.criticalLevel()) 
    
       });


    });