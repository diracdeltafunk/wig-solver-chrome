chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostSuffix: 'whenisgood.net', pathContains: 'results' },
            })],
            actions: [new chrome.declarativeContent.ShowAction()]
        }]);
    });
});