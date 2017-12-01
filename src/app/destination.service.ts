import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Destination } from './destination';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DestinationService {
  constructor(private http: HttpClient) {

  }
  private destinationsUrl = 'api/destinations';  

  // GET ALL
  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.destinationsUrl).pipe(
      catchError(this.handleError('getDestinations', []))
    );
  }

  // GET ONE
  getDestination(id: number): Observable<Destination> {
    const url = `${this.destinationsUrl}/${id}`;
    return this.http.get<Destination>(url).pipe(
      catchError(this.handleError<Destination>(`getDestination id=${id}`))
    );
  }

  // POST
  addDestination(destination: Destination): Observable<Destination> {
    return this.http.post<Destination>(this.destinationsUrl, destination, httpOptions).pipe(
      catchError(this.handleError<Destination>('addDestination'))
    );
  }

  // DELETE
  deleteDestination(destination: Destination | number): Observable<Destination> {
    const id = typeof destination === 'number' ? destination : destination.id;
    const url = `${this.destinationsUrl}/${id}`;

    return this.http.delete<Destination>(url, httpOptions).pipe(
      catchError(this.handleError<Destination>('deleteDestination'))
    );
  }

  // ERROR HANDLING 
  // Logs error and lets app continue to run
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
