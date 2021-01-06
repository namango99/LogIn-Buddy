**[username, password, username_tag, password_tag, submit_tag]**\


*linkedIn -> linkedIn.com\
codeforces -> codeforces.com\
codechef -> codechef.com\
quora -> quora.com*

Store data about me in local storage... Use this until you make pop up tab..

```js
localStorage.clear();
var mydata = {
    "codechef": ["username", "password", "username_tag", "password_tag", "submit_tag"],
    "codeforces" : ["username", "password", "username_tag", "password_tag", "submit_tag"],
    "linkedIn" : ["username", "password", "username_tag", "password_tag", "submit_tag"],
    "quora" : ["username", "password", "username_tag", "password_tag", "submit_tag"]
}
var trav = Object.keys(mydata);
for(var i = 0; i < trav.length; i++){
    localStorage.setItem(trav[i], mydata[trav[i]]);
}
trav = Object.keys(localStorage)
for(var i = 0; i < localStorage.length; i++){
    console.log(trav[i] + " " + localStorage[trav[i]]);
}
```