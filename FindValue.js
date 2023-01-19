// A heavily modified versions of johndoesstuff's searchChange.js script (https://github.com/johndoesstuff/randomProjects/blob/master/searchchange.js)

function changeScope() {
  var choice = prompt("Please select a scope:\n1. Iframe\n2. window\n3. Custom");
  if (choice == 1) {
    search = window.document.getElementsByTagName("iframe")[0].contentWindow;
  } else if (choice == 2) {
    search = window;
  } else if (choice == 3) {
    var customScope = prompt("Enter the custom scope:");
    search = eval(customScope);
  } else {
    console.log("Invalid choice");
  }
}
var search = window;
var validKeys = Object.keys(search);
var storedState = {};
for (var i = 0; i < validKeys.length; i++) {
	try {
		storedState[validKeys[i]] = JSON.stringify(search[validKeys[i]]);
	} catch(e) {
		validKeys.splice(i, 1);
	}
	if (typeof search[validKeys[i]] == "function") {
		validKeys.splice(i, 1);
	}
}
function searchChange() {
	for (var i = 0; i < validKeys.length; i++) {
		try {
			if (JSON.stringify(search[validKeys[i]]) === storedState[validKeys[i]]) {
				validKeys.splice(i, 1);
			}
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	for (var i = 0; i < validKeys.length; i++) {
		try {
			storedState[validKeys[i]] = JSON.stringify(search[validKeys[i]]);
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	if (validKeys.length < 50) console.log(validKeys);
	else console.log(JSON.stringify(validKeys));
}
function searchSame() {
	for (var i = 0; i < validKeys.length; i++) {
		try {
			if (JSON.stringify(search[validKeys[i]]) !== storedState[validKeys[i]]) {
				validKeys.splice(i, 1);
			}
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	for (var i = 0; i < validKeys.length; i++) {
		try {
			storedState[validKeys[i]] = JSON.stringify(search[validKeys[i]]);
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	if (validKeys.length < 50) console.log(validKeys);
	else console.log(JSON.stringify(validKeys));
}
