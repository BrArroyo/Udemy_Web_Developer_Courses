import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse } from './course';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url: string = "assets/data/courses.json"
  constructor(private http: HttpClient) { }
  getCourses() : Observable<ICourse[]>{
    return this.http
               .get<ICourse[]>(this.url)
               //.pipe(catchError(this.errorHandler))  
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message)
  }
}
function observableThrowError(message: string) {
  throw new Error('Function not implemented.');
}

