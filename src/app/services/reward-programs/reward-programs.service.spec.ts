import { TestBed } from '@angular/core/testing';

import { RewardProgramsService } from './reward-programs.service';

describe('RewardProgramsService', () => {
  let service: RewardProgramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardProgramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
