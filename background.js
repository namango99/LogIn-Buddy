var reference = {
    "https://www.codechef.com/*": "codechef",
    "https://codeforces.com/enter*": "codeforces",
    "https://www.linkedin.com/login*" : "linkedIn",
    "https://www.quora.com/*": "quora"
}
var referenceKeys = Object.keys(reference);

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    var URL = tab.url;
    var ok = false;
    for(var i = 0; i < referenceKeys.length && !ok; i++){
        if(URL.match(referenceKeys[i])){
            var data = localStorage.getItem(reference[referenceKeys[i]]);
            chrome.tabs.sendMessage(tab.id, {1: data});
            ok = true;
        }
    }
    if(!ok){
        console.log("Extension currently not Availabe for this site.. Sorry");
    }
}