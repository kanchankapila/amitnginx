import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockComponent } from './stock.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TabViewModule } from "primeng/tabview";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}
const routes: Routes = [
  
  { path: '', component: StockComponent },
];

@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    NgbModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    NgbModule,
    TabViewModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  exports: [RouterModule]
})
export class StockModule { }
