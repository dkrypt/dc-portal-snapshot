import React from 'react';

// import './App.css';



//Importing bootstrap and other modules
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/popper.min.js';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Sidebar } from './Components/Sidebar.js';
import { CenterHeader } from './Components/CenterHeader.js'



// import $ from 'jquery';
export default class App extends React.Component {
  // componentDidMount(){

  //   // Sidebar Toggle Menu Click
  //   $("#menu-toggle").click(function(e) {
  //     e.preventDefault();
  //     $("#wrapper").toggleClass("toggled");
  //    });
  // }
  render() {
    return (
      <div className="MainDiv">

        <div className="d-flex" id="wrapper">

          <Sidebar />

          <div id="page-content-wrapper">

            <CenterHeader />
            {/* <div className="container-fluid d-grid">
              <div className="container-lg w-100 p-3 border border-success mb-5">
                <div className="text-center my-2 text-success subs-text"><h5><b>MY SUBSCRIPTIONS</b></h5></div>
                <div className="row mx-1" style={{color:"#1f78b4"}}>
                  <div className="col m-1 border border-success p-2 text-left">
                    <h6><b>THREAD CONNECT</b></h6>
                    <span className="thread-span"></span>
                  </div>
                  <div className="col m-1 border border-success p-2 text-left">
                    <h6><b>ENTERPRISE CONNECT</b></h6>
                    <span className="thread-span"></span>
                  </div>
                  <div className="col m-1 border border-success p-2 text-left">
                    <h6><b>DIVE</b></h6>
                    <span className="thread-span"></span>
                  </div>
                  </div>
                
              </div>
              <div className="container-lg w-100 p-3 border border-success">
              <div className="text-center my-2 text-success subs-text"><h5><b>PLANNED OUTAGES</b></h5>
              <div className="d-flex flex-column inside-box" style={{color:"#1f78b4",fontSize:"12px"}}>
              <div className="text-center para-text my-2">March 22, 2021 (04:00 To 05:00 EST) Thread Connect Corporate Production will undergo monthly patching activity</div>
              <div className="text-center para-text my-2">April 8, 2021 (02:00 To 04:00 EST) Enterprise Connect Gateways will not be reachable due to planned maintenance activity</div>
              </div>
              <div className="border-bottom border-dark border-1 mx-4"></div>
              </div>
              <div className="text-center my-2 text-success subs-text"><h5><b>IMPORTANT ANNOUNCEMENTS</b></h5>
              <div className="d-flex flex-column inside-box" style={{color:"#1f78b4",fontSize:"12px"}}>
              <div className="text-center para-text my-2">GE Healthcare Unveils Vscan Air, a New Intuitive, Wireless Handheld Ultrasound</div>
              <div className="text-center para-text my-2">GE Renewable Energy to supply DC-Coupled system to Convergent for 123 MWh hybrid solar plus storage project in Upstatek</div>
              </div>
              </div>
              </div>
            </div> */}
          </div>

        </div>

      </div>
    );
  }
}

