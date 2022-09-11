window.addEventListener('load', function() {
	console.log('edit.js loaded');
	init();
});
function init() {
	let parkId;
	if (location.search.length <= 2) {
		parkId = location.search.substring(1);
	} else {
		parkId = location.search.substring(4, 5);
	}
	parseInt(parkId)
	console.log("init park id: " + parkId)
	getpark(parkId);

	let editPark = document.getElementById('editPark');
	editPark.addEventListener('click', function(event) {
		event.preventDefault();
		console.log("button works");
		
		let park = {
			id: editParkForm.Id.value,
			name: editParkForm.name.value,
			description: editParkForm.description.value,
			state: editParkForm.state.value,
			street: editParkForm.street.value,
			zipCode: editParkForm.zipCode.value,
			city: editParkForm.city.value
		};
		
		console.log(park);
			editPark(park);
		
		function editPark(park) {
			let parkId;
			if (location.search.length <= 2) {
				parkId = location.search.substring(1);
			} else {
				parkId = location.search.substring(4, 5);
			}
			parseInt(parkId)
			console.log(park);
			let xhr = new XMLHttpRequest();
			xhr.open('PUT', 'api/parks/' + parkId);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 201 || xhr.status === 200) {
						console.log("park added");
						loadAllEvents(JSON.parse(xhr.responseText));
					}
					else if (xhr.status === 400) {

						displayError("invalid Data");
					}
					else {
						displayError("error creating film" + xhr.status);
					}
				}
			};
			console.log(park)
			xhr.setRequestHeader("Content-type", "application/json");
			let parkJson = JSON.stringify(park);
			xhr.send(parkJson);
		window.location.replace("index.html");
		}
	});
}
function getpark(parkId) {
	console.log("get park loaded")
	parseInt(parkId)
	console.log(parkId)
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/parks/' + parkId);
	xhr.onreadystatechange = function() {
		console.log("in function")
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("park found");

				console.log(xhr.responseText);
				let park = JSON.parse(xhr.responseText);
				console.log(park);
				displaypark(park);

			}
		}
		else {
			console.log("not found");
		}
	};
	xhr.send();

}

function displaypark(park) {
	console.log("display park loaded");
	let form = document.getElementById('editParkForm');
	console.log(park.id)
	form.Id.value = park.id;
	form.name.value = park.name;
	form.description.value = park.description;
	form.state.value = park.state;
	form.street.value = park.street;
	form.city.value = park.city;
	form.zipCode.value = park.zipCode;

}

function editPark(park) {
	let parkId;
	if (location.search.length <= 2) {
		parkId = location.search.substring(1);
	} else {
		parkId = location.search.substring(4, 5);
	}
	parseInt(parkId)
	console.log(park);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/parks/' + parkId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				console.log("park added");
				loadAllEvents(JSON.parse(xhr.responseText));
			}
			else if (xhr.status === 400) {

				displayError("invalid Data");
			}
			else {
				displayError("error creating film" + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let parkJson = JSON.stringify(park);
	xhr.send(parkJson);
}