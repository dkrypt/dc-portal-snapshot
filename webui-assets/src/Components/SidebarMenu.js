import React from 'react';
import MenuList from './MenuList'

export const SidebarMenu = ({menuList})=>{
    
    const menuStyle = { 
        marginLeft: "2rem",
        display: "inherit"
    }
    // const returnMenu =  menulist.map((menu, index)=>{
    //         <span className="sidebarMenu" style={menuStyle}>
    //         <img alt="" src={menu.imgName} key={index}/>
    //         <a href="#" key={index} className={menu.menuClassName}>{menu.name}</a>
    //         </span>
    // })
    const jsxMenu = menuList.map((menu,index)=>{
        console.log("MenuName: ",menu.name);
        return <MenuList key={index} menuobj={menu}/>
    })
    // return(
    //     <>
    //     </>
    // )
    // console.log(JSON.stringify(jsxMenu))
    
    return (
        <span className="sidebarMenu" style={menuStyle}>
        {jsxMenu}
        </span>
    )
}

// function MenuList(props){
//     console.log("Menu: ",props.menu.name)
//     return(
        
//     )
// }

