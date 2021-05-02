// browser action is a chrome API there is also a messaging api for allowing 
// the ackgorund script to communicate with the content script
// chrome.browserAction.onClicked.addListener(clickExtension);

// function clickExtension(tab){
//     let msg = {
//         txt: "hello"
//     }
//     chrome.tabs.sendMessage(tab.id, msg);
// }

chrome.webRequest.onBeforeRequest.addListener(
    function(datails) {
        return {cancel: false}
    },
    {urls: ["<all_urls>"]}
)