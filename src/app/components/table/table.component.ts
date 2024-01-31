import { Component ,OnInit} from '@angular/core';
 import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
customers!: any[];
loading: boolean = true;
activityValues: number[] = [0, 100];

data = [
  { id:1,name: 'John Doe',phone:'0123456789', tecketNo: 'c-101',cinema:'ccccccccc cccc cccc ccc ', NoOfPeople: 3, NoOfBuy:'مرة واحدة',tecket: 'تذكرة رقم 45.pdf' },
  { id:2,name: 'John Doe',phone:'0123456789', tecketNo: 'c-102',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة', NoOfPeople: 1, NoOfBuy:'مرة واحدة',tecket: 'تذكرة رقم 45.pdf' },
  { id:3,name: 'John Doe',phone:'0123456789', tecketNo: 'c-103',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة', NoOfPeople: 3, NoOfBuy:'مرة واحدة',tecket: 'تذكرة رقم 45.pdf' },
  { id:4,name: 'John Doe',phone:'0123456789', tecketNo: 'c-104',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة', NoOfPeople: 5, NoOfBuy:'مرة واحدة',tecket: 'تذكرة رقم 45.pdf' },
  { id:5,name: 'John Doe',phone:'0123456789', tecketNo: 'c-105',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة', NoOfPeople: 2, NoOfBuy:'مرة واحدة',tecket: 'تذكرة رقم 45.pdf' },
  { id:6,name: 'John Doe',phone:'0123456789', tecketNo: 'c-106',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة', NoOfPeople: 1, NoOfBuy:'مرة واحدة',tecket: 'تذكرة رقم 45.pdf' },
  
];

      ngOnInit() {
          
              this.customers = this.data;
              this.loading = false;

      }
  
      clear(table: Table) {
          table.clear();
      }
      getFirstThreeWords(cinemaName: string): string {
        const words = cinemaName.split(' ');
        return words.slice(0, 6).join(' ');
      }
      


}
