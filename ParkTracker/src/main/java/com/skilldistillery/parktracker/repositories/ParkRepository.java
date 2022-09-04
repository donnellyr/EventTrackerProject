package com.skilldistillery.parktracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.parktracker.entities.Park;

public interface ParkRepository extends JpaRepository<Park, Integer>{
Park findById(int id);
}
