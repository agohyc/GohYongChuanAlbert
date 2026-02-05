const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let avgClosing = (msftData[0][3] + msftData[1][3])/msftData.length;
let avgClosingRounded = avgClosing.toFixed(2);
console.log("Average closing price of MSFT is " + avgClosingRounded);