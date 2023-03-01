import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QouteService {

  constructor(private http: HttpClient) { }

  generate() {
    return this.http.get<any>(`https://type.fit/api/quotes`).pipe(map((res) => {
      return res;
    }))
  }

}
