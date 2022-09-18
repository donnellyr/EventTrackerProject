export class Park {
//   private int id;
id: number;
description: string;
name: string;
state: string;
street: string;
city: string;
zipCode: number;
rating: number;
timesRated: number;

// private String description;

// private String name;

// private String state;

// private String street;

// private String city;
constructor(id: number = 0, description: string = '', name: string = '', state: string = '', street: string = '', city: string = '', zipCode: number = 0, rating: number = 0,timesRated: number = 0){
this.id = id;
this.description = description;
this.name = name;
this.state = state;
this.street = street;
this.city = city;
this.zipCode = zipCode;
this.rating = rating;
this.timesRated = timesRated;
}
}
