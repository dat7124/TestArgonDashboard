import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import {
  chartOptions,
  parseOptions,
  chartBarStackedData,
  chartDoughnutData,
  chartPieData,
  chartPointsData,
  chartSalesData,
  chartBarsData
} from "../../variables/charts";

@Component({
  selector: "app-charts",
  templateUrl: "charts.component.html"
})
export class ChartsComponent implements OnInit {
  public datasets: any;
  public data: any;

  constructor() {}

  ngOnInit() {
    parseOptions(Chart, chartOptions());
    //
    // chart bar stacked
    // Variables
    var chartBarStacked = <HTMLCanvasElement> document.getElementById('myChart');

    // Init chart
    const barStackedChart = new Chart(chartBarStacked, {
      type: "bar",
      data: chartBarStackedData.data,
      options: chartBarStackedData.options
    });

    //
    // chart doughnut
    // Variables
    var chartDoughnut = <HTMLCanvasElement> document.getElementById("chart-doughnut");

    // Init chart
    var doughnutChart = new Chart(chartDoughnut, {
      type: "doughnut",
      data: chartDoughnutData.data,
      options: chartDoughnutData.options
    });

    //
    // chart pie
    // Variables
    var chartPie = <HTMLCanvasElement> document.getElementById("chart-pie");

    // Init chart
    var pieChart = new Chart(chartPie, {
      type: "pie",
      data: chartPieData.data,
      options: chartPieData.options
    });

    //
    // chart points
    // Variables
    var chartPoints = <HTMLCanvasElement> document.getElementById("chart-points");

    // Init chart
    var pointsChart = new Chart(chartPoints, {
      type: "line",
      data: chartPointsData.data,
      options: chartPointsData.options
    });

    //
    // chart sales
    // Variables
    var chartSales = <HTMLCanvasElement> document.getElementById("chart-sales2");

    // Init chart
    var salesChart = new Chart(chartSales, {
      type: "line",
      data: chartSalesData.data,
      options: chartSalesData.options
    });

    //
    // chart bars
    // Variables
    var chartBars = <HTMLCanvasElement> document.getElementById("chart-bars2");

    // Init chart
    var barsChart = new Chart(chartBars, {
      type: "bar",
      data: chartBarsData.data
    });
  }
}
