import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Park } from '../models/park';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
  private url = this.baseUrl + 'api/parks'; // change 'todos' to your API path
  constructor(private http: HttpClient) { }

index(){
  return this.http.get<Park[]>(this.url).pipe(catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('ParkService.index(): error retrieving parks: ' + err)
    );
  })
);
}
show(id:number){
  return this.http.get<Park>(this.url+'/'+id).pipe(catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('ParkService.show(): error retrieving park: ' +id + err)
    );
  })
  );

}
createPark(park: Park){
  return this.http.post<Park>(this.url,park).pipe(catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('ParkService.createPark(): error creating park: '  + err)
      );
    })
    );

  }
  updatePark(park: Park, id:number){
    return this.http.put<Park>(this.url+'/'+id,park).pipe(catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('ParkService.updatePark(): error updating park: '  + err)
        );
      })
      );

    }
  updateRating(park: Park, id:number){
    return this.http.put<Park>(this.url+'/'+id,park).pipe(catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('ParkService.updateRating(): error updating park rating: '  + err)
        );
      })
      );

    }
    deletePark(id:number){
      return this.http.delete<Park>(this.url+'/'+id).pipe(catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('ParkService.deletePark(): error deleting park: ' +id + err)
        );
      })
      );

    }

  }
