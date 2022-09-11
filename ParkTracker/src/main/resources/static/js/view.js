window.addEventListener('load', function() {
	console.log('view.js loaded')
	init();
});
function init() {
	let parkId;
			if (location.search.length <= 2) {
				parkId = location.search.substring(1);
			} 
			else if(location.search.length >= 8){
				parkId = location.search.substring(8)
			}
			
			
	console.log("park Id init: " + parkId)
	getpark(parkId)
	
	
	let deletePark = document.getElementById("deletePark")
	deletePark.addEventListener('click', function() {
		let parkId;
			if (location.search.length <= 2) {
				parkId = location.search.substring(1);
			} else {
				parkId = location.search.substring(8);
			}
		console.log("delete park loaded")

		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/parks/' + parkId);
		xhr.onreadystatechange = function() {
			console.log("in function")
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					console.log("park found")

					console.log(xhr.responseText)
					window.location.replace("index.html")
				}
			}
			else {
				console.log("not found");
				displayError('park :' + parkId + " not found")
			}
		}
		xhr.send();

	})
	
	
	let editPark = document.getElementById('editPark')
	editPark.addEventListener('click', function() {
		let parkId;
			if (location.search.length <= 2) {
				parkId = location.search.substring(1);
			} else {
				parkId = location.search.substring(8);
			}
		console.log("button works")
		window.location.replace("edit.html?" + parkId)
	})


	let ratePark = document.getElementById('ratePark');
	ratePark.addEventListener('click', function(event) {
		event.preventDefault();
		let parkId;
			if (location.search.length <= 2) {
				parkId = location.search.substring(1);
			} else {
				parkId = location.search.substring(8);
			}
			console.log(parkId)
		console.log(rateParkForm.rating.value)
		let park = {
			rating: rateParkForm.rating.value
		}
		console.log("rating selected: "+ park.rating);
		updateRating(park);
		function updateRating(park) {
		let xhr = new XMLHttpRequest();
		console.log("in xhr: " + parkId)
			xhr.open('PUT', 'api/parks/ratings/' + parkId);
		console.log("after html request: " + parkId)
			xhr.onreadystatechange = function() {
				console.log("in function")
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log("park found")
						console.log(xhr.responseText)
					
			window.location.replace("index.html")
					}
				}
				else {
					console.log("not found");
					displayError('park :' + parkId + " not found")
				}
			}
			xhr.setRequestHeader("Content-type", "application/json");
			let parkJson = JSON.stringify(park);
			xhr.send(parkJson);
							window.location.replace("view.html?" + parkId)
			
		}
	});
}
function getpark(parkId) {
	console.log("get park loaded")
	
			if (location.search.length <= 2) {
				parkId = location.search.substring(1);
			} else {
				parkId = location.search.substring(8);
			}

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/parks/' + parkId);
	xhr.onreadystatechange = function() {
		console.log("in function")
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("park found")

				console.log(xhr.responseText)
				const park = JSON.parse(xhr.responseText)
				console.log(park)
				displaypark(park);
			}
		}
		else {
			console.log("not found");
			displayError('park :' + parkId + " not found")
		}
	}
	xhr.send();

}
function displaypark(park) {
	
	console.log("display park loaded")
	let dataDiv = document.getElementById('parkData');
	dataDiv.textContent = '';
	// TODO:
	// * Create and append elements to the data div to display:
	// * park title (h1) and description (blockquote).
	let name = document.createElement('h1');
	name.textContent = park.name;
	dataDiv.appendChild(name);

	let description = document.createElement('blockquote');
	description.textContent = park.description;
	dataDiv.appendChild(description);
	// * Rating, release year, and length as an unordered list.

	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);

	let state = document.createElement("li")
	state.textContent = ("State: " + park.state);
	ul.appendChild(state);

	let city = document.createElement("li")
	city.textContent = "City: " + park.city;
	ul.appendChild(city);

	let street = document.createElement("li")
	street.textContent = "Street: " + park.street;
	ul.appendChild(street);

	let zip = document.createElement("li")
	zip.textContent = "Zip-Code: " + park.zipCode;
	ul.appendChild(zip);

	let rating = document.createElement("li")
	let num = park.rating / park.timesRated;
	let average = num.toFixed(2)
	if(isNaN(average)){
		average = 0
	}
	
	rating.textContent = "Average rating: " + average;
	
	ul.appendChild(rating);



}

