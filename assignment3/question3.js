const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Create a new object comprised of disneyData key-float pairs 
let disneyData_conv = {
	open: Number(disneyData.open),
	high: Number(disneyData.high),
	low: Number(disneyData.low),
	close: Number(disneyData.close)
};
console.log(disneyData_conv);

// Perform calculations: 
let disneyData_calc = (disneyData_conv.open + disneyData_conv.high - disneyData_conv.low + disneyData_conv.close);
console.log(disneyData_calc);