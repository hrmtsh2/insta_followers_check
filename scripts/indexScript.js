// indexScript.js - the background logic script for the index.html extension popup

console.log("indexScript.js");

const b1 = document.getElementById("followingFollowers");
const b2 = document.getElementById("followersFollowing");

const accsList1 = document.getElementById("followingFollowersList");
const accsList2 = document.getElementById("followersFollowingList");

function addAccToList(listNo, username) {
	let listElement = document.createElement('li');
    let accElement = document.createElement('span');
    accElement.textContent = username;
    listElement.appendChild(accElement);
	if(listNo == '1'){
	    accsList1.appendChild(listElement);
	} else if(listNo == '2'){
		accsList2.appendChild(listElement);
	} else {
		console.log("Invalid list to updated in indexScript.js:addAccToList()");
	}
}

b1.addEventListener("click", () => {
	chrome.runtime.sendMessage({getDifference1: true}, (response) => {
		usernames = JSON.parse(response.usernames);
		for(const username of usernames){
			addAccToList('1', username);
			console.log(username);
		}		
		console.log(response.usernames);
	});
});

b2.addEventListener("click", () => {
	chrome.runtime.sendMessage({getDifference2: true}, (response) => {
		usernames = JSON.parse(response.usernames);
		for(const username of usernames){
			addAccToList('2', username);
			console.log(username);
		}		
		console.log(response.usernames);
	});
});
