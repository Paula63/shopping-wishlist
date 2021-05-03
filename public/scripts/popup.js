// getting the selected radio button from the list of options
// document.querySelector('input[name="reduction"]:checked').value;

/*global chrome*/

// if above does not work
var radioBtn = document.getElementsByName('reduction');
var radio_value;
for(var i=0; i<radioBtn.length; i++) {
    if(radioBtn[i].checked){
        radio_value = radioBtn[i].value;
    }
}

// getting the selected object
// var dropSelect = document.getElementsByName('list');
// var dropList = document.getElementsByName('list');
// var optionValue;

// function setOption(dropList, optionValue) {
//     for(var j=0; j<dropList.options.length; j++) {
//         if(dropList.options[j].text === optionValue) {
//             dropList.options[j].selected = true;
//         }
//     }
// }

// getting the selected object
var dropSelect = document.getElementsByName('list');
var optionValue = dropSelect.value;
// for(var j=0; j<radioBtn.length; j++) {
//     if(dropSelect[j].selected){
//         optionValue = radioBtn[j].value;
//     }
// }

function saveItem(){

    var saveArr = [];

    var saveDetails = document.getElementsByClassName('reduction list');
    for(var k=0; k<saveDetails.length; k++){
        var saveItem = {};
        saveItem.type = saveDetails[k].querySelector('input').value;
        saveItem.type = saveDetails[k].querySelector('select').value;
        saveArr.push(saveItem);
    }
    console.log("array:", saveArr);

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){

        //check the current tab
        var activeTab = tabs[0];
    
        //list of commands
        var obj = saveArr;
    
        // eslint-disable-next-line no-undef
        chrome.tabs.sendMessage(activeTab.id, {command: 'runCommands', data: obj});
    
    });
}

document.querySelector('.save-btn').addEventListener('click', function(){
    saveItem();
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