import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OHLCComponent } from './ohlc.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule, } from 'primeng/card';
import { TabViewModule } from "primeng/tabview";
import { GestureConfig } from 'owl-ng';
import { OwlClockModule } from 'owl-ng';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: '', component: OHLCComponent },
  
];






@NgModule({
  declarations: [OHLCComponent],
  imports: [
    CommonModule,
    NgbModule,
    TabViewModule,
    MDBBootstrapModule,
    ChartsModule,
    HttpClientModule,
    
    ChartModule,
    ButtonModule,
    CardModule,
    SidebarModule,
    MatButtonModule,
    OwlClockModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[]
})

export class OhlcModule { }
