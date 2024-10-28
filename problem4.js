/*function signature/sample */
function calculateFinalScore(obj) {
    //write your code here
    if (typeof obj === "object") {
        if (obj.isFFamily === true) {
            obj.isFFamily = 20;
        }
        else {
            obj.isFFamily = 0;
        }

        const totalNumber = obj.testScore + obj.schoolGrade + obj.isFFamily;
        // console.log(totalNumber);
        if (totalNumber >= 80 && obj.testScore <= 50 && obj.schoolGrade <= 30) {

            return true;
        }
        else {
            return false;
        }

    }


    else {
        return 'Invalid Input ';
    }
}


const input1 = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true };
console.log(calculateFinalScore(input1));

const input2 = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false } ;
console.log(calculateFinalScore(input2));

const input3 = "hello"
console.log(calculateFinalScore(input3));

const input4 = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };
console.log(calculateFinalScore(input4));