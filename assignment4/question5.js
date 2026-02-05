const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let sumClose = 0;
for (let i=0; i<disneyData.length; i++) {
	numbClose = parseFloat(disneyData[i]["close"]);
	sumClose += numbClose;
}
let avgClose = sumClose/disneyData.length
let avgCloseRounded = avgClose.toFixed(2)
console.log("Average closing price of Disney is " + avgCloseRounded);