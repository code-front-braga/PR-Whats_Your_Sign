export const zodiacImages = {
  ariesImage: './src/assets/images/aries.jpg',
  taurusImage: './src/assets/images/taurus.jpg',
  geminiImage: './src/assets/images/gemini.jpg',
  cancerImage: './src/assets/images/cancer.jpg',
  leoImage: './src/assets/images/leo.jpg',
  virgoImage: './src/assets/images/virgo.jpg',
  libraImage: './src/assets/images/libra.jpg',
  scorpioImage: './src/assets/images/scorpio.jpg',
  sagittariusImage: './src/assets/images/sagittarius.jpg',
  capricornImage: './src/assets/images/carpicorn.jpg',
  aquariusImage: './src/assets/images/aquarius.jpg',
  piscesImage: './src/assets/images/pisces.jpg',
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
