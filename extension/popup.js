let solveButton = document.getElementById("solve");
let clearButton = document.getElementById("clear");

solveButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fireWigSolve,
    });
});

clearButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearSolns,
    });
});

function fireWigSolve() {
    document.dispatchEvent(new CustomEvent('clearSolns'));
    document.dispatchEvent(new CustomEvent('wigSolve'));
}

function clearSolns() {
    document.dispatchEvent(new CustomEvent('clearSolns'));
}