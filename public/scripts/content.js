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

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    
    if(msg.name === "saveItem") {
        var getObj = msg.data;
        console.log(getObj);
    }

});