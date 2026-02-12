import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrajectoryData } from '../model/Trajectoire.model';

@Injectable({
  providedIn: 'root',
})
export class TrajectoireService {
  private dataUrl = 'assets/trajectorie.json';

  constructor(private http: HttpClient) {}

  getTrajectoire(): Observable<TrajectoryData> {
    return this.http.get<TrajectoryData>(this.dataUrl);
  }
}
