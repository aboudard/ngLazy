import { Component, inject } from '@angular/core';
import { BillsService, Bill } from 'ng-core';

@Component({
  selector: 'lib-bills',
  standalone: true,
  imports: [],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {
  bills: Bill[] = inject(BillsService).getAll();
}
