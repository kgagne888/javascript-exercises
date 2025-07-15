const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 == 0; 
    const isYearCentury = year % 100 == 0; 
    const isYearDivisibleByFourHundred = year % 400 == 0; 

    if (isYearDivisibleByFour && 
        (!isYearCentury || isYearDivisibleByFourHundred)
    ) {
        return true; 
    } else {
        return false;
    };
}; 

// Do not edit below this line
module.exports = leapYears;
