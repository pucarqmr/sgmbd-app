import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Escola} from "../model/escola.model";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Iptu} from "../model/iptu.model";
import {Aluno} from "../model/aluno.model";

@Injectable({
  providedIn: 'root'
})
export class IptuService {

  iptu: Observable<Iptu>

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getIptus(): Observable<Iptu[]> {
    return this.http.get<Iptu[]>( `${environment.jsonServerURL}/iptus`)
      .pipe(
        tap(_ => this.log('fetched Iptus')),
        catchError(this.handleError<Iptu[]>('getIptus', []))
      );
  }

  getIptu(inscricaoImobiliaria: string): Observable<Iptu> {
    const url = `${environment.jsonServerURL}/iptus/${inscricaoImobiliaria}`;
    return this.http.get<Iptu>(url).pipe(
      tap(_ => this.log(`fetched Iptu id=${inscricaoImobiliaria}`)),
      catchError(this.handleError<Iptu>(`getIptu id=${inscricaoImobiliaria}`))
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
