
function  waitingTime(waitingTimes  , serialNumber) {
  
    const array = Array.isArray(waitingTimes);
    console.log(array);

    if( array === 'true' && typeof serialNumber === 'number' ){
        console.log(waitingTimes , serialNumber);
    }
    else{
        return 'Invalid Input';
    }

}


    const time1 = [ 3, 5, 7, 11, 6 ];
    const serialNumber1 = 10;

    console.log(waitingTime ( time1 , serialNumber1));

