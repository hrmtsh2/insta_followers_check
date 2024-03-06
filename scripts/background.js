// background.js

console.log("background.js");

let followers = [];
let followings = [];

let s1 = "";
let s2 = "";

function subtractArrays(arr1, arr2) {   
    return arr1.filter(item => !arr2.includes(item));
}

function compare(){
	if(followers == [] || followings == []){
		console.log("One of followers[] or following[] is empty.");
	}
	const followersSorted = followers.slice().sort();
	const followingsSorted = followings.slice().sort();
	s1 = JSON.stringify(subtractArrays(followings, followers));
	s2 = JSON.stringify(subtractArrays(followers, followings));
	console.log("Accounts that you follow and don't follow you back: ", s1);
	console.log("Accounts that follow you and you don't follow them back: ", s2);
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if(message.followers){
		followers = message.followers;
		console.log("Followers: " + followers + ", count: " + followers.length);
		console.log("Followings: " + followings + ", count: " + followings.length);
		if(followings.length){
			compare();
		}		
	}
	if(message.followings){
		followings = message.followings;
		console.log("Followings: " + followings + ", count: " + followings.length);
		console.log("Followers: " + followers + ", count: " + followers.length);
		if(followers.length){
			compare();
		}		
	}
	if(message.getDifference1){
		compare();
		sendResponse({usernames: s1});
	}
	if(message.getDifference2){
		compare();
		sendResponse({usernames: s2});
	}
});
