window.addEventListener('load', function() {
	console.log('script.js loaded')
	init();
})
function init() {
	loadAllEvents();
	document.addParkForm.addPark.addEventListener('click', function(event) {
		console.log('adding film')
		let park = {
			name: addParkForm.name.value,
			description: addParkForm.description.value,
			state: addParkForm.state.value,
			street: addParkForm.street.value,
			zipCode: addParkForm.zipCode.value,
			city: addParkForm.city.value
		};
		console.log(park)
		addPark(park)
	});
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
	let dataDiv = document.getElementById('eventList')
	dataDiv.textContent = '';
	let ul = document.createElement("ul")
	dataDiv.appendChild(ul)
	for (let park of parks) {
		let li = document.createElement('li')
		let link = document.createElement('a')
		link.href = "view.html?" + park.id;
		link.innerText = park.name;
		link.textContent = park.name;
		li.appendChild(link);
		ul.appendChild(li)
		
	}

}
function addPark(park){
	console.log(park)
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/parks');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				console.log("park added")
					loadAllEvents(JSON.parse(xhr.responseText));
			}
			else if (xhr.status === 400) {
	
					displayError("invalid Data")
			}
			else {
				displayError("error creating film" +xhr.status)
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json"); 
		let parkJson = JSON.stringify(park);
		xhr.send(parkJson);
		window.location.replace("index.html")

}