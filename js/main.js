import calculateTotalPriceUpdate from "./modules/calculateTotalPriceUpdate.js";

document.addEventListener('DOMContentLoaded', () => {
    const squareInput = document.querySelector('#square-input');
    const squareRange = document.querySelector('#square-range');
    const inputs = document.querySelectorAll('input');



    const basePrice = 6000;

    calculateTotalPriceUpdate(basePrice, squareInput);

    for (let input of inputs) {
        input.addEventListener('input', () => {
            calculateTotalPriceUpdate(basePrice, squareInput);
        })
    }

    squareRange.addEventListener('input', () => {
        squareInput.value = squareRange.value;
    });
    squareInput.addEventListener('input', () => {
        squareRange.value = squareInput.value;

        if (Number(squareInput.value) > 200) {
            squareInput.value = '200';
        }
    });


});