

var container = document.getElementById("container");
//var list = container.children;
//var numOfChildren = list.length;

container.addEventListener("click", function(e) {
	
	
	var par = e.target.parentElement;
	
	if(e.target && par.nodeName == "LI") {
		
		
		while(par.firstChild) {
			
			par.removeChild(par.firstChild);
			
		}
		
		container.removeChild(par);
		//console.log("e.target removed.");
		
	}
	
});


/*var container = document.getElementById("container");
container.addEventListener("click", deleteElement, false);

function deleteElement(e) {
	
	if(e.target !== e.currentTarget) {
		
		container.removeChild(e.target);
		
	}
	
	e.stopPropagation();
	
}*/