export const zodiacImages = {
  ariesImage: './src/assets/images/aries_sign.png',
  taurusImage: './src/assets/images/taurus_sign.png',
  geminiImage: './src/assets/images/gemini_sign.png',
  cancerImage: './src/assets/images/cancer_sign.png',
  leoImage: './src/assets/images/leo_sign.png',
  virgoImage: './src/assets/images/virgo_sign.png',
  libraImage: './src/assets/images/libra_sign.png',
  scorpioImage: './src/assets/images/scorpio_sign.png',
  sagittariusImage: './src/assets/images/sagittarius_sign.png',
  capricornImage: './src/assets/images/carpicorn_sign.png',
  aquariusImage: './src/assets/images/aquarius_sign.png',
  piscesImage: './src/assets/images/pisces_sign.png',
};

export function getZodiacSign(inputBirthday: HTMLInputElement) {
  const [day, month] = inputBirthday.value.split('/').map(Number);

  return {
    isAriesDate: (day >= 21 && month === 3) || (day <= 21 && month === 4),
    isTaurusDate: (day >= 22 && month === 4) || (day <= 20 && month === 5),
    isGeminiDate: (day >= 21 && month === 5) || (day <= 21 && month === 6),
    isCancerDate: (day >= 22 && month === 6) || (day <= 22 && month === 7),
    isLeoDate: (day >= 23 && month === 7) || (day <= 23 && month === 8),
    isVirgoDate: (day >= 24 && month === 8) || (day <= 23 && month === 9),
    isLibraDate: (day >= 24 && month === 9) || (day <= 23 && month === 10),
    isScorpioDate: (day >= 24 && month === 10) || (day <= 22 && month === 11),
    isSagittariusDate: (day >= 23 && month === 11) || (day <= 21 && month === 12),
    isCapricornDate: (day >= 22 && month === 12) || (day <= 21 && month === 1),
    isAquariusDate: (day >= 22 && month === 1) || (day <= 19 && month === 2),
    isPiscesDate: (day >= 20 && month === 2) || (day <= 20 && month === 3),
  };
}
