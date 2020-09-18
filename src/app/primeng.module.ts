import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// PrimeNG
import { ChartModule } from 'primeng/chart';

const myModule = [ChartModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports:[myModule]
})
export class PrimengModule {}
