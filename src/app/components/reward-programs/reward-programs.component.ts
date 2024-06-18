import { RewardProgramsService } from './../../services/reward-programs/reward-programs.service';
import { Component, Input, OnInit } from '@angular/core';
import { RewardPrograms } from './reward-programs';

@Component({
  selector: 'app-reward-programs',
  templateUrl: './reward-programs.component.html',
  styleUrls: ['./reward-programs.component.scss']
})
export class RewardProgramsComponent implements OnInit {

  listRewardPrograms: RewardPrograms[] = [];

  constructor(private service : RewardProgramsService) { }

  ngOnInit(): void {
    this.service.getRewardPrograms().subscribe((listRewardPrograms) => {
      this.listRewardPrograms = listRewardPrograms
    })
  }

  @Input() rewardPrograms: RewardPrograms = {
    id: 0,
    name: 'Azul Fidelidade',
    status: true,
    type: 'Air',
    points: 50000,
    cost: 30
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

  checkStatusRewardProgram(): string {
    if(this.rewardPrograms.status == true) {
      return ''
    } 
    else if (this.rewardPrograms.status == false) {
      return 'opacity-50'
    }
    return ''
  }
}
