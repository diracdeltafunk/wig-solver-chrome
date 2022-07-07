let solveButton = document.getElementById("solve");

solveButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fireWigSolve,
    });
});

function fireWigSolve() {
    document.dispatchEvent(new CustomEvent('wigSolve'));
}