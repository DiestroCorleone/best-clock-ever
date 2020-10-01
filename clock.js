window.onload = function(){
	clock();
}

function clock(){
	var today = new Date();
	var hora = document.getElementById("hora");	
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
	hora.innerHTML = time;
	setTimeout(clock, 1000);
}
