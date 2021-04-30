chrome.tabs.query({currentWindow: true, active: true}, function (tabs){

    //check the current tab
    var activeTab = tabs[0];

    //list of commands
    var obj = {};

    // eslint-disable-next-line no-undef
    chrome.tabs.sendMessage(activeTab.id, {command: 'runCommands', data: obj});

});



// function setup() {
//     noCanvas();
//     let userinput = select('#userinput');
//     userinput.input(submitText);

//     function submitText() {

//         let params = {
//             active: true,
//             currentWindow: true
//         }

//         chrome.tabs.query(params, gotTab);

//         function gotTab(tabs) {
//             console.log("got tabs");
//             console.log(tabs);
//             // send message to the content script
//             let message = userinput.value();
//             let msg = {
//                 txt: userinput.value()
//             }
//             chrome.tabs.sendMessage(tabs[0].id, msg);
//         }
//     }
// }