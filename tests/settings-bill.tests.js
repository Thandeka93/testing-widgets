describe('Set values for bill with settings factory function ', function (){
    it("should be able to set the call cost", function(){
     let settingsBill = billWithSettings()
     settingsBill.setCriticalLevel(15);
    settingsBill.setCallCost(1.85);
    assert.equal(1.85, settingsBill.getCallCost());

    let settingsBill2 = billWithSettings()
    settingsBill2.setCallCost(2.75);
    assert.equal(2.75, settingsBill2.getCallCost());

    });
    it("should be able to set the sms cost", function(){
        let settingsBill = billWithSettings()
       settingsBill.setSmsCost(0.65);
       assert.equal(0.65, settingsBill.getSmsCost());
   
       let settingsBill2 = billWithSettings()
       settingsBill2.setSmsCost(1.30);
       assert.equal(1.30, settingsBill2.getSmsCost());
   
       });

       it("should be able to set both the sms and call cost", function(){
        let settingsBill = billWithSettings()
       settingsBill.setSmsCost(0.65);
       settingsBill.setCallCost(1.85);
       assert.equal(0.65, settingsBill.getSmsCost());
       assert.equal(1.85, settingsBill.getCallCost());
   
       });

       it("should return 0 when passed with an empty string", function(){
        let settingsBill = billWithSettings()
       settingsBill.setSmsCost("");
       settingsBill.setCallCost("");
       assert.equal("", settingsBill.getSmsCost());
       assert.equal("", settingsBill.getCallCost());
   
       });

       it("should be able to set the warning level", function(){
        let settingsBill = billWithSettings()
       settingsBill.setWarningLevel(20);
       assert.equal(20, settingsBill.getWarningLevel());
   
       let settingsBill2 = billWithSettings()
       settingsBill2.setWarningLevel(30);
       assert.equal(30, settingsBill2.getWarningLevel());
   
       });

       it("should be able to set the critical level", function(){
        let settingsBill = billWithSettings()
       settingsBill.setCriticalLevel(40);
       assert.equal(40, settingsBill.getCriticalLevel());
   
       let settingsBill2 = billWithSettings()
       settingsBill2.setCriticalLevel(50);
       assert.equal(50, settingsBill2.getCriticalLevel());
   
       });

       it("should be able to set both the critical and warning level", function(){
        let settingsBill = billWithSettings()
       settingsBill.setWarningLevel(20);
       settingsBill.setCriticalLevel(40);
       assert.equal(20, settingsBill.getWarningLevel());
       assert.equal(40, settingsBill.getCriticalLevel());
   
       });

});

describe('Use values set for bill with settings factory function ', function (){
    it("should be able to use the call cost set", function(){
     let settingsBill = billWithSettings()
     settingsBill.setCriticalLevel(15);
    settingsBill.setCallCost(2.85);
    settingsBill.setSmsCost(0.65)

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    
    assert.equal(8.55, settingsBill.getTotalCost());
    assert.equal(8.55, settingsBill.getTotalCallCost());
    assert.equal(0.00, settingsBill.getTotalSmsCost());

    });


    it("should be able to use the call cost set for 2 calls at 3.85 each", function(){
        let settingsBill = billWithSettings()
        settingsBill.setCriticalLevel(15);
       settingsBill.setCallCost(3.85);
       settingsBill.setSmsCost(0.65)
   
       settingsBill.makeCall();
       settingsBill.makeCall();
       
   
       assert.equal(7.70, settingsBill.getTotalCost());
       assert.equal(7.70, settingsBill.getTotalCallCost());
       assert.equal(0.00, settingsBill.getTotalSmsCost());
   
       });

       it("should be able to send sms for 2 sms at 0.65 each", function(){
        let settingsBill = billWithSettings()
        settingsBill.setCriticalLevel(15);
       settingsBill.setCallCost(3.85);
       settingsBill.setSmsCost(0.65)
   
       settingsBill.sendSms();
       settingsBill.sendSms();
       
   
       assert.equal(1.30, settingsBill.getTotalCost());
       assert.equal(1.30, settingsBill.getTotalSmsCost());
       assert.equal(0.00, settingsBill.getTotalCallCost());
   
       });

       it("should be able to send sms for 2 sms at 0.65 each and make 1 call at 2.85", function(){
        let settingsBill = billWithSettings()
        settingsBill.setCriticalLevel(15);
       settingsBill.setCallCost(2.85);
       settingsBill.setSmsCost(0.65)
   
       settingsBill.sendSms();
       settingsBill.sendSms();
       settingsBill.makeCall();
       
   
       assert.equal(4.15, settingsBill.getTotalCost());
       assert.equal(1.30, settingsBill.getTotalSmsCost());
       assert.equal(2.85, settingsBill.getTotalCallCost());
   
       });
    });

       describe('Critical and warning level', function (){
        it("should return a class name of 'warning' if warning level is reached", function(){
         let settingsBill = billWithSettings()
         settingsBill.setCriticalLevel(15)
    
        settingsBill.setCallCost(2.85)
        settingsBill.setSmsCost(0.65)
        settingsBill.setWarningLevel(10)
       
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
       

        assert.equal("critical", settingsBill.totalClassName());
   
    
        });

        it("should return a class name of 'critical' if critical level is reached", function(){
            let settingsBill = billWithSettings()
       
           settingsBill.setCallCost(2.85)
           settingsBill.setSmsCost(0.65)
           settingsBill.setWarningLevel(10)
        
       
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();

   
           assert.equal("critical", settingsBill.totalClassName());
      
       
           });

           it("should stop adding when critical level is reached", function(){
            let settingsBill = billWithSettings()
            settingsBill.setCriticalLevel(15);
           settingsBill.setCallCost(2.85)
           settingsBill.setSmsCost(0.65)
           settingsBill.setCriticalLevel(15)
        
       
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           
           

   
           assert.equal("critical", settingsBill.totalClassName());
           assert.equal(17.1, settingsBill.getTotalCallCost());
      
       
           });
        
           it("should continue adding when critical level is updated with a new value", function(){
            let settingsBill = billWithSettings()
            settingsBill.setCriticalLevel(15);
           settingsBill.setCallCost(2.85)
           settingsBill.setSmsCost(0.65)
           settingsBill.setWarningLevel(9)
        //    settingsBill.setCriticalLevel(15)
        
       
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           settingsBill.makeCall();
           
           

   
           assert.equal("critical", settingsBill.totalClassName());
           assert.equal(17.1, settingsBill.getTotalCallCost());
      
       
           settingsBill.setCriticalLevel(20);

           assert.equal("critical", settingsBill.totalClassName());
           settingsBill.makeCall();
           settingsBill.makeCall();
           assert.equal(22.800000000000004, settingsBill.getTotalCallCost());

           });

        });
