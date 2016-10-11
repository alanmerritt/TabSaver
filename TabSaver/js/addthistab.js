

document.getElementById("addthistab").onclick = function() {
	
	console.log("Button pressed.");
	
	chrome.tabs.query({'active':true, 'lastFocusedWindow':true, 'currentWindow':true}, function(tabs) {
		
		var tabURL = tabs[0].url;
		
		//parent list element
		var par = document.createElement("li");
		par.setAttribute("class", "unselected");
		
		//p to hold text
		var p = document.createElement("p");
		//textnode
		var node = document.createTextNode(tabURL);
		
		//var div = document.createElement("div");
		
		//append the text to the p
		p.appendChild(node);
		par.appendChild(p);
		//pare.appendChild(div);
		
		var list = document.getElementById("container");
		list.appendChild(par);
		
	});
	
}
