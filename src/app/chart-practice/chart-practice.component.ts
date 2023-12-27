import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-practice',
  templateUrl: './chart-practice.component.html',
  styleUrls: ['./chart-practice.component.scss']
})
export class ChartPracticeComponent {

  Highcharts = Highcharts  // import the highcharts to bind it

  selectedChartType:string = ''  // store chart type from radio

  months:string[] = ['January','February','March'];  //months to load
  monthlyRevenues:{[key:string]:number} = {}; // {January: 45, February: 455, March: 56}
  selectedColors:{[key:string]:number} = {};  // {January: 'Orange', February: 'Blue', March: 'Grey'}
  colorOptions:string[] = ['Red','Green','Purple','Orange','Yellow','Blue','Grey','pink'];

  barChart:any = {
    chart : {
      type : 'column'
    },

    title : {
      text : 'Sample Bar Chart'
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
      text : 'Sample Line Chart'
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

  chartType:string = ''; // load only selected chart

  createChart(){
    // console.log(this.monthlyRevenues,this.selectedColors,this.selectedChartType);
    if(this.selectedChartType == 'bar'){
      this.chartType = this.selectedChartType
      this.barChart.series[0].data = this.getRevenueWithColors(); //store in the data array
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
    //store dynamic data in an object
    return this.months.map(month => ({
      name : month,
      y : this.monthlyRevenues[month],
      color : this.selectedColors[month]
    }))
  }

}
