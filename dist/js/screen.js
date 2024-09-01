import { getZodiacSign, zodiacImages } from './data.js';
import { isDateFormattedCorrectly } from './utils.js';
const userNameInput = document.querySelector('#name');
const userBirthdayInput = document.querySelector('#birthday');
const fadeOverlayElement = document.querySelector('.fade');
const modalZodiacSignInfoElement = document.querySelector('.modal-zodiac-sign-info');
export default function handleFormSubmit() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', e => {
        e.preventDefault();
        let isFieldsValid = validateInputFields();
        if (isFieldsValid) {
            displayUserName();
            displayUserZodiacSign();
            openModal();
        }
    });
}
function displayUserName() {
    const nameDisplay = document.querySelector('.user-name');
    nameDisplay.textContent = `${userNameInput.value},`;
}
function validateInputFields() {
    let isValid = true;
    const getNameFromUserInput = userNameInput.value;
    const getBirthdayFromUserInput = userBirthdayInput.value;
    clearErrorMessages();
    const errorMessages = [
        { condition: () => getNameFromUserInput === '', message: 'Não deve estar vazio' },
        { condition: () => !isNaN(Number(getNameFromUserInput)), message: 'Não pode conter números' },
    ];
    errorMessages.forEach(({ condition, message }) => {
        if (condition()) {
            displayValidationError(userNameInput, message);
            isValid = false;
        }
    });
    if (!getBirthdayFromUserInput || !isDateFormattedCorrectly(userBirthdayInput)) {
        displayValidationError(userBirthdayInput, 'O campo "Aniversário" não deve estar vazio');
        isValid = false;
    }
    if (!isDateFormattedCorrectly(userBirthdayInput)) {
        displayValidationError(userBirthdayInput, 'O formato da data deve ser: "dd/mm/aaaa"');
        isValid = false;
    }
    return isValid;
}
function displayUserZodiacSign() {
    const { ariesImage, taurusImage, geminiImage, cancerImage, leoImage, virgoImage, libraImage, scorpioImage, sagittariusImage, capricornImage, aquariusImage, piscesImage, } = zodiacImages;
    const { isAriesDate, isTaurusDate, isGeminiDate, isCancerDate, isLeoDate, isVirgoDate, isLibraDate, isScorpioDate, isSagittariusDate, isCapricornDate, isAquariusDate, isPiscesDate, } = getZodiacSign(userBirthdayInput);
    switch (true) {
        case isAriesDate:
            displayZodiacSign('Áries', ariesImage);
            break;
        case isTaurusDate:
            displayZodiacSign('Touro', taurusImage);
            break;
        case isGeminiDate:
            displayZodiacSign('Gêmeos', geminiImage);
            break;
        case isCancerDate:
            displayZodiacSign('Câncer', cancerImage);
            break;
        case isLeoDate:
            displayZodiacSign('Leão', leoImage);
            break;
        case isVirgoDate:
            displayZodiacSign('Virgem', virgoImage);
            break;
        case isLibraDate:
            displayZodiacSign('Libra', libraImage);
            break;
        case isScorpioDate:
            displayZodiacSign('Scorpião', scorpioImage);
            break;
        case isSagittariusDate:
            displayZodiacSign('Sagitário', sagittariusImage);
            break;
        case isCapricornDate:
            displayZodiacSign('Capricórnio', capricornImage);
            break;
        case isAquariusDate:
            displayZodiacSign('Aquário', aquariusImage);
            break;
        case isPiscesDate:
            displayZodiacSign('Peixes', piscesImage);
            break;
    }
}
function displayZodiacSign(zodiacSignName, zodiacSignImg) {
    const zodiacSignDisplay = document.querySelector('.zodiac-sign');
    const zodiacSignImageElement = document.querySelector('.zodiac-sign-image');
    zodiacSignDisplay.textContent = zodiacSignName;
    zodiacSignImageElement.src = zodiacSignImg;
}
function displayValidationError(inputField, message) {
    const nameContentContainer = document.querySelector('.name-content');
    const p = document.createElement('p');
    p.textContent = message;
    p.classList.add('error-message');
    nameContentContainer.appendChild(p);
    inputField.insertAdjacentElement('afterend', p);
}
function openModal() {
    clearFormInputs();
    fadeOverlayElement?.classList.add('fade-visible');
    modalZodiacSignInfoElement?.classList.add('modal-visible');
}
export function closeModal() {
    const closeModalButton = document.querySelector('.button-close-modal');
    closeModalButton?.addEventListener('click', () => {
        modalZodiacSignInfoElement?.classList.remove('modal-visible');
        fadeOverlayElement?.classList.remove('fade-visible');
    });
}
function clearFormInputs() {
    userNameInput.value = '';
    userBirthdayInput.value = '';
}
function clearErrorMessages() {
    const errorMessages = Array.from(document.querySelectorAll('.error-message'));
    errorMessages.forEach(errorMessage => errorMessage.remove());
}
