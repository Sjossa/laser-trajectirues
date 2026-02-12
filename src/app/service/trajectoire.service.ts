import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrajectoireData } from '../model/trajectoire.model';

@Injectable({
  providedIn: 'root',
})
export class TrajectoireService {
  private dataUrl = '/assets/trajectoire.json';

  constructor(private http: HttpClient) {}

  getTrajectoire(): Observable<TrajectoireData> {
    return this.http.get<TrajectoireData>(this.dataUrl);
  }
}
