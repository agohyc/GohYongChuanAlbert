const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
};

// Create a new variable object and include the "volume" key-string addition
let disneyData_New = {
	open: (disneyData.open),
	high: (disneyData.high),
	low: (disneyData.low),
	close: (disneyData.open),
	volume: "1512311",
};

console.log(disneyData_New);
