//your JS code here. If required.
function dat(){
	const currentDate = new Date();
	let year = currentDate.getFullYear();
	let month = currentDate.getMonth()+1;
	let day = currentDate.getDate();
	let minutes = currentDate.getMinutes();
	let hours = currentDate.getHours();
	let seconds = currentDate.getSeconds();
	let tim = document.getElementById("timer");
	tim.textContent = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}

dat();

setInterval(dat, 1000);


