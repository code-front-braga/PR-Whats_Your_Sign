export function isDateFormattedCorrectly(userBirthdayInput) {
    const datePatternRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return datePatternRegex.test(userBirthdayInput.value);
}
