import React, { Fragment } from "react";

export default class EnterpriseConnect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.highChart();
  }

  // istanbul ignore next
  highChart() {
    /* Highcharts.chart("pieChart", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in January, 2018",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 61.41,
          sliced: true,
          selected: true,
        },
        {
          name: "Internet Explorer",
          y: 11.84,
        },
        {
          name: "Firefox",
          y: 10.85,
        },
        {
          name: "Edge",
          y: 4.67,
        },
        {
          name: "Safari",
          y: 4.18,
        },
        {
          name: "Sogou Explorer",
          y: 1.64,
        },
        {
          name: "Opera",
          y: 1.6,
        },
        {
          name: "QQ",
          y: 1.2,
        },
        {
          name: "Other",
          y: 2.61,
        },
      ],
    },
  ],
});

Highcharts.chart("lineChart", {
  title: {
    text: "Solar Employment Growth by Sector, 2010-2016",
  },

  subtitle: {
    text: "Source: thesolarfoundation.com",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: "Installation",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: "Manufacturing",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: "Sales & Distribution",
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: "Project Development",
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: "Other",
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
}); */

    /* Highcharts.chart("barChart", {
  chart: {
    type: "column",
  },

  title: {
    text: "Total fruit consumption, grouped by gender",
  },

  xAxis: {
    categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Number of fruits",
    },
  },

  tooltip: {
    formatter: function () {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    },
  },

  plotOptions: {
    column: {
      stacking: "normal",
    },
  },

  series: [
    {
      name: "John",
      data: [5, 3, 4, 7, 2],
      stack: "male",
    },
    {
      name: "Joe",
      data: [3, 4, 4, 2, 5],
      stack: "male",
    },
    {
      name: "Jane",
      data: [2, 5, 6, 2, 1],
      stack: "female",
    },
    {
      name: "Janet",
      data: [3, 0, 4, 4, 3],
      stack: "female",
    },
  ],
}); */

  /*   Highcharts.setOptions({
      colors: ["green"],
    }); */

    // Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Quality of Service',
    style: {
      color: "rgb(31, 120, 180)",
      fontWeight: "bolder",
      fontFamily: "GE Inspira Sans !important",
      fontSize: "1.5vw !important"
    }
  },
  subtitle: {
    text: `<div>95%</div><br>Agent Up Time of Total`,
    align: "center",
    verticalAlign: "middle",
    style: {
      "fontSize": "7px",
      "textAlign": "center"
    },
    x: 0,
    y: -60,
    useHTML: true
  },
  plotOptions: {
    pie: {
      shadow: false,
      center: ["50%", "20%"],
      dataLabels: {
        enabled: false
      },
      states: {
        hover: {
          enabled: false
        }
      },
      size: "50%",
      innerSize: "95%",
      borderColor: null,
      borderWidth: 8
    }

  },
  tooltip: {
    valueSuffix: '%'
  },
  series: [{
    innerSize: '80%',
    data: [{
      name: 'Speed',
      y: 6,
      color: 'red'
    }, {
      name: 'Non Prioritised',
      y: 80,
      color: 'green'
    }]
  }],
});


    /* Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Usage Statistics",
        style: {
          color: "rgb(31, 120, 180)",
          fontWeight: "bolder",
          fontFamily: "GE Inspira Sans !important",
          fontSize: "1.5vw !important",
        },
      },
      // subtitle: {
      //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
      // },
      xAxis: {
        type: "category",
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "GE Inspira Sans !important",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          // text: 'Population (millions)'
        },
      },
      legend: {
        enabled: false,
      },
      // tooltip: {
      //     pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
      // },
      series: [
        {
          // name: 'Population',
          data: [
            ["Jan", 24.2],
            ["Feb", 20.8],
            ["Mar", 14.9],
            ["Apr", 13.7],
            ["May", 13.1],
            ["Jun", 12.7],
            ["Jul", 12.4],
            ["Aug", 12.2],
            ["Sep", 12.0],
            ["Oct", 11.7],
            ["Nov", 11.5],
            ["Dec", 11.2],
          ],
          dataLabels: {
            // enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:.1f}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "GE Inspira Sans !important",
            },
          },
        },
      ],
    }); */
  }

  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 border border-success mb-5">
          <div className="row mx-1" style={{ color: "#1f78b4" }}>
            <div className="col m-1 border border-success p-2 text-left">
              <h6>
                <b>Summary</b>
              </h6>
              <div className="row service-details">
                <div className="col">Gateway Count: 8</div>
                <div className="col">
                Gateway Status:
                </div>
                <div className="col">Agent Count: 4</div>
                <div className="col">Agent Status:</div>
              </div>
            </div>
            <div className="col m-1 border border-success p-2 text-left">
              <h6>
                <b>Agents - Client & Server</b>
              </h6>
              <div className="row service-details g-2">
                <div className="col">Customer Connect JMS Client Agent #922838</div>
                <div className="col">Customer Connect JMS Server Agent #922838</div>
                <div className="col">SCX Racer DB Client Agent #959034</div>
                <div className="col">SCX Racer DB Server Agent #959034</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg w-100 p-3 border border-success">
          <div className="row service-text">
            <div className="col-6 mt-2">
              <h6>
                <b>Subscription Summary</b>
              </h6>
              <ul className="pl-3 text-success">
                <li>Gateway #GAT93027387(CORP POC): Healthy</li>
              </ul>
              <div className="row service-text">
                <div className="col">
                  <h6>
                    <b>Alerts</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>Client Agent #9281824 (Customer Connect JMS) is restarting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              {/* <h6>
                <b>Usage Statistics</b>
              </h6> */}
              <div className="col">
                <div className="card border-0">
                  <div className="card-body p-0">
                    {/* <div id="barChart"></div> */}
                    <div id="container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
