export const zodiacImages = {
  ariesImage: '/src/assets/images/aries.png',
  taurusImage: '/src/assets/images/taurus.png',
  geminiImage: '/src/assets/images/gemini.png',
  cancerImage: '/src/assets/images/cancer.png',
  leoImage: '/src/assets/images/leo.png',
  virgoImage: '/src/assets/images/virgo.png',
  libraImage: '/src/assets/images/libra.png',
  scorpioImage: '/src/assets/images/scorpio.png',
  sagittariusImage: '/src/assets/images/sagittarius.png',
  capricornImage: '/src/assets/images/carpicorn.png',
  aquariusImage: '/src/assets/images/aquarius.png',
  piscesImage: '/src/assets/images/pisces.png',
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
