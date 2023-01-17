const simpleDigital = [ 'zero', 'one' , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const decimal = [ 'ten', 'eleven' , 'twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    let strNumber = String(number).split('');
    const strNumberLenght = strNumber.length;
    let tenthInHundrer = strNumber.slice(1).join('');

    switch (true) {
        case strNumberLenght === 1:
            return simpleDigital[number];

        case strNumberLenght === 2 && strNumber[0] === '1':
            return decimal[strNumber[1]];
        case strNumberLenght === 2 && number%10 === 0:
            return tenth[strNumber[0]];
        case strNumberLenght === 2 && number%10 !== 0 :
            return tenth[strNumber[0]] + ' ' + simpleDigital[strNumber[1]];

        case strNumberLenght === 3 && number%100===0:
            return simpleDigital[strNumber[0]] + ' ' + 'hundred';
        case strNumberLenght === 3 && strNumber[1] === '1':
            return simpleDigital[strNumber[0]] + ' ' + 'hundred' + ' ' + decimal[strNumber[2]];
        case strNumberLenght === 3 && strNumber[1] === '0' && strNumber[2] >= '1' :
            return simpleDigital[strNumber[0]] + ' ' + 'hundred' +  ' ' + simpleDigital[strNumber[2]];
        case strNumberLenght === 3 && tenthInHundrer%10 === 0 :
            return simpleDigital[strNumber[0]] + ' ' + 'hundred' +  ' ' + tenth[strNumber[1]];
        case strNumberLenght === 3 && tenthInHundrer%10 !== 0 :
            return simpleDigital[strNumber[0]] + ' ' + 'hundred' +  ' ' + tenth[strNumber[1]] + ' ' + simpleDigital[strNumber[2]];
            
    }
 }
