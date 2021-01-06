chrome.runtime.onMessage.addListener(recievedMessage);

function recievedMessage(message, sender, sendResponse){
    var data = message["1"];
    data = retrieveData(data);
    if(data.length == 3){
        var tag = document.querySelector("input")
        var hash = tag.id.slice(0, 13);
        var usernameTarget = document.querySelector(hash + "20_email");
        if(usernameTarget == null){
            console.log("Sorry! Not applicable at this web page!!!");
            return;
        }
        usernameTarget.value = data[0];
        var passwordTarget = document.querySelector(hash + "20_password");
        if(passwordTarget == null){
            console.log("Sorry! Not applicable at this web page!!!");
            return;
        }
        passwordTarget.value = data[1];
        var buttonClick =  document.querySelector(hash + "20_submit_button")
        buttonClick.click();
    }else {
        var usernameTarget = document.querySelector(data[2]);
        var passwordTarget = document.querySelector(data[3]);
        if(usernameTarget == null){
            console.log("Sorry! Not applicable at this web page!!!");
            return;
        }
        if(passwordTarget == null){
            console.log("Sorry! Not applicable at this web page!!!");
            return;
        }
        usernameTarget.value = data[0]
        passwordTarget.value = data[1]

        var buttonClick = document.querySelector(data[4]);
        buttonClick.click();
    }
}

function retrieveData (stringData){
    var ans = stringData.split(",");
    return ans;
}










// chrome.runtime.onMessage.addListener(recivedMessage)

// function recivedMessage(message, sender, sendResponse) {
//     // console.log(message.url);
//     if(message.url.match("https://www.quora.com/*")){
//         // Now trying for Quora
//         // PowerFul quora -> store first 13 digits in a variable and add it into id

//         // __w2_wlf9C7X2 20_password
//         // __w2_wRpdvGYz 20_submit_button

//         var tag = document.querySelector("input")
//         console.log(tag.id);

//         var hash = tag.id.slice(0, 13);
//         console.log(hash);

//         var usernameTarget = document.getElementById(hash + "20_email");
//         if(usernameTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         console.log(usernameTarget);
//         usernameTarget.value = ""

//         var passwordTarget = document.getElementById(hash + "20_password");
//         if(passwordTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         console.log(passwordTarget)
//         passwordTarget.value = ""

//         var buttonClick =  document.getElementById(hash + "20_submit_button")
//         buttonClick.click();
//     }else if(message.url.match("https://www.codechef.com/*")) {
//         // Sometimes work for codechef and sometimes not, Can't able to understand the reason (maybe codechef side issue)

//         var passwordTarget = document.getElementById("edit-pass");
//         // console.log(passwordTarget.value)
//         // passwordTarget.value = "";


//         if(passwordTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         var usernameTarget = document.getElementById("edit-name");
//         // usernameTarget.value = "";
//         if(usernameTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         console.log(usernameTarget)
//         console.log(passwordTarget)

//         console.log(passwordTarget.value);
//         console.log(usernameTarget.value);


//         usernameTarget.value = ""
//         passwordTarget.value = ""

//         var buttonClick = document.getElementById("edit-submit");
//         buttonClick.click();
//     }else if(message.url.match("https://codeforces.com/enter*")){
//         // Trying same for codeforces 
//         var usernameTarget = document.getElementById("handleOrEmail");
//         var passwordTarget = document.getElementById("password");
//         if(usernameTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         if(passwordTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         // console.log(usernameTarget);
//         // console.log(passwordTarget);

//         usernameTarget.value = ""
//         passwordTarget.value = ""

//         var buttonClick = document.querySelector(".submit");
//         buttonClick.click();

//         // This works perfectly for me...
//     }else if(message.url.match("https://www.linkedin.com/login*")){
//         var usernameTarget = document.getElementById("username");
//         var passwordTarget = document.getElementById("password");
//         if(usernameTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         if(passwordTarget == null){
//             console.log("Sorry! Not applicable at this web page!!!");
//             return;
//         }
//         // console.log(usernameTarget);
//         // console.log(passwordTarget);

//         usernameTarget.value = ""
//         passwordTarget.value = ""

//         var buttonClick = document.querySelector(".login__form_action_container  .btn__primary--large");
//         buttonClick.click();
//     }else {
//         console.log("Sorry! Not applicable at this web page!!!");
//     }
// }