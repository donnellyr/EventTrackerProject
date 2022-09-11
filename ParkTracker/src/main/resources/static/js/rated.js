window.addEventListener('load', function() {
	console.log('view.js loaded')
	init();
});
function init(){
loadAllEvents();
}

function loadAllEvents() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/parks');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayEvents(JSON.parse(xhr.responseText));
			}
		}
		else {
			console.error("Error loading events:" + xhr.status)
		}
	}
	xhr.send();
}

function displayEvents(parks) {
	console.log(parks);
	parks.sort((b,a) => (a.rating / a.timesRated) - (b.rating / b.timesRated));
		
	
	let ol = document.getElementById('ranking')
	
	
	
	for (let park of parks) {
		let li = document.createElement('li')
		let link = document.createElement('a')
		link.href = "view.html?" + park.id;
		link.innerText = park.name;
		link.textContent = park.name;
		li.appendChild(link);
		ol.appendChild(li)
		
	}

}