
import { Component, OnInit,ViewChild } from '@angular/core';
import { DataapiService } from '../../dataapi.service'
import { PrimeNGConfig } from 'primeng/api';
import { BaseChartDirective } from 'ng2-charts';

import { ViewportScroller } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StockChart } from 'angular-highcharts';
import { ChartType, ChartOptions } from 'chart.js';

export interface pharmaniftystockstiles {

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  
}
export interface stockhcdatatile{
  x: number;
  y: number;
}
export interface pharmaniftycrossovertile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface pharmaniftycrossoverwtile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface pharmaniftycrossovermtile {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  
}
export interface pharmaniftyindicatorstile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface pharmaniftyindicatorswtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface pharmaniftyindicatorsmtile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
 
}
export interface pharmaniftysentimentstiles
{
    text1: string;
  text2: string;
}

export interface pharmaniftybbtile{
  text1: string;
  text2: string;
  
 
}
export interface niftyematile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
}
export interface niftysmatile{
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  
 
}


@Component({
  selector: 'app-pharmanifty',
  templateUrl: './pharmanifty.component.html',
  styleUrls: ['./pharmanifty.component.scss']
})
export class PharmaniftyComponent implements OnInit {
 
  constructor(private http: HttpClient, private dataApi: DataapiService, private window: Window, private primengConfig: PrimeNGConfig, private vps: ViewportScroller) {
    
  }
  stockhighcharts: StockChart;
  public stockhcdate: Array<any> = [];
  public pharmaniftydata: Array<number> = [];
  public pharmaniftyLabels: Array<any> = [];
 
  public niftyvixdata: Array<number> = [];
  public niftyvixtime: Array<any> = [];
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<number> = [];
  
 
  public pharmanifty5ddata: Array<number> = [];
  public pharmanifty5dLabels: Array<any> = [];
  public lineChart5dData: Array<any> = [];
  public lineChart5dLabels: Array<number> = [];
  public pharmanifty1mdata: Array<number> = [];
  public pharmanifty1mLabels: Array<any> = [];
  public lineChart1mData: Array<any> = [];
  public lineChart1mLabels: Array<number> = [];
  public pharmanifty3mdata: Array<number> = [];
  public pharmanifty3mLabels: Array<any> = [];
  public lineChart3mData: Array<any> = [];
  public lineChart3mLabels: Array<number> = [];
  public pharmanifty6mdata: Array<number> = [];
  public pharmanifty6mLabels: Array<any> = [];
  public lineChart6mData: Array<any> = [];
  public lineChart6mLabels: Array<number> = [];
  public pharmanifty1yrdata: Array<number> = [];
  public pharmanifty1yrLabels: Array<any> = [];
  public lineChart1yrData: Array<any> = [];
  public lineChart1yrLabels: Array<number> = [];
  
  public lineChartvixData: Array<any> = [];
  public lineChartvixLabels: Array<number> = [];
  public lineChartvixOptions: any;
  
  basicData: any;
  basicOptions: any;
  basicData1: any;
  basicOptions1: any;
  chart: any;
  date: any;
  pharmaniftysentiments: pharmaniftysentimentstiles[] = [];
  
  pharmaniftystocks: pharmaniftystockstiles[] = [];
  pharmaniftycrossover: pharmaniftycrossovertile[] = [];
  pharmaniftycrossoverw: pharmaniftycrossoverwtile[] = [];
  pharmaniftycrossoverm: pharmaniftycrossovermtile[] = [];
  pharmaniftyindicators: pharmaniftyindicatorstile[] = [];
  pharmaniftyindicatorsw: pharmaniftyindicatorswtile[] = [];
  pharmaniftyindicatorsm: pharmaniftyindicatorsmtile[] = [];
  pharmaniftybb: pharmaniftybbtile[] = [];
  niftyema: niftyematile[] = [];
  niftysma: niftysmatile[] = [];
 
  public lineChartDatapnsnrr1: Array<number> = [];
  public lineChartDatapnsnrr2: Array<number> = [];
  public lineChartDatapnsnrr3: Array<number> = [];
  public lineChartDatapnsnrs1: Array<number> = [];
  public lineChartDatapnsnrs2: Array<number> = [];
  public lineChartDatapnsnrs3: Array<number> = [];
  public lineChartLabelspnsnrr1: Array<any> = [];
  public lineChartLabelspnnrr3: Array<any> = [];
  public lineChartLabelspnsnrr2: Array<any> = [];
  public lineChartLabelspnsnrs1: Array<any> = [];
  public lineChartLabelspnsnrs2: Array<any> = [];
  public lineChartLabelspnsnrs3: Array<any> = [];
  public lineChartDatapnsnrr1w: Array<number> = [];
  public lineChartDatapnsnrr2w: Array<number> = [];
  public lineChartDatapnsnrr3w: Array<number> = [];
  public lineChartDatapnsnrs1w: Array<number> = [];
  public lineChartDatapnsnrs2w: Array<number> = [];
  public lineChartDatapnsnrs3w: Array<number> = [];
  public lineChartLabelspnsnrr1w: Array<any> = [];
  public lineChartLabelspnnrr3w: Array<any> = [];
  public lineChartLabelspnsnrr2w: Array<any> = [];
  public lineChartLabelspnsnrs1w: Array<any> = [];
  public lineChartLabelspnsnrs2w: Array<any> = [];
  public lineChartLabelspnsnrs3w: Array<any> = [];
  public lineChartDatapnsnrr1m: Array<number> = [];
  public lineChartDatapnsnrr2m: Array<number> = [];
  public lineChartDatapnsnrr3m: Array<number> = [];
  public lineChartDatapnsnrs1m: Array<number> = [];
  public lineChartDatapnsnrs2m: Array<number> = [];
  public lineChartDatapnsnrs3m: Array<number> = [];
  public lineChartLabelspnsnrr1m: Array<any> = [];
  public lineChartLabelspnnrr3m: Array<any> = [];
  public lineChartLabelspnsnrr2m: Array<any> = [];
  public lineChartLabelspnsnrs1m: Array<any> = [];
  public lineChartLabelspnsnrs2m: Array<any> = [];
  public lineChartLabelspnsnrs3m: Array<any> = [];
  basicData3: any;
  basicOptions3: any;
  public  lineChartColors = [
    {
      borderColor: '#2d0365'
    }
  ];
  public lineChartOptions:ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
     position: 'top'
              },
    
    elements: {
      point: {
        radius: 0
      }
    }
   
  };
 
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getmcpharmaniftystocks();
    this.getpharmaniftysmaema();
    this.getpharmanifty5d();
    this.getpharmanifty1m();
    this.getpharmanifty3m();
    this.getpharmanifty6m();
    this.getpharmaniftytoday()
    this.getpharmaniftyvix()
 
    this.getpharmaniftysentiments()
    this.gettrendlynenifty()
    this.getpharmanifty1yr();
    setInterval(() => { this.getpharmaniftysmaema() }, 30000);
    setInterval(() => { this.getmcpharmaniftystocks()}, 30000);
    setInterval(() => { this.getpharmaniftyvix() }, 30000);
    
    
    setInterval(() => { this.getpharmaniftytoday() }, 30000);

  
  }
  gettrendlynenifty() {
    this.dataApi.gettrendlynenifty().subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    // this.http.get('https://trendlyne.com/equity/getStockMetricParameterList/1887/',{headers: {'set-cookie':'csrftoken=UdCOt4TuEtdES39jXF2do7Sxm9xvPDFW4BBTkhEtDI4M93qULm9M9gb7t7mM4vxL; expires=Sat, 22 Apr 2023 22:36:25 GMT; Max-Age=31449600; Path=/; SameSite=Lax','cookie':'_ga=GA1.2.775644955.1603113261; __utma=185246956.775644955.1603113261.1614010114.1614018734.3; _gid=GA1.2.1363348430.1650748663; csrftoken=UdCOt4TuEtdES39jXF2do7Sxm9xvPDFW4BBTkhEtDI4M93qULm9M9gb7t7mM4vxL; .trendlyne=vvd6ghws3icett72qn91snttaywv0chw; _gat=1'}}).subscribe(data5 => {
    //   let nestedItems = Object.keys(data5).map(key => {
    //     return data5[key];
    //   });
     
      console.log(nestedItems)

    }, err => {
      console.log(err)
    })
   
  }
  getpharmaniftysentiments() {
    this.pharmaniftysentiments.length = 0;
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3Bcpr?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      this.pharmaniftysentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Daily"})
    }, err => {
      console.log(err)
    })

      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3Bcpr?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
        
    this.pharmaniftysentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Weekly"}) 
     
  }, err => {
    console.log(err)
  })
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3Bcpr?field=RSI').subscribe(data5 => {
    let nestedItems = Object.keys(data5).map(key => {
    return data5[key];
    });
    
      
      this.pharmaniftysentiments.push({ text1: nestedItems[2]['sentiments']['indication'],text2:"Monthly"})
    }, err => {
      console.log(err)
    })
  }
  
  getpharmaniftyvix() {
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=36&range=1d&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
        /////////////////////Nifty Vix/////////////////////////////////
        this.niftyvixdata.length = 0;
        this.niftyvixtime.length = 0;
        for (let val in nestedItems[1]['values']) {
          this.niftyvixdata.push(nestedItems[1]['values'][val]['_value'])
          this.niftyvixtime.push(nestedItems[1]['values'][val]['_time'])
        }
        
        this.lineChartvixData = [{
          label: 'VIX',
          data: this.niftyvixdata,
          borderWidth: 1,
          fill: false
        }];
  
        this.lineChartvixLabels = this.niftyvixtime;
      
      }, err => {
        console.log(err)
      })
  }  
   getpharmaniftysmaema() {
    this.http.get('https://mo.streak.tech/api/tech_analysis/?timeFrame=day&stock=INDICES%3ANIFTY%20PHARMA').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      /////////////////////////////EMA/SMA from Kite //////////////////////
    
      this.niftyema.length = 0;
      this.niftysma.length = 0;

      this.niftyema.push({ text1: nestedItems[10], text2: nestedItems[5], text3: nestedItems[7], text4: nestedItems[9], text5: nestedItems[11], text6: nestedItems[6], text7: nestedItems[8] })
      this.niftysma.push({ text1: nestedItems[37], text2: nestedItems[32], text3: nestedItems[34], text4: nestedItems[36], text5: nestedItems[38], text6: nestedItems[33], text7: nestedItems[35] })

     
    }, err => {
      console.log(err)
    })
  }
 
 
 
  getmcpharmaniftystocks() {
    this.http.get('https://etmarketsapis.indiatimes.com/ET_Stats/getIndexByIds?pagesize=25&exchange=NSE&sortby=percentChange&sortorder=desc&indexid=13017&company=true&indexname=Nifty%20Pharma&marketcap=').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      

        //////////////////////////////Nifty 50 Stocks ////////////////////////
        this.pharmaniftystocks.length = 0;
        for (let val in nestedItems[0][0]['companies']) {
          this.pharmaniftystocks.push({ text1: nestedItems[0][0]['companies'][val].companyShortName, text2: nestedItems[0][0]['companies'][val].change, text3: nestedItems[0][0]['companies'][val].percentChange, text4: nestedItems[0][0]['companies'][val].current })
        }
  
     
    }, err => {
      console.log(err)
    })
  }
   getpharmanifty1yr() {
    
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=41&range=1yr&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.pharmanifty1yrdata.push(nestedItems[1].values[val]["_value"])
        this.pharmanifty1yrLabels.push(nestedItems[1].values[val]["_time"])
   
      }
  
      this.lineChart1yrData = [{
        label: 'Price',
        data: this.pharmanifty1yrdata,
        borderWidth: 1,
        fill: false
      }];

      this.lineChart1yrLabels = this.pharmanifty1yrLabels;
    
      
    }, err => {
      console.log(err)
    })
   
   
  }
  trackByFuntion(index, item) {
   // console.log( 'TrackBy:', item.text2, 'at index', index );
    return item.text2
  }
  trackByFuntion1(index1, item1) {
    //console.log( 'TrackBy:', item1.text1, 'at index', index1);
    return item1.text1
   }
  trackByFuntion2(index2, item2) {
    //console.log( 'TrackBy:', item2.text1, 'at index', index2 );
    return item2.text1
   }
  trackByFuntion3(index3, item3) {
    //console.log( 'TrackBy:', item3.text1, 'at index', index3 );
    return item3.text1;
   }
  trackByFuntion4(index4, item4) {
    //console.log( 'TrackBy:', item4.text2, 'at index', index4 );
    item4.text2;
   }
  trackByFuntion5(index5, item5) {
    //console.log( 'TrackBy:', item5.text1, 'at index', index5 );
    return item5.text1;
   }
  trackByFuntion6(index6, item6) {
    //console.log( 'TrackBy:', item6.text1, 'at index', index6 );
     return item6.text1;
   }
  trackByFuntion7(index7, item7) {
    //console.log( 'TrackBy:', item7.text1, 'at index', index7 );
    return item7.text1;
   }
  trackByFuntion8(index8, item8) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item8.text3 ;
  }
  trackByFuntion9(index9, item9) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item9.text3 ;
  }
  trackByFuntion10(index10, item10) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item10.text3 ;
  }
  trackByFuntion11(index11, item11) {
    //console.log( 'TrackBy:', item8.text3, 'at index', index8 );
    return item11.text3 ;
   }
  

  getpharmanifty6m() {
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=41&range=6m&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.pharmanifty6mdata.push(nestedItems[1].values[val]["_value"])
        this.pharmanifty6mLabels.push(nestedItems[1].values[val]["_time"])
   
      }
  

      this.lineChart6mData = [{
        label: 'Price',
        data: this.pharmanifty6mdata,
        borderWidth: 1,
        fill: false
      }];

      this.lineChart6mLabels = this.pharmanifty6mLabels;
    
      
    }, err => {
      console.log(err)
    })
  
  }
  getpharmanifty3m() {
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=41&range=3m&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      for (let val in nestedItems[1].values) {
        this.pharmanifty3mdata.push(nestedItems[1].values[val]["_value"])
        this.pharmanifty3mLabels.push(nestedItems[1].values[val]["_time"])
   
      }
  

      this.lineChart3mData = [{
        label: 'Price',
        data: this.pharmanifty3mdata,
        borderWidth: 1,
        fill: false
      }];

      this.lineChart3mLabels = this.pharmanifty3mLabels;
    
     
    }, err => {
      console.log(err)
    })
  
  }
  getpharmanifty5d() {
    this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/W/in%3Bcpr?field=RSI').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
      ////////////To get Nifty 5day Resistances and Indicators/////////////
      
      let val5 = 0;
      while (val5 != 2400) {
        val5 = val5 + 1
        this.lineChartDatapnsnrr1w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
          this.lineChartDatapnsnrr2w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
          this.lineChartDatapnsnrr3w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
          this.lineChartDatapnsnrs3w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
          this.lineChartDatapnsnrs2w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
          this.lineChartDatapnsnrs1w.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
      }
   
      this.pharmaniftycrossoverw.length = 0;
      for (let val in nestedItems[2]['crossover']) {
        this.pharmaniftycrossoverw.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
      }
      this.pharmaniftyindicatorsw.length = 0;
      for (let val1 in nestedItems[2]['indicators']) {
        if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
          this.pharmaniftyindicatorsw.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
        }
      }
      
      
    }, err => {
      console.log(err)
    })
     ////////////To get Nifty 1 week Price///////////////////////
      
     this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=41&range=5d&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
      
  this.pharmanifty5ddata.length = 0;
  this.pharmanifty5dLabels.length = 0;
  for (let val in nestedItems[1].values) {
    this.pharmanifty5ddata.push(nestedItems[1].values[val]["_value"])
    this.pharmanifty5dLabels.push(nestedItems[1].values[val]["_time"])
  
  }
 

  this.lineChart5dData = [{
    label: 'Price',
    data: this.pharmanifty5ddata,
    borderWidth: 1,
    fill: false
  }, {
    label: 'R1',
    data: this.lineChartDatapnsnrr1w,
    borderWidth: 1,
    bordercolor: '#d3766c',
    fill: false
  },
  {
    label: 'R2',
    data: this.lineChartDatapnsnrr2w,
    borderWidth: 1,
    borderColor: '#e3256b',
    fill: false
  }
    , {
    label: 'R3',
    data: this.lineChartDatapnsnrr3w,
    borderWidth: 1,
    borderColor: '#c84343',
    fill: false
  }, {
    label: 'S1',
    data: this.lineChartDatapnsnrs1w,
    borderWidth: 1,
    borderColor: '#90b590',
    fill: false
  }, {
    label: 'S2',
    data: this.lineChartDatapnsnrs2w,
    borderWidth: 1,
    borderColor: '#09c51b',
    fill: false
  }, {
    label: 'S3',
    data: this.lineChartDatapnsnrs3w,
    borderWidth: 1,
    borderColor: '#375f00',
    fill: false
  }];

  this.lineChart5dLabels = this.pharmanifty5dLabels;
 

}, err => {
  console.log(err)
})
 
  }  
   
    getpharmanifty1m() {
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/M/in%3Bcpr?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
       
        ////////////To get Nifty 1 month Resistances and Indicators/////////////
        this.lineChartDatapnsnrr1m.length = 0;
        this.lineChartDatapnsnrr2m.length = 0;
        this.lineChartDatapnsnrr3m.length = 0;
        this.lineChartDatapnsnrs1m.length = 0;
        this.lineChartDatapnsnrs2m.length = 0;
        this.lineChartDatapnsnrs3m.length = 0;
        let val5 = 0;
        while (val5 != 2000) {
          val5 = val5 + 1
          this.lineChartDatapnsnrr1m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
            this.lineChartDatapnsnrr2m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
            this.lineChartDatapnsnrr3m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
            this.lineChartDatapnsnrs3m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
            this.lineChartDatapnsnrs2m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
            this.lineChartDatapnsnrs1m.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
        }
   
        this.pharmaniftycrossoverm.length = 0;
        for (let val in nestedItems[2]['crossover']) {
          this.pharmaniftycrossoverm.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
        }
        this.pharmaniftyindicatorsm.length = 0;
        for (let val1 in nestedItems[2]['indicators']) {
          if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
            this.pharmaniftyindicatorsm.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
          }
        }
       
      }, err => {
        console.log(err)
      })
       
      
     
  

      ////////////To get Nifty 1 month Price///////////////////////
      
        this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=41&range=1m&type=area').subscribe(data5 => {
          let nestedItems = Object.keys(data5).map(key => {
            return data5[key];
          });
         
      this.pharmanifty1mdata.length = 0;
      this.pharmanifty1mLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.pharmanifty1mdata.push(nestedItems[1].values[val]["_value"])
        this.pharmanifty1mLabels.push(nestedItems[1].values[val]["_time"])
      
      }
     
    
      this.lineChart1mData = [{
        label: 'Price',
        data: this.pharmanifty1mdata,
        borderWidth: 1,
        fill: false
      }, {
        label: 'R1',
        data: this.lineChartDatapnsnrr1m,
        borderWidth: 1,
        bordercolor: '#d3766c',
        fill: false
      },
      {
        label: 'R2',
        data: this.lineChartDatapnsnrr2m,
        borderWidth: 1,
        borderColor: '#e3256b',
        fill: false
      }
        , {
        label: 'R3',
        data: this.lineChartDatapnsnrr3m,
        borderWidth: 1,
        borderColor: '#c84343',
        fill: false
      }, {
        label: 'S1',
        data: this.lineChartDatapnsnrs1m,
        borderWidth: 1,
        borderColor: '#90b590',
        fill: false
      }, {
        label: 'S2',
        data: this.lineChartDatapnsnrs2m,
        borderWidth: 1,
        borderColor: '#09c51b',
        fill: false
      }, {
        label: 'S3',
        data: this.lineChartDatapnsnrs3m,
        borderWidth: 1,
        borderColor: '#375f00',
        fill: false
      }];
   
      this.lineChart1mLabels = this.pharmanifty1mLabels;
    
    }, err => {
      console.log(err)
    })
  }
 
  getpharmaniftytoday() {
        ////////////To get Nifty Today Price///////////////////////
    
    this.http.get('https://appfeeds.moneycontrol.com/jsonapi/market/graph&format=json&ind_id=41&range=1d&type=area').subscribe(data5 => {
      let nestedItems = Object.keys(data5).map(key => {
        return data5[key];
      });
    
      this.pharmaniftydata.length = 0;
      this.pharmaniftyLabels.length = 0;
      for (let val in nestedItems[1].values) {
        this.pharmaniftydata.push(nestedItems[1].values[val]["_value"])
        this.pharmaniftyLabels.push((nestedItems[1].values[val]["_time"]))
        this.stockhcdate.push({x:(nestedItems[1].values[val]["_time"]),y:(nestedItems[1].values[val]["_value"])})     
      }
    }, err => {
      console.log(err)
    })
      this.http.get('https://priceapi.moneycontrol.com/pricefeed/techindicator/D/in%3Bcpr?field=RSI').subscribe(data5 => {
        let nestedItems = Object.keys(data5).map(key => {
          return data5[key];
        });
      
        ////////////To get Nifty Today Resistances and Indicators/////////////
        this.lineChartDatapnsnrr1.length = 0;
        this.lineChartDatapnsnrr2.length = 0;
        this.lineChartDatapnsnrr3.length = 0;
        this.lineChartDatapnsnrs1.length = 0;
        this.lineChartDatapnsnrs2.length = 0;
        this.lineChartDatapnsnrs3.length = 0;
   
        let val = 0;
        while (val != 400) {
          val = val + 1
          this.lineChartDatapnsnrr1.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r1),
            this.lineChartDatapnsnrr2.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r2),
            this.lineChartDatapnsnrr3.push(nestedItems[2]['pivotLevels'][0].pivotLevel.r3),
            this.lineChartDatapnsnrs3.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s3),
            this.lineChartDatapnsnrs2.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s2),
            this.lineChartDatapnsnrs1.push(nestedItems[2]['pivotLevels'][0].pivotLevel.s1)
        }
         
        this.pharmaniftyindicators.length = 0;
        this.pharmaniftycrossover.length = 0;
        for (let val in nestedItems[2]['crossover']) {
          this.pharmaniftycrossover.push({ text1: nestedItems[2]['crossover'][val]['displayValue'], text3: nestedItems[2]['crossover'][val]['indication'], text2: nestedItems[2]['crossover'][val]['period'], text4: nestedItems[2]['crossover'][val]['period'] })
        }
         
        for (let val1 in nestedItems[2]['indicators']) {
          if (nestedItems[2]['indicators'][val1]['id'] != 'bollinger') {
            this.pharmaniftyindicators.push({ text1: nestedItems[2]['indicators'][val1].displayName, text2: nestedItems[2]['indicators'][val1].id, text3: nestedItems[2]['indicators'][val1].indication, text4: nestedItems[2]['indicators'][val1].value })
          }
        }
          
        
      
      
     
    
      this.lineChartData = [{
        label: 'Price',
        data: this.pharmaniftydata,
        borderWidth: 1,
        fill: false
      }, 
      {
        label: 'R2',
        data: this.lineChartDatapnsnrr2,
        borderWidth: 1,
        borderColor: '#e3256b',
        fill: false
      },
      {
        label: 'R1',
        data: this.lineChartDatapnsnrr1,
        borderWidth: 1,
        bordercolor: '#d3766c',
        fill: false
      }
        , {
        label: 'R3',
        data: this.lineChartDatapnsnrr3,
        borderWidth: 1,
        borderColor: '#c84343',
        fill: false
      }, {
        label: 'S1',
        data: this.lineChartDatapnsnrs1,
        borderWidth: 1,
        borderColor: '#90b590',
        fill: false
      }, {
        label: 'S2',
        data: this.lineChartDatapnsnrs2,
        borderWidth: 1,
        borderColor: '#09c51b',
        fill: false
      }, {
        label: 'S3',
        data: this.lineChartDatapnsnrs3,
        borderWidth: 1,
        borderColor: '#375f00',
        fill: false
      }];
   
      this.lineChartLabels = this.pharmaniftyLabels;
   
   
      
    }, err => {
      console.log(err)
    })
  }
}



 



 