import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RewardPrograms } from 'src/app/components/reward-programs/reward-programs';

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
