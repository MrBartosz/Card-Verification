const cardVerification = (num) => {
    
    const mastercard = /^5[1-5]\d{14}$/.test(num);
    const visa = /^4(\d{12}|\d{15})$/.test(num);
    const americanExpress = /^(34|37)\d{13}$/.test(num);
    let currentNumber = 'Unknown';
    let algorithmSum = 0;

    if (!mastercard && !visa && !americanExpress) {
        return `Your number is incorrect`;
    } 

    if (mastercard) {
        currentNumber = 'MasterCard';
    }
    else if (visa) {
        currentNumber = 'Visa';
    }
    else if (americanExpress) {
        currentNumber = 'American Express';
    }

    for (let i = num.length - 2; i >= 0; i -= 2) {
        let doubledDigit = Number(num[i]) * 2;
        if (doubledDigit > 9) {
            doubledDigit = doubledDigit - 9;
        }
        algorithmSum += doubledDigit;
    }

    for (let i = num.length - 1; i >= 0; i -= 2) {
        algorithmSum += Number(num[i]);
    }

    if (algorithmSum % 10 === 0) {
        return `Your number is incorrect`;
    }

    return `${currentNumber}, Valid card number`;
};


const numberToCheck = document.querySelector('#card-number');
const submitButton = document.querySelector('.credit-card__button');
const resultSpan = document.querySelector('.result');
const mastercardButton = document.querySelector('.btn-sample1');
const visaButton = document.querySelector('.btn-sample2');
const americanExpressButton = document.querySelector('.btn-sample3');
let actualNumber = '';

mastercardButton.addEventListener('click', () => {
    numberToCheck.value = '5222222222222222';
    actualNumber = '5222222222222222';
    resultSpan.textContent = cardVerification('5222222222222222');
});

visaButton.addEventListener('click', () => {
    numberToCheck.value = '4916123456789012';
    actualNumber = '4916123456789012';
    resultSpan.textContent = cardVerification('4916123456789012');
});

americanExpressButton.addEventListener('click', () => {
    numberToCheck.value = '371234567890123';
    actualNumber = '371234567890123';
    resultSpan.textContent = cardVerification('371234567890123');
});

numberToCheck.addEventListener('input', (event) => {
    actualNumber = event.target.value;
})

submitButton.addEventListener('click', () => {
    resultSpan.textContent = cardVerification(actualNumber);
})