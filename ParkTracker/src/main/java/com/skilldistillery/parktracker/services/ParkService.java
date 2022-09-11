package com.skilldistillery.parktracker.services;

import java.util.List;

import com.skilldistillery.parktracker.entities.Park;

public interface ParkService {
	List<Park> index();
	Park addPark(Park park);
	Park findById(int id);
	boolean deletePark(int id);
	Park editPark(int id, Park park);
	Park updateRating(int id, Park park);



}
