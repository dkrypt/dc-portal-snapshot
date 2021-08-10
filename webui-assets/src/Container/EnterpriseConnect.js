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
    // Create the chart
    Highcharts.chart("container", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Quality of Service",
        style: {
          color: "#005EB8",
          fontWeight: "bolder",
          fontFamily: "GE Inspira Sans !important",
          fontSize: "1.5vw !important",
        },
      },
      subtitle: {
        text: "<div>" + 95 + "%</div><br>Agent Up Time of Total",
        align: "center",
        verticalAlign: "middle",
        style: {
          fontSize: "6px",
          textAlign: "center",
        },
        x: 0,
        y: 0,
        useHTML: true,
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ["50%", "40%"],
          dataLabels: {
            enabled: false,
          },
          states: {
            hover: {
              enabled: false,
            },
          },
          size: "100%",
          innerSize: "95%",
          borderColor: null,
          borderWidth: 8,
        },
      },
      tooltip: {
        valueSuffix: "%",
      },
      series: [
        {
          innerSize: "80%",
          data: [
            {
              name: "Speed",
              y: 6,
              color: "red",
            },
            {
              name: "Non Prioritised",
              y: 80,
              color: "green",
            },
          ],
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
                <div className="col service-tile-content">Gateway Count: 8</div>
                <div className="col service-tile-content">
                  Gateway Status: <span className="greenDot"></span>
                </div>
                <div className="col service-tile-content">Agent Count: 4</div>
                <div className="col service-tile-content">
                  Agent Status: <span className="redDot"></span>
                </div>
              </div>
            </div>
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">
              <div className="titles">AGENTS - CLIENTS & SERVER</div>
              <div className="row service-details g-2">
                <div className="col service-tile-content">
                  Customer Connect JMS Client Agent #922838
                </div>
                <div className="col service-tile-content">
                  Customer Connect JMS Server Agent #922838
                </div>
                <div className="col service-tile-content">
                  SCX Racer DB Client Agent #959034
                </div>
                <div className="col service-tile-content">
                  SCX Racer DB Server Agent #959034
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg w-100 p-3 borderStyle">
          <div className="row service-text">
            <div className="col-6 service-tile-content mt-2">
              <div className="titles">SUBSCRIPTION SUMMARY</div>
              <ul className="pl-3 text-success">
                <li>Gateway #GAT93027387(CORP POC): Healthy</li>
              </ul>
              <div className="row service-text">
                <div className="col service-tile-content">
                  <div className="titles">ALERTS</div>
                  <ul className="list-unstyled service-details">
                    <li>
                      Client Agent #9281824 (Customer Connect JMS) is restarting
                    </li>
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
