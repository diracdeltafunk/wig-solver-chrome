let solveButton = document.getElementById("solve");
let clearButton = document.getElementById("clear");

solveButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    let method = document.querySelector('input[name="method"]:checked').value;
    if (method == "relaxed") {
        config = { method: method, param: parseInt(document.getElementById("param_relaxed").value) };
    }
    else if (method == "transpose") {
        config = { method: method, param: parseInt(document.getElementById("param_transpose").value) };
    }
    else if (method == "strict") {
        config = { method: method };
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fireWigSolve,
        args: [config]
    });
});

clearButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearSolns,
    });
});

function fireWigSolve(config) {
    document.dispatchEvent(new CustomEvent('clearSolns'));
    document.dispatchEvent(new CustomEvent('wigSolve', { detail: config }));
}

function clearSolns() {
    document.dispatchEvent(new CustomEvent('clearSolns'));
}