const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Set up data dictionary
bacData_Dict = {
    Low: bacData[0],
    High: bacData[1],
    Open: bacData[2],
    Close: bacData[3],
    Volume: bacData[4],
};
console.log(bacData_Dict);

// Set up conditions
if (bacData_Dict.Close > bacData_Dict.Open) {
    if (bacData_Dict.Volume > 100000) {
        sentiment = "Strong Bullish"
    } else {
        sentiment = "Bullish"
    }
} else if (bacData_Dict.Close < bacData_Dict.Open) {
    if (bacData_Dict.Volume > 100000) {
        sentiment = "Strong Bearish"
    } else {
        sentiment = "Bearish"
    }
} else {
    sentiment = "Neutral"
};
console.log(sentiment);
