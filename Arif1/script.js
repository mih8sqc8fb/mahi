document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const result = document.getElementById('result');
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');

    generateButton.addEventListener('click', () => {
        const minValue = parseInt(minValueInput.value);
        const maxValue = parseInt(maxValueInput.value);
        if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
            result.textContent = 'Please enter valid minimum and maximum values.';
            return;
        }
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        result.textContent = `Random Number: ${randomNumber}`;
    });
});