chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        let rule = {
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostSuffix: 'whenisgood.net' },
            })],
            actions: [new chrome.declarativeContent.ShowAction()]
        };
        chrome.declarativeContent.onPageChanged.addRules([rule]);
    });
});