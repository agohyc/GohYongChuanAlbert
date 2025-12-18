const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Convert disneyData object values into numbers
let disneyData_Num = {
	open: Number(disneyData.open),
	high: Number(disneyData.high),
	low: Number(disneyData.low),
	close: Number(disneyData.close),
	volume: Number(disneyData.volume),
};
console.log(disneyData_Num);

// Set up conditions
if (disneyData_Num.close > disneyData_Num.open) {
	if (disneyData_Num.volume > 100000) {
		sentiment = "Strong Bullish"
	} else {
		sentiment = "Bullish"
	}
} else if (disneyData_Num.close < disneyData_Num.open) {
	if (disneyData_Num.volume > 100000) {
		sentiment = "Strong Bearish"
	} else {
		sentiment = "Bearish"
	}
} else {
	sentiment = "Neutral"
};
console.log(sentiment);
