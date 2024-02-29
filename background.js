chrome.tabs.onUpdated.addListener((tab_id, tab) => {
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tab_id, {
            type: "NEW",
            videoID: urlParameters.get("v"),
        });
    }
});