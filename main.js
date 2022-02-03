// Validates card numbers and returns true/false if the numbers pass the Luhn Algorithm test.
const validateCred = (array) => {
  const checkArray = array.slice().reverse();
  for (let i = 0; i < checkArray.length; i++) {
    if (!(i % 2 === 0)) {
      checkArray[i] *= 2;
      if (checkArray[i] > 9) checkArray[i] -= 9;
    }
  }
  const sumOfArray = checkArray.reduce((prevValue, currValue) => prevValue + currValue);
  return sumOfArray % 10 === 0 ? true : false;
};


// Takes in a 2d nested array and checks if each inner array of card numbers passes Luhn Algorithm test. Returns an array of invalid card numbers.
const findInvalidCards = (nestedArray) => nestedArray.filter(cardNumbers => !validateCred(cardNumbers));


// Takes in a nested array of invalid card numbers and returns an array of associated companies with no duplicates.
const idInvalidCardCompanies = (nestedArray) => {
  const invalidCompanies = [];
  for (let i = 0; i < nestedArray.length; i++) {
    switch (nestedArray[i][0]) {
      case 3:
        if (!(invalidCompanies.includes('Amex'))) invalidCompanies.push('Amex');
        break;
      case 4:
        if (!(invalidCompanies.includes('Visa'))) invalidCompanies.push('Visa');
        break;
      case 5:
        if (!(invalidCompanies.includes('Mastercard'))) invalidCompanies.push('Mastercard');
        break;
      case 6:
        if (!(invalidCompanies.includes('Discover'))) invalidCompanies.push('Discover');
        break;
      default:
        console.log('Company Not Found for card number ' + nestedArray[i]);
        break;
    }
  }
  return invalidCompanies;
};
