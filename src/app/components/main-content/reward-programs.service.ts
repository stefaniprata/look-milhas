import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RewardPrograms } from './reward-programs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardProgramsService {

  private readonly apiUrl = 'http://localhost:3000/rewardPrograms';
  constructor(private http: HttpClient) { }

  getRewardPrograms(): Observable<RewardPrograms[]> {
    return this.http.get<RewardPrograms[]>(this.apiUrl);
  }
}
