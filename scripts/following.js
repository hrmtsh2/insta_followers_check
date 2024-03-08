// following.js

console.log("following.js");

let usernames = [];

function getUsername(span){
	usernames.push(span.innerText);
}

let usernamesSpansHTMLColl;

setTimeout(() => {
	usernamesSpansHTMLColl = document.getElementsByClassName("_ap3a _aaco _aacw _aacx _aad7 _aade");
	console.log(usernamesSpansHTMLColl);
	console.log(usernamesSpansHTMLColl.length);
	usernamesSpansList = Array.prototype.slice.call(usernamesSpansHTMLColl);
	usernamesSpansList.forEach(getUsername);
	console.log(usernames);
	browser.runtime.sendMessage({followings: usernames}, (response) => {
		console.log("background.js says to following.js - ", response);
	});
}, 60000);
