function calculateTotalPriceUpdate(basePrice, squareInput) {
    const totalPriceOut = document.querySelector('#total-price');

    const inputs = document.querySelectorAll('input[name="type"], input[name="building"], input[name="rooms"], input[name="ceiling"], input[name="walls"], input[name="floor"]');

    let totalPrice = basePrice * Number(squareInput.value);
    const formatter = new Intl.NumberFormat('uk-Uk');

    totalPrice = Array.from(inputs).reduce((accum, item) => {
        if (item.checked) {
            if (item.name === 'ceiling') {
                return accum + Number(item.value) * Number(squareInput.value);
            } else {
                return accum * Number(item.value);
            }
        }
        return accum;
    }, totalPrice)

    totalPriceOut.innerHTML = formatter.format(totalPrice);
}
export default calculateTotalPriceUpdate;