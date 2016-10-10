var deletable = false;

var container = document.getElementById("container");

var btn_delete = document.getElementById("removelink");

container.addEventListener("click", function(e) {
	
	
	var par = e.target.parentElement;
	
	if(e.target && par.nodeName == "LI" && deletable == true) {
		
		while(par.firstChild) {
			
			par.removeChild(par.firstChild);
			
		}
		
		container.removeChild(par);
		
	}
	
});

btn_delete.addEventListener("click", function(e) {
	
	
	deletable = !deletable;
	if(deletable) {
		
		btn_delete.value = "Done";
		
		for(var i = 0; i < container.childElementCount; i++) {
			
			container.children[i].setAttribute("class", "selected");
			
		}
		
	} else {
		
		btn_delete.value = "Remove tab link";
		
		for(var i = 0; i < container.childElementCount; i++) {
			
			container.children[i].setAttribute("class", "unselected");
			
		}
		
	}
	
	
});
