import { ParksService } from './../../services/parks.service';
import { Component, OnInit } from '@angular/core';
import { Park } from 'src/app/models/park';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parks: Park[] = [];
  sorted: Park[] =[];
  selected: Park | null = null;
  edit: boolean = false;
  editPark: Park | null = null;
  ratedPark: Park | null = null;
  newPark = new Park();
  rating: number = 0;
  add: boolean = false;
  sort:boolean =false;
  aboutUs:boolean=false;
  constructor(private parkService: ParksService) { }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll() {
    this.parkService.index().subscribe(
      {
        next: (park) => {
          this.parks = park
        },
        error: (problem) => {
          console.error("error when loading parks")
          console.error(problem);
        }


      }
      );
    }
    sortParks(){
    this.sorted = this.parks.sort((a,b)=>(b.rating / b.timesRated) -(a.rating / a.timesRated));
    this.sort = true;

  }
  view(id: number) {
    this.parkService.show(id).subscribe(
      {
        next: (park) => {
          this.selected = park
          this.setEditPark()
        },
        error: (problem) => {
          console.error("error when loading parks")
          console.error(problem);
        }


      }
    );
  }
  getRating(park: Park) {
    return park.rating / park.timesRated;
  }
  displayTable() {
    this.selected = null;
    this.editPark = null;
    this.edit = false;
    this.add = false;
    this.sort = false;
    this.aboutUs = false;
    this.loadAll();
  }
  setEditPark() {
    this.editPark = Object.assign({}, this.selected)
  }
  editButton(){
  this.edit= true;
  }
  updatePark(updatedPark: Park) {
    let id = updatedPark.id;
    console.log(updatedPark);
    this.parkService.updatePark(updatedPark, id).subscribe({
      next: (result) => {
        this.editPark = result;
        this.loadAll();
        this.selected = result;
        this.edit = false;
      },
      error: (nojoy) => {
        console.error('Error updating park');
        console.error(nojoy);
      },
    });
  }
  addPark() {
    this.parkService.createPark(this.newPark).subscribe({
      next: (result) => {
        this.newPark = new Park();
        this.loadAll();
        this.displayTable();
      },
      error: (nojoy) => {
        console.error('Error creating Park');
        console.error(nojoy);
      },
    });
  }
  deletePark(id: number) {
    this.parkService.deletePark( id).subscribe({
      next: (result) => {
        this.loadAll();
      },
      error: (nojoy) => {
        console.error('Error Deleteing park');
        console.error(nojoy);
      },
    });
  }
  editRating(ratedPark: Park) {
    let id = ratedPark.id;
    console.log(ratedPark);
    this.parkService.updatePark(ratedPark, id).subscribe({
      next: (result) => {
        this.editPark = result;
        this.loadAll();
        this.editPark = null;
        this.edit =false;
      },
      error: (nojoy) => {
        console.error('Error updating park');
        console.error(nojoy);
      },
    });
  }
  ratePark(park: Park, rating: number){
  park.rating = park.rating * 1;
  rating = rating *1
    if(typeof(rating) == 'string'){
      parseInt(rating);
    }
    if(typeof(park.rating) == 'string'){
      parseInt(park.rating);
    }
    this.rating = rating *1

    park.rating =park.rating + this.rating;
    if(typeof(park.rating) == 'string'){
      parseInt(park.rating);
    }
    console.log(typeof(rating));
    console.log(typeof(park.rating));

    park.timesRated = park.timesRated + 1;
    this.updatePark(park);
  }
  viewAdd(){
    this.add = true;
  }
}
