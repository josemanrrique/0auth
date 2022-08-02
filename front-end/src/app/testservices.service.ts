import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestservicesService {
  private _url = "https://localhost:44322";
  constructor(
    private _http: HttpClient
  ) { }
  test(): Observable<any> {
    debugger
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${'ZYesUWYohU0hVjhH0jbphNCbaSkzYwVCeG1ehS3tkA8YsrsNUpjuZ_hA7tZgF8kA'}`
    })
    this._http.get("apiUrl", { headers: headers })
    return this._http.get(`${this._url}/api/values`, { headers }).pipe(map((data: any): any => {
      return data;
    }), catchError(err => {
      debugger
      console.log(err)
      return of()
    }));
  }
}
