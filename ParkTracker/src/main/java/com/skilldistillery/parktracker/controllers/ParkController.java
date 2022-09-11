package com.skilldistillery.parktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.parktracker.entities.Park;
import com.skilldistillery.parktracker.services.ParkService;

@RestController
@RequestMapping("api")
public class ParkController {
	@Autowired
	ParkService parkServe; 

	@GetMapping("parks")
	public List<Park> listAll() {
		return parkServe.index();
	}
	@GetMapping("parks/{id}")
	public Park findById(@PathVariable int id) {
		return parkServe.findById(id);
	}

	@PostMapping("parks")
	public Park addPark(@RequestBody Park park) {
		return parkServe.addPark(park);
	}
	@PutMapping("parks/{id}")
	public Park editPark(@PathVariable int id, @RequestBody Park park) {
		return parkServe.editPark(id, park);
	}
	@PutMapping("parks/ratings/{id}")
	public Park editRating(@PathVariable int id, @RequestBody Park park) {
		return parkServe.updateRating(id, park);
	}
	@DeleteMapping("parks/{id}")
	public boolean deletePark(@PathVariable int id) {
		parkServe.deletePark(id);
		return true;
	}
}
