export function isDateFormattedCorrectly(userBirthdayInput: HTMLInputElement) {
  const datePatternRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  return datePatternRegex.test(userBirthdayInput.value);
}
