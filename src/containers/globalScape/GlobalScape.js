import React, { Fragment } from "react";

import EventList from "./EventManagement/EventList.js";
import DelegatePriToSso from "./DelegatePriToSso.js";
import RevokeSso from "./RevokeSso.js";
import EnableAccount from "./EnableAccount.js";
import ModifyEventNsg from "./ModifyEventNsg.js";

import Icon_TC from "../../assets/images/Icon-TC.png";

export default class GlobalScape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    }
  }

  updateStep(step){
    this.setState({currentStep:step})
  }

  render() {
    return (
      <Fragment>
        {this.state.currentStep === 0 && 
        (<div className="container-lg w-100 p-3 borderStyle mb-5">
          <div className="row mx-1">
            <div className="gs-tabs col-sm-4 m-1 borderStyle p-2">  
            <div className="service-tile-content" style={{}}>
              <img className="img-fluid col-sm-3" src={Icon_TC} alt="TC-Icon" style={{width: "87%"}} />
              
              <span className="titles" onClick={()=>this.updateStep(1)} >Event Management</span>    
              </div>        
            </div>
            <div className="gs-tabs col-sm-4 m-1 borderStyle p-2">  
            <div className="service-tile-content" style={{}}>
              <img className="img-fluid col-sm-3" src={Icon_TC} alt="TC-Icon" style={{width: "87%"}} />
                  
              <span className="titles" onClick={()=>this.updateStep(2)} >Delegate priviledges to SSO</span>           
            </div>   </div>   
            <div className="gs-tabs col-sm-4 m-1 borderStyle p-2">    
            <div className="service-tile-content" style={{}}>
              <img className="img-fluid col-sm-3" src={Icon_TC} alt="TC-Icon" style={{width: "87%"}} />
                    
              <span className="titles" onClick={()=>this.updateStep(3)} >Revoke SSO</span>           
            </div> </div> 
            <div className="gs-tabs col-sm-4 m-1 borderStyle p-2">     
            <div className="service-tile-content" style={{}}>
              <img className="img-fluid col-sm-3" src={Icon_TC} alt="TC-Icon" style={{width: "87%"}} />
                   
              <span className="titles" onClick={()=>this.updateStep(4)} >Enable Account /Disable Account</span>           
            </div></div>  
            <div className="gs-tabs col-sm-4 m-1 borderStyle p-2"> 
            <div className="service-tile-content" style={{}}>
              <img className="img-fluid col-sm-3" src={Icon_TC} alt="TC-Icon" style={{width: "87%"}} />
                      
              <span className="titles" onClick={()=>this.updateStep(5)} >Modify event for NSG</span>           
            </div>  </div> 
            
           </div>
        </div>)}
        {this.state.currentStep === 1 &&  
          (<EventList/>)
         } 
         {this.state.currentStep === 2 &&  
          (<DelegatePriToSso/>)
         } 
         {this.state.currentStep === 3 &&  
          (<RevokeSso/>)
         } 
         {this.state.currentStep === 4 &&  
          (<EnableAccount/>)
         }          
         {this.state.currentStep === 5 &&  
          (<ModifyEventNsg/>)
         }      


    
      </Fragment>
    );
  }
}
