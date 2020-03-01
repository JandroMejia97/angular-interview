import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Resource } from '../models/resource.model';

import { environment } from 'src/environments/environment';

export class ResourceService<T extends Resource> {
  protected url: string;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    endPoint: string,
    protected http: HttpClient,
    protected messageService: MessageService,
  ) {
    this.url = `${environment.apiUrl}/${endPoint}`;
  }

  getList(...criteria: any[]): Observable<T[]> {
    let filterParameters = '';
    if (criteria) {
      filterParameters = '?';
      criteria.forEach(criterion => {
        for (const key in criterion) {
          if (criterion.hasOwnProperty(key)) {
            filterParameters += `${key}=${criterion[key]}&`;
          }
        }
      });
    }
    return this.http.get<T[]>(`${this.url}/${filterParameters}`, this.httpOptions)
    .pipe(
      tap(_ => console.log('Data obtained successfully.')),
      catchError(this.handleError<any>())
    );
  }

  getObject(object: number | T): Observable<T> {
    const id = typeof object === 'number' ? object : object.id;
    return this.http.get<T>(`${this.url}/${id}`, this.httpOptions)
    .pipe(
      tap((datum: T) => console.log(`Datum obtained successfully: ${datum}.`)),
      catchError(this.handleError<T>())
    );
  }

  putObject(object: T): Observable<any> {
    return this.http.put(`${this.url}/${object.id}`, object, this.httpOptions).pipe(
      tap((datum: T) => this.log(`The changes in ${datum} were saved successfully.`)),
      catchError(this.handleError<T>())
    );
  }

  postObject(object: T): Observable<any> {
    return this.http.post(this.url, object, this.httpOptions)
    .pipe(
      tap((datum: T) => this.log(`${datum} was saved correctly.`)),
      catchError(this.handleError<T>())
    );
  }

  deleteObject(object: number | T): Observable<T> {
    const id = typeof object === 'number' ? object : object.id;
    return this.http.delete<T>(`${this.url}/${id}`, this.httpOptions)
    .pipe(
      tap((datum: T) => this.log(`${datum} was deleted correctly.`)),
      catchError(this.handleError<T>())
    );
  }

  log(message: string) {
    this.messageService.openSnackBar(message);
  }

  handleError<E>(result?: E) {
    return (error: any): Observable<E> => {
      console.log(error);
      if (error.status === 404) {
        this.log(error.message);
      } else {
        for (const key in error.error) {
          if ( error.error.hasOwnProperty(key)) {
            this.log(`${key}: ${error.error[key]}`);
          }
        }
      }
      return of(result as E);
    };
  }

}
