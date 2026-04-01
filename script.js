function getResponse() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let response = "";

    if (input.includes("performance")) {
        response = "AI uses tracking data to improve player performance.";
    } else if (input.includes("injury")) {
        response = "AI predicts injuries using player workload and health data.";
    } else if (input.includes("strategy")) {
        response = "AI analyzes opponent patterns to improve game strategies.";
    } else {
        response = "AI is transforming sports with smart analytics!";
    }

    document.getElementById("response").innerText = response;
}
