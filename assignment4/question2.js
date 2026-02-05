const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sumOfPrices = 0;
for (let price of amdPrices) {
    sumOfPrices += price;
}
console.log(sumOfPrices);
console.log(amdPrices.length);
let avgPrice = sumOfPrices / amdPrices.length;
let avgPriceRounded = avgPrice.toFixed(2);
console.log("The 7-day SMA of AMD is " + avgPriceRounded);