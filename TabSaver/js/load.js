


//TODO: load from localstorage on document
//and save.

var container = document.getElementById("container");

window.onload = load;

function load(e) {
	
	
	for(var i = 0; i < container.childElementCount; i++) {
		
		while(container.firstChild) {
			
			container.removeChild(container.firstChild);
			
		}
		
	}
	
	for(var i = 0; i < localStorage.length; i++) {
		
		//console.log(localStorage.getItem(localStorage.key(i)));
		var val = localStorage.getItem(localStorage.key(i));
		
		var par = document.createElement("li");
		par.setAttribute("class", "unselected");
		
		var p = document.createElement("p");
		var node = document.createTextNode(val);
		
		p.appendChild(node);
		par.appendChild(p);
		
		container.appendChild(par);
		
	}
	
	
	
}