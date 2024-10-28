/*function signature/sample */
function sendNotification(email) {
    // You have to write your code here

    if( email.includes('@') ){
        const mail = email.split ("@");
    const name = mail;
    const username = name[0];
    const domainName = name[1];
   
     const result = username +' '+ 'sent you an email from' +' '+ domainName;
     return result;
    }
    else{
        return 'Invalid Email';
    }

}
    const inputMail = 'zihad@gmail.com';
 const gmail = sendNotification(inputMail);
 console.log(gmail);


 const yahooMail = 'farhan34@yahoo.com';
 const yahoo = sendNotification(yahooMail);
 console.log(yahoo);

 const outlookMail = 'nadim.naem5@outlook.com';
 const outlook = sendNotification(outlookMail);
 console.log(outlook);

 const hotmail = 'fahim234.hotmail.com';
 const hot = sendNotification(hotmail);
 console.log( hot);

 const cloudMail = 'sadia8icloud.com';
 const cloud = sendNotification(cloudMail);
 console.log(cloud);