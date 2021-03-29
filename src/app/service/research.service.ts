import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Research} from "../model/research.model";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  research: Observable<Research>;

  headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem('token_name')
  })

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getResearch(id: number): Observable<Research> {
    const url = `${environment.geo}/indicadores/pesquisas/${id}`;
    return this.http.get<Research>(url, { headers: this.headers }).pipe(
      tap(_ => this.log(`fetched research id=${id}`)),
      catchError(this.handleError<Research>(`getResearch id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Service: ${message}`);
  }

}
