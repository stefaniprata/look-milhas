import { Component, Input, OnInit } from '@angular/core';
import { RewardPrograms } from './reward-programs';
import { RewardProgramsService } from './reward-programs.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  // rewardPrograms = {
  //   id: 0,
  //   name: 'Azul Fidelidade',
  //   points: 50.000,
  //   cost: 15.50
  // }

  @Input() rewardPrograms: RewardPrograms = {
    id: 0,
    name: 'Azul Fidelidade',
    type: 'Air',
    points: 50000,
    cost: 30
  }

  listRewardPrograms: RewardPrograms[] = [];

  constructor(private service : RewardProgramsService) { }

  ngOnInit(): void {
    this.service.getRewardPrograms().subscribe((listRewardPrograms) => {
        this.listRewardPrograms = listRewardPrograms
    })
  }

  averageCostAir(): string {
    if(this.rewardPrograms.cost < 17.50) {
      return 'text-bg-success'
    } 
    else if (this.rewardPrograms.cost >= 18) {
      return 'text-bg-danger'
    }
    else if (this.rewardPrograms.cost == 17.50) {
      return 'text-bg-warning'
    }
    else if (this.rewardPrograms.cost == 0) {
      return 'text-bg-light'
    }
    return ''
  }

  averageCostBank(): string {
    if(this.rewardPrograms.cost <= 32) {
      return 'text-bg-success'
    } 
    else if (this.rewardPrograms.cost >= 36) {
      return 'text-bg-danger'
    }
    else if (this.rewardPrograms.cost == 35) {
      return 'text-bg-warning'
    }
    else if (this.rewardPrograms.cost == 0) {
      return 'text-bg-light'
    }
    return ''
  }

  checkCostByTypeRewardProgram(): string {  
    if(this.rewardPrograms.type == 'Air') {
      return this.averageCostAir();
    } 
    else if (this.rewardPrograms.type == 'Bank') {
      return this.averageCostBank();
    }
    // else if (this.rewardPrograms.type == 'International') {
    //   return this.averageCostInternational();
    // }
    return ''
  }
}
