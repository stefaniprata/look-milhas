import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardProgramsComponent } from './reward-programs.component';

describe('RewardProgramsComponent', () => {
  let component: RewardProgramsComponent;
  let fixture: ComponentFixture<RewardProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
