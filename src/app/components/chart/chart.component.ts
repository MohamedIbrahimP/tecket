import { Component } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  ngAfterViewInit() {
    this.createChart();
  }

  createChart(){
      //line
 let canvas = document.getElementById("lineChart") as HTMLCanvasElement;
    const ctxL = canvas.getContext('2d');

 let myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ['ديسمبر','نوفمبر','اكتوبر','سبتمبر','أغسطس','يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
  datasets: [{
    label: '',
      data: [80,81,56,55,40,65,80,56,55,40,50,55],
      backgroundColor: ['rgba(138, 116, 249,.4)'],
      borderColor: ['rgba(1138, 116, 249)'],
      borderWidth: 4,
      borderJoinStyle: 'round',

    },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    fill:{ target: 'start', below: 'rgba(105, 99, 132, 1)'},
    scales: {
              y: {display:false , beginAtZero: true,suggestedMin: 50,suggestedMax: 100,stacked: false },
              x: {display: true, scaleFontSize: 24,fontWeight: 'bold' , ticks: { fontSize: 14,}}
            },
    elements: {
              point: {radius: 20, pointBorderColor: 'transparent', pointBackgroundColor: 'transparent', },
              line: {borderCapStyle: 'butt',borderJoinStyle: 'miter',cubicInterpolationMode: 'monotone'},
            },
    spanGaps:true,
    showLine:true,
    steppedLine:true,
  },
  plugins: {
    legend: {
      display: true, labels: {fontSize: 26,}},
      tooltip: {
            callbacks: {
                      label: function (context:any) {
                      var dataPoint = context.dataPoints[1];
                      return dataPoint.dataset.label + ':' + dataPoint.parsed.y;
                      },
                      },
                 },
}
});
}

}
