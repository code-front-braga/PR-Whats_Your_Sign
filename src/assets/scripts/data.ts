export const zodiacImages = {
  ariesImage: '/images/aries.png',
  taurusImage: '/images/taurus.png',
  geminiImage: '/images/gemini.png',
  cancerImage: '/images/cancer.png',
  leoImage: '/images/leo.png',
  virgoImage: '/images/virgo.png',
  libraImage: '/images/libra.png',
  scorpioImage: '/images/scorpio.png',
  sagittariusImage: '/images/sagittarius.png',
  capricornImage: '/images/carpicorn.png',
  aquariusImage: '/images/aquarius.png',
  piscesImage: '/images/pisces.png',
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
