const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// First calculate the 7-day moving avg price
let sumOfPrices = 0;
for (let price of amdPrices) {
    sumOfPrices += price;
}
let avgPrice = sumOfPrices / amdPrices.length;
console.log("The 7-day SMA of AMD was " + avgPrice);
//Then re-loop and count the number of days the price was > 7-day moving avg price
let i = 0
for (let price of amdPrices) {
    if (price > avgPrice) {
        i+=1;
    }
}
console.log("Number of days AMD was above the 7-day SMA is: " + i);

