import React from 'react';

// import globalIcon from 'src/images/Logo-Dropdown-Circle.svg';
// import searchIcon from '.src/images/Logo-Search.svg';

export const CenterHeader = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">

        {/* <div className="dashboard-header">
          DASHBOARD
            <span className="global-icon ml-1">GLOBAL<img alt="" src='src/images/Logo-Dropdown-Circle.svg' /></span>
        </div> */}
        <div className="col-sm"></div>
        <div className="search-bar">
          <form id="search-form">
            <div className="search">
              <input type="text" name="search" className="round" placeholder="search" />
              <input type="submit" className="corner" value=""/>                                    
            </div>
          </form>
        </div>
      </nav>
    )
}