import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  sales: string;
  date: string;
  client: string;
  pcp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sales: "John Doe", date: 'July 20th, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "Ethan Hunt", date: 'July 20th, 2018', client: "Accenture", pcp: 'Ave Peasegood'},
  {sales: "John Doe", date: 'July 20th, 2018', client: "Google", pcp: 'Dew Tabey'},
  {sales: "Julia Cruise", date: 'July 20th, 2018', client: "Microsoft", pcp: 'Danyaun Halmns'},
  {sales: "John Doe", date: 'July 20th, 2018', client: "Reliance Industries Limited", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 20th, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 21st, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 21st, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 21st, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 21st, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 22nd, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 22nd, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 22nd, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 22nd, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'},
  {sales: "John Doe", date: 'July 22nd, 2018', client: "Oberoi Group of Hotels", pcp: 'Mahmud Ritelli'}
];

@Component({
  selector: 'app-detail-dashboard',
  templateUrl: './detail-dashboard.component.html',
  styleUrls: ['./detail-dashboard.component.scss']
})
export class DetailDashboardComponent implements OnInit {
  displayedColumns: string[] = ['sales', 'date', 'client', 'pcp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
