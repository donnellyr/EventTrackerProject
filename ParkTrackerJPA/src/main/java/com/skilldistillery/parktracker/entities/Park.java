package com.skilldistillery.parktracker.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Park {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;

private String description;

private String name;

private String state;

private String street;

private String city;

@Column(name = "zip_code")
private int zipCode;

private Double rating;
@Column(name= "times_rated")
private Integer timesRated;
public Park() {
	super();
}

public Park(int id, String name) {
	super();
	this.id = id;
	this.name = name;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}


public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public String getStreet() {
	return street;
}

public void setStreet(String street) {
	this.street = street;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public int getZipCode() {
	return zipCode;
}

public void setZipCode(int zipCode) {
	this.zipCode = zipCode;
}




public Double getRating() {
	return rating;
}

public void setRating(Double rating) {
	this.rating = rating;
}

public Integer getTimesRated() {
	return timesRated;
}

public void setTimesRated(Integer timesRated) {
	this.timesRated = timesRated;
}

@Override
public int hashCode() {
	return Objects.hash(id);
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Park other = (Park) obj;
	return id == other.id;
}

@Override
public String toString() {
	return "Park [id=" + id + ", description=" + description + ", name=" + name + ", state=" + state + ", street="
			+ street + ", city=" + city + ", zipCode=" + zipCode 
			+ "]";
}


}
