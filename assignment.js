function calculateTax(income,expense)
{
    if(income>=0 && expense>=0 && income>=expense)
    {
        const earn = income-expense;
        const tax=earn*0.2;
        return tax;
    }
    else{
        return "Invalid Input";
    }
}


function sendNotification(email) {

    if(email.includes('@') && email.split('@').length===2){
    const[userName,domainName]=email.split('@');
    const notification = userName + " sent you an email from " + domainName;
     return notification;
    }
    else{
        return"Invalid Email";
    }
}




function checkDigitsInName(name){
    if(typeof name === 'string' && !Array.isArray(name))
    {
    for(let i=0; i<name.length;i++){
        if(name[i]>='0' && name[i]<='9'){
            return true;
        }
    }
    return false;
}
else{
    return "Invalid Input";
}


}

function calculateFinalScore(obj) {
    if(typeof obj !== 'object')
    {
        return "Invalid Input"

    }
    var totalMarks=obj.testScore+obj.schoolGrade;

    
    if(obj.isFFamily){
        var marks = totalMarks + 20;
    }
    else{
        marks = totalMarks;
    }

    if(obj.isFFamily && marks>=80)
    {
        return true;
    }
    else if(obj.isFFamily && marks<80)
    {
        return false;
    }
    else if(!obj.isFFamily && marks>80)
    {
        return true;
    }
    else if(! obj.isFFamily && marks<80){
        return false;
    }
}



function  waitingTime(waitingTimes,serialNumber) {
    
    if (Array.isArray(waitingTimes) && typeof serialNumber === 'number') {} else {
        return "Invalid Input";
        
    }
    var time = 0;
    var avg=0;
    restNumber;
     
    var countTime = (waitingTimes.length);
    for(i=0; i<waitingTimes.length; i++)
    {
         time = time+waitingTimes[i];
         
    }

    avg =  Math.round(time/countTime);
     var restNumber  = ((serialNumber-1)-countTime);
     var needTime;
     needTime = (avg*restNumber);
     return needTime; 
}
