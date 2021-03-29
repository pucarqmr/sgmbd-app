import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Escola} from '../model/escola.model';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {catchError, tap} from 'rxjs/operators';
import {Aluno} from '../model/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class EnsinoService {

  escola: Observable<Escola>;

  headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': window.localStorage.getItem('token_name')
  })

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEscolas(): Observable<Escola[]> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem('token_name')
    })
    return this.http.get<Escola[]>( `${environment.cidadao}/escolas`, { headers: headers })
      .pipe(
        tap(_ => this.log('fetched escolas')),
        catchError(this.handleError<Escola[]>('getEscolas', []))
      );
  }

  getAlunos(): Observable<Aluno[]> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem('token_name')
    })
    return this.http.get<Aluno[]>( `${environment.cidadao}/alunos`, { headers: headers })
      .pipe(
        tap(_ => this.log('fetched escolas')),
        catchError(this.handleError<Aluno[]>('getEscolas', []))
      );
  }

  getEscolasMunicipais(): Observable<Escola[]> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem('token_name')
    })
    return this.http.get<Escola[]>( `${environment.cidadao}/escolas-municipais`, { headers: headers })
      .pipe(
        tap(_ => this.log('fetched escolas')),
        catchError(this.handleError<Escola[]>('getEscolas', []))
      );
  }

  getEscolasPorTipo(tipo: number): Observable<Escola[]> {
    const url = `${environment.cidadao}/escolas`;
    return this.http.get<Escola[]>(url).pipe(
      tap(_ => this.log(`fetched hero id=${tipo}`)),
      catchError(this.handleError<Escola[]>(`getEscolasPorTipo id=${tipo}`))
    );
  }

  addAluno(aluno: Aluno): Observable<Aluno> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token_name')
    })
    return this.http.post<Aluno>(`${environment.cidadao}/alunos/`, aluno, { headers: headers }).pipe(
      tap((newAluno: Aluno) => this.log(`added aluno w/ id=${newAluno.id}`)),
      catchError(this.handleError<Aluno>('addAluno'))
    );
  }

  getAluno(cpf: string): Observable<Aluno> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem('token_name')
    })
    const url = `${environment.cidadao}/alunos/${cpf}`;
    return this.http.get<Aluno>(url, { headers: headers }).pipe(
      tap(_ => this.log(`fetched Aluno id=${cpf}`)),
      catchError(this.handleError<Aluno>(`getAluno id=${cpf}`))
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
