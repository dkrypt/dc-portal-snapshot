import React, { Fragment } from "react";

export default class ThreadConnect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.highChart();
  }

  // istanbul ignore next
  highChart() {
    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Usage Statistics",
        style: {
          color: "#005EB8",
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
          color: "#1f78b4",
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
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 borderStyle mb-5">
          <div className="row mx-1">
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">
              <div className="titles">SUMMARY</div>
              <div className="row service-details">
                <div className="col service-tile-content">
                  Connector Count: 8
                </div>
                <div className="col service-tile-content"></div>
                <div className="col service-tile-content">
                  Subscription Count: 4
                </div>
                <div className="col service-tile-content">
                  Subscription Status:
                </div>
              </div>
            </div>
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">
              <div className="titles">CONNECTORS</div>
              <div className="row service-details g-2">
                <div className="col service-tile-content">SCX Races DB</div>
                <div className="col service-tile-content">SCX Zeal DB</div>
                <div className="col service-tile-content">
                  CC Kinesis Consumer
                </div>
                <div className="col service-tile-content">
                  CC SFDC Corporate
                </div>
                <div className="col service-tile-content">CC SFDC Aviation</div>
                <div className="col service-tile-content">SOFI API</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg w-100 p-3 borderStyle">
          <div className="row service-text">
            <div className="col-6 mt-2">
              <div className="titles">SUBSCRIPTION SUMMARY</div>
              <ul className="pl-3 text-success">
                <li>Shared Sourcing Services(SSS): Healthy</li>
                <li>Supplier Connect(SCx): Restarting</li>
                <li>Customer Connect(CC): Healthy</li>
                <li>Corporate Shared: Healthy</li>
              </ul>
              <div className="row service-text">
                <div className="col service-tile-content">
                  <div className="titles">ALERTS</div>
                  <ul className="list-unstyled service-details">
                    <li>SCx Subscription is restarting</li>
                    <li>SCx Racer DB connector is down</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div id="container" style={{ height: "15rem" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
