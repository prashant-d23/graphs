import {Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  Highcharts = Highcharts
  selectedChartType:string = ''

  months:string[] = ['January','February','March'];
  monthlyRevenues:{[key:string]:number} = {};
  selectedColors:{[key:string]:number} = {};
  colorOptions:string[] = ['Red','Green','Purple','Orange','Yellow','Blue','Grey','pink'];

  barChart:any = {
    chart : {
      type : 'column'
    },

    title : {
      text : 'Monthly Qtr Report'
    },

    xAxis : {
      categories : ['Jan','Feb','Mar']
    },

    yAxis : {
      title : {
        text : 'Monthly Revenues'
      }
    },
   series: [
    {
      data: [
        { name: 'Jan', y: 1000, color : 'red'},
        { name: 'Feb', y: 2000, color : 'blue'},
        { name: 'Mar', y: 3000, color : 'yellow' },
      ],
      name : 'Months'
    }
    ]
  }
  lineChart:any = {
    chart : {
      type : 'line'
    },

    title : {
      text : 'Monthly Qtr Report'
    },

    xAxis : {
      categories : ['Jan','Feb','Mar']
    },

    yAxis : {
      title : {
        text : 'Monthly Revenues'
      }
    },
   series: [
    {
      data: [
        { name: 'Jan', y: 1000, color : 'red'},
        { name: 'Feb', y: 2000, color : 'blue'},
        { name: 'Mar', y: 3000, color : 'yellow' },
      ],
    }
    ]
  }
  pieChart: any = {
    title: {
      text: 'Monthly Qtr Report',
    },
    chart: {
      type: 'pie',
    },
    series: [
      {
        data: [
          { name: 'Jan', y: 1000, color : 'red'},
          { name: 'Feb', y: 2000, color : 'blue'},
          { name: 'Mar', y: 3000, color : 'yellow' },
        ],
      },
    ],
  };

  chartType:string = '';

  createChart(){
    if(this.selectedChartType == 'bar'){
      this.chartType = this.selectedChartType
      this.barChart.series[0].data = this.getRevenueWithColors();
    }else if(this.selectedChartType == 'pie'){
      this.chartType = this.selectedChartType
      this.pieChart.series[0].data = this.getRevenueWithColors();
    }else if(this.selectedChartType == 'line'){
      this.chartType = this.selectedChartType
      this.lineChart.series[0].data = this.getRevenueWithColors();
    }else{
      alert("Select a Chart Type");
    }
  }

  getRevenueWithColors(){
    return this.months.map(month => ({
      name : month,
      y : this.monthlyRevenues[month],
      color : this.selectedColors[month]
    }))
  }

}
