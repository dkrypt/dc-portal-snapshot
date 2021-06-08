import React from 'react';

const MenuList = (props)=>{
    console.log("MenuList: ",props.menuobj.name)
    return (
        <React.Fragment>
          <img alt="" src={props.menuobj.imgName}/>
          <a href="#" className={props.menuobj.menuClassName}>{props.menuobj.name}</a>
         </React.Fragment>
    )
}

export default MenuList;