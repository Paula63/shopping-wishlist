// console.log("Ready to go!");

// let paragraphs  = document.getElementsByTagName('p');
// for (elt of paragraphs) {
//     elt.style['background-color'] = '';
// }

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse){
//     console.log(message);
//     let paragraphs = document.getElementsByTagName('p');
//     for (elt of paragraphs) {
//         elt.innerHTML = message.txt;
//     }
// }
// document.querySelector('.openModal').addEventListener('click', function(){
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, {command: "openModal"});

//     })
// })

/*global chrome*/

// chrome.runtime.onMessage.addListener('get-user-data', (response) => {
//     console.log("received user data", response);
//     // eslint-disable-next-line no-undef
//     initializeUI(response);
// });

// get current domain
chrome.runtime.sendMessage({command: "fetch"}, (response) => {
    showData(response.data);
});

chrome.runtime.sendMessage({command: "post", data: "save item"}, (response) => {
    showData(response.data);
});

var showData = function(data) {
    console.log("Item: ", data);
}

// sending message to fetch data from the database
// chrome.runtime.sendMessage({command: "fetch", data: {domain: domain}}, 
// (response) => {
//     parseItem(response.data, domain);
// })

// var parseItem;