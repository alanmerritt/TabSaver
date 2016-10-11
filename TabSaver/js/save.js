

var btn_save = document.getElementById("save");
var container = document.getElementById("container");


btn_save.addEventListener("click", function(e) {
	
	for(var i = 0; i < container.childElementCount; i++) {
		
		var key = i.toString();
		var value = container.childNodes[i].childNodes[0].innerHTML;
		
		localStorage.setItem(key, value);
		
		//document.getElementById("debug").innerHTML = "key: " + key + " - value: " + container.childNodes[i].childNodes[0].innerHTML;
		
	}
	
});