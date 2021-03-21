import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Escola} from "../model/escola.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {catchError, tap} from "rxjs/operators";
import {Aluno} from "../model/aluno.model";

@Injectable({
  providedIn: 'root'
})
export class EnsinoService {

  escola: Observable<Escola>

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEscolas(): Observable<Escola[]> {
    return this.http.get<Escola[]>( `${environment.jsonServerURL}/escolas`)
      .pipe(
        tap(_ => this.log('fetched escolas')),
        catchError(this.handleError<Escola[]>('getEscolas', []))
      );
  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>( `${environment.jsonServerURL}/alunos`)
      .pipe(
        tap(_ => this.log('fetched escolas')),
        catchError(this.handleError<Aluno[]>('getEscolas', []))
      );
  }

  getEscolasMunicipais(): Observable<Escola[]> {
    return this.http.get<Escola[]>( `${environment.jsonServerURL}/escolas-municipais`)
      .pipe(
        tap(_ => this.log('fetched escolas')),
        catchError(this.handleError<Escola[]>('getEscolas', []))
      );
  }

  getEscolasPorTipo(tipo: number): Observable<Escola[]> {
    const url = `${environment.jsonServerURL}/escolas`;
    return this.http.get<Escola[]>(url).pipe(
      tap(_ => this.log(`fetched hero id=${tipo}`)),
      catchError(this.handleError<Escola[]>(`getEscolasPorTipo id=${tipo}`))
    );
  }

  addAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${environment.jsonServerURL}/alunos/`, aluno).pipe(
      tap((newAluno: Aluno) => this.log(`added aluno w/ id=${newAluno.id}`)),
      catchError(this.handleError<Aluno>('addAluno'))
    );
  }

  getAluno(cpf: string): Observable<Aluno> {
    const url = `${environment.jsonServerURL}/alunos/${cpf}`;
    return this.http.get<Aluno>(url).pipe(
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
