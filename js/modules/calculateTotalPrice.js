function calculateTotalPrice(basePrice, squareInput) {
    const totalPriceOut = document.querySelector('#total-price');

    const radioType =  document.querySelectorAll('input[name="type"]');
    const radioBuilding =  document.querySelectorAll('input[name="building"]');
    const radioRooms =  document.querySelectorAll('input[name="rooms"]');

    const ceiling =  document.querySelector('input[name="ceiling"]');
    const walls =  document.querySelector('input[name="walls"]');
    const floor =  document.querySelector('input[name="floor"]');

    let totalPrice = basePrice * Number(squareInput.value);
    const formatter = new Intl.NumberFormat('uk-Uk');

    for (const radio of radioType) {
        if (radio.checked) {
            totalPrice = totalPrice * Number(radio.value);
        }
    }

    for (const radio of radioBuilding) {
        if (radio.checked) {
            totalPrice = totalPrice * Number(radio.value);
        }
    }

    for (const radio of radioRooms) {
        if (radio.checked) {
            totalPrice = totalPrice * Number(radio.value);
        }
    }

    if (ceiling.checked) {
        totalPrice = totalPrice + Number(ceiling.value) * Number(squareInput.value);
    }

    if (walls.checked) {
        totalPrice = totalPrice * Number(walls.value);
    }

    if (floor.checked) {
        totalPrice = totalPrice * Number(floor.value);
    }


    totalPriceOut.innerHTML = formatter.format(totalPrice);
}
export default calculateTotalPrice;