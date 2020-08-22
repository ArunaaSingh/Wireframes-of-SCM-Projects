import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  selectable = 'All Sales Reps';

  selectedList: string[] = ['All Sales Reps'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
