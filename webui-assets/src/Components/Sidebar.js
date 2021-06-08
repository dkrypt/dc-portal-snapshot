import React from 'react';
// import {SidebarMenu} from './SidebarMenu';
// import '../App.css'

// import GElogo from 'DC1/webui-assets/srcsrc/images/Logo-GE.svg';
// import PNSLogo from 'src/images/Icon-Products.svg';
// import DASHLogo from 'src/images/Icon-Dashboard.svg';
// import SUBSLogo from 'src/images/Icon-Subscriptions.svg';
// import ANELogo from 'src/images/Icon-Announcements-Events.svg';
// import ERLogo from 'src/images/Icon-Engagement-Requests.svg';
// import SUPPORTLogo from 'src/images/Icon-Support.svg';
// import PREFLogo from 'src/images/Icon-Settings.svg';
// import ADMINLogo from 'src/images/Icon-Administration.svg';
// import GITLogo from 'src/images/Icon-Github.svg';
// import YAMLogo from 'src/images/Icon-Yammer.svg';
// import CONFLogo from 'src/images/Icon-Confluence.svg';

export const Sidebar = ()=>{
    
    // const menuArray = [
    //   {name: "PRODUCTS & SERVICES",imgName:{PNSLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "DASHBOARD",imgName:{DASHLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "SUBSCRIPTIONS",imgName:{SUBSLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "ANNOUNCEMENTS & EVENTS",imgName:{ANELogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "ENGAGEMENT REQUESTS",imgName:{ERLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "SUPPORT",imgName:{SUPPORTLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "PREFERENCES",imgName:{PREFLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    //   {name: "ADMINISTRATION",imgName:{ADMINLogo}, menuClassName:"list-group-item list-group-item-action bg-light", link:"#"},
    // ]

    
  // const returnMenu =  menuArray.map((menu, index)=>{
  //     console.log("MenuName: ",menu.name,"  Index: ",index);
  //     <SidebarMenu menu={menu} key={index.toString()}/>
  // });
  
  // console.log(returnMenu)

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
              <div className="sidebar-heading p-2">
                      <div className="d-flex flex-row">
                      <span className="mt-4 ml-1"><img className="img-fluid" alt="" src='src/images/Logo-GE.svg'/></span>                
                      <div className="portal-name p-2 mt-3 ml-2">
                        <div className="my-1 text-sm-left border-bottom" style={{fontSize: "1.8vw"}}><b>DIGITAL CONNECT</b></div>
                        <div className="text-center mt-1" style={{fontSize: "0.8vw"}}><b>User | GE Corporate</b></div>
                        </div>                      
                      </div>              
              </div>
              <div className="list-group list-group-flush pt-4 px-2 pb-2 pl-4">
              {/* <SidebarMenu menuList={menuArray} /> */}
                
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Products.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">PRODUCTS & SERVICES</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Dashboard.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">DASHBOARD</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Subscriptions.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">SUBSCRIPTIONS</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Announcements-Events.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">ANNOUNCEMENTS & EVENTS</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Engagement-Requests.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">ENGAGEMENT REQUESTS</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Support.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">SUPPORT</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Settings.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">PREFERENCES</a>
                </span>
                <span className="sidebarMenu" >
                  <img alt="" src='src/images/Icon-Administration.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">ADMINISTRATION</a>
                </span>
                             
              </div>
              <footer>
                <div className="social-media text-center page-footer">
                  <div className="social-tag">SOCIALIZE WITH US</div>
                  <img alt="" className="px-2" src='src/images/Icon-Github.svg'/>
                  <img alt="" className="px-2" src='src/images/Icon-Yammer.svg'/>
                  <img alt="" className="px-2" src='src/images/Icon-Confluence.svg'/>
                </div>
                <div className="footer-copyright text-center text-white"><small>© DIGITAL CONNECT 2021 | COPYRIGHTS RESERVED</small></div>
              </footer>
            </div>
    )
}