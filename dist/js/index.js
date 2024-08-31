// // Criar função para captar o nome do usuário;
// // Criar função para captar a data de nascimento do usuário (verificar REGEX);
// // Criar função para alterar as imagens dos signos, conforme data de nascimento do usuário;
// // Criar função que gera o texto Ex.: "Seu signo é: Touro";
const form = document.querySelector('form');
const inputNameElement = document.querySelector('#name');
const inputBirthdayElement = document.querySelector('#birthday');
const spanNameElement = document.querySelector('.user-name');
const spanZodiacSignElement = document.querySelector('.zodiac-sign');
const imageZodiacSignElement = document.querySelector('.sign-image');
const nameContent = document.querySelector('.name-content');
export function submitForm() {
    form.addEventListener('submit', e => {
        e.preventDefault();
        let isValid = isValidInputFields();
        if (isValid) {
            getUserName();
            getUserZodiacSign();
            // getSignImage()
        }
    });
}
export function getUserName() {
    return (spanNameElement.textContent = inputNameElement.value);
}
export function isValidInputFields() {
    let isValid = true;
    const errorsText = Array.from(document.querySelectorAll('.error-text'));
    errorsText.forEach(errorText => errorText.remove());
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (inputNameElement.value === '' || Number(inputNameElement.value)) {
        errorMessage(inputNameElement, 'Não deve estar vazio');
        isValid = false;
    }
    else if (inputBirthdayElement.value === '' || !regex.test(inputBirthdayElement.value)) {
        errorMessage(inputBirthdayElement, 'Aniversário não deve estar vazio');
        isValid = false;
    }
    return isValid;
}
export function getUserZodiacSign() {
    const [day, month] = inputBirthdayElement.value.split('/').map(Number);
    const zodiacImages = {
        aries: './src/assets/images/aries_sign.png',
        taurus: './src/assets/images/taurus_sign.png',
        gemini: './src/assets/images/gemini_sign.png',
        cancer: './src/assets/images/cancer_sign.png',
        leo: './src/assets/images/leo_sign.png',
        virgo: './src/assets/images/virgo_sign.png',
        libra: './src/assets/images/libra_sign.png',
        scorpio: './src/assets/images/scorpio_sign.png',
        sagittarius: './src/assets/images/sagittarius_sign.png',
        capricorn: './src/assets/images/carpicorn_sign.png',
        aquarius: './src/assets/images/aquarius_sign.png',
        pisces: './src/assets/images/pisces_sign.png',
    };
    if ((day >= 21 && month === 3) || (day <= 21 && month === 4)) {
        spanZodiacSignElement.textContent = 'Áries';
        imageZodiacSignElement.src = zodiacImages.aries;
    }
    if ((day >= 22 && month === 4) || (day <= 20 && month === 5)) {
        spanZodiacSignElement.textContent = 'Touro';
        imageZodiacSignElement.src = zodiacImages.taurus;
    }
    if ((day >= 21 && month === 5) || (day <= 21 && month === 6)) {
        spanZodiacSignElement.textContent = 'Gêmeos';
        imageZodiacSignElement.src = zodiacImages.gemini;
    }
    if ((day >= 22 && month === 6) || (day <= 22 && month === 7)) {
        spanZodiacSignElement.textContent = 'Câncer';
        imageZodiacSignElement.src = zodiacImages.cancer;
    }
    if ((day >= 23 && month === 7) || (day <= 23 && month === 8)) {
        spanZodiacSignElement.textContent = 'Leão';
        imageZodiacSignElement.src = zodiacImages.leo;
    }
    if ((day >= 24 && month === 8) || (day <= 23 && month === 9)) {
        spanZodiacSignElement.textContent = 'Virgem';
        imageZodiacSignElement.src = zodiacImages.virgo;
    }
    if ((day >= 24 && month === 9) || (day <= 23 && month === 10)) {
        spanZodiacSignElement.textContent = 'Libra';
        imageZodiacSignElement.src = zodiacImages.libra;
    }
    if ((day >= 24 && month === 10) || (day <= 22 && month === 11)) {
        spanZodiacSignElement.textContent = 'Escorpião';
        imageZodiacSignElement.src = zodiacImages.scorpio;
    }
    if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) {
        spanZodiacSignElement.textContent = 'Sagitário';
        imageZodiacSignElement.src = zodiacImages.sagittarius;
    }
    if ((day >= 22 && month === 12) || (day <= 21 && month === 1)) {
        spanZodiacSignElement.textContent = 'Capricórnio';
        imageZodiacSignElement.src = zodiacImages.capricorn;
    }
    if ((day >= 22 && month === 1) || (day <= 19 && month === 2)) {
        spanZodiacSignElement.textContent = 'Aquário';
        imageZodiacSignElement.src = zodiacImages.aquarius;
    }
    if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) {
        spanZodiacSignElement.textContent = 'Peixes';
        imageZodiacSignElement.src = zodiacImages.pisces;
    }
}
export function errorMessage(inputField, message) {
    const p = document.createElement('p');
    p.textContent = message;
    p.classList.add('error-text');
    nameContent.appendChild(p);
    inputField.insertAdjacentElement('afterend', p);
}
submitForm();
