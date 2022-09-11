package com.skilldistillery.parktracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.parktracker.entities.Park;
import com.skilldistillery.parktracker.repositories.ParkRepository;
@Service
public class ParkServiceImpl implements ParkService {

	@Autowired
	private ParkRepository repo;
	@Override
	public List<Park> index() {
		return repo.findAll();
	}
	@Override
	public Park addPark(Park park) {
		Park newPark = repo.saveAndFlush(park);
		return newPark;
	}
	@Override
	public boolean deletePark(int id) {
		Park deleted = repo.findById(id);
		repo.delete(deleted);
		return true;
	}
	@Override
	public Park editPark(int id, Park park) {
		Park edited = repo.findById(id);
		edited.setName(park.getName());
		edited.setDescription(park.getDescription());
		edited.setState(park.getState());
		edited.setCity(park.getCity());
		edited.setStreet(park.getStreet());
		edited.setZipCode(park.getZipCode());
		repo.saveAndFlush(edited);
		return edited;
	}
	@Override
	public Park findById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id);
	}
	@Override
	public Park updateRating(int id, Park park) {
		Park edited = repo.findById(id);
		if(edited.getRating() == null) {
			edited.setRating(0.0);
			edited.setTimesRated(0);
		}
		Double newRating = edited.getRating() + park.getRating();
		Integer times = edited.getTimesRated()+ 1;
		edited.setRating(newRating);
		edited.setTimesRated(times);
		repo.saveAndFlush(edited);
		return edited;
	}

}
