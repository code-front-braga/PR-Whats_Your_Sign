// Criar função para captar o nome do usuário;
// Criar função para captar a data de nascimento do usuário (verificar REGEX);
// Criar função para alterar as imagens dos signos, conforme data de nascimento do usuário;
// Criar função que gera o texto Ex.: "Seu signo é: Touro";
// Criar função para nova pesquisa;

const form = document.querySelector('form') as HTMLFormElement;
const inputNameElement = document.querySelector('#name') as HTMLInputElement;
const inputBirthdayElement = document.querySelector('#birthday') as HTMLInputElement;
const spanNameElement = document.querySelector('.user-name') as HTMLSpanElement;

const modalZodiacSignInfo = document.querySelector('.modal-zodiac-sign-info');
const fade = document.querySelector('.fade');

const spanZodiacSignElement = document.querySelector('.zodiac-sign') as HTMLSpanElement;
const imageZodiacSignElement = document.querySelector('.sign-image') as HTMLImageElement;

const userNameContent = document.querySelector('.name-content') as HTMLElement;
const buttonCloseModalElement = document.querySelector('.button-close-modal');

export function submitForm() {
  form.addEventListener('submit', e => {
    e.preventDefault();

    let isValid = isValidInputFields();

    if (isValid) {
      modalZodiacSignInfo?.classList.add('modal-visible');
      fade?.classList.add('fade-visible');

      getUserName();
      getUserZodiacSign();
    }
    closeModal();
  });
}

export function closeModal() {
  buttonCloseModalElement?.addEventListener('click', () => {
    modalZodiacSignInfo?.classList.remove('modal-visible');
    fade?.classList.remove('fade-visible');
  });
}

export function getUserName() {
  return (spanNameElement.textContent = inputNameElement.value);
}

export function isValidInputFields() {
  let isValid = true;

  const errorsText = Array.from(document.querySelectorAll('.error-text')) as HTMLInputElement[];
  errorsText.forEach(errorText => errorText.remove());

  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (inputNameElement.value === '') {
    errorMessage(inputNameElement, 'Não deve estar vazio');
    isValid = false;
  }
  if (Number(inputNameElement.value)) {
    errorMessage(inputNameElement, 'Não pode conter números');
    isValid = false;
  }

  if (inputBirthdayElement.value === '' || !regex.test(inputBirthdayElement.value)) {
    errorMessage(inputBirthdayElement, 'O campo "Aniversário" não deve estar vazio');
    isValid = false;
  }

  if (!regex.test(inputBirthdayElement.value)) {
    errorMessage(inputBirthdayElement, 'O formato da data deve ser: "dd/mm/aaaa"');
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

export function errorMessage(inputField: HTMLInputElement, message: string) {
  const p = document.createElement('p');
  p.textContent = message;
  p.classList.add('error-text');
  userNameContent.appendChild(p);
  inputField.insertAdjacentElement('afterend', p);
}

submitForm();
