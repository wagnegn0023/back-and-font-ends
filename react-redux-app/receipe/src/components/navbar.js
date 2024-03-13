import { useState } from "react";
import Sidebar from "./sidebar";
import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false);
    const links=[
        {
            name:"Home",
            path:'/',
            icon:faHome
        },
        {
            name:"Recipes",
            path:'/recipes',
            icon:faList
        },
        {
            name:"Settings",
            path:'/settings',
            icon:faCog
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
        <div>
            <div className="navbar container">
            <a href="#" className="logo">F<span>oo</span>dHub</a>
            <div className="nav-links">
                {links.map(link=>(
                    <a href="#" key={link.name}>
                        {link.name}
                    </a>
                ))}
                {/* <a href="#">Home</a>
                <a href="#">Recipes</a>
                <a href="#">Settings</a> */}
            </div>
            <div onClick={()=>setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-button active" : "sidebar-button"}>
                <div className="sidebar"></div>
                <div className="sidebar"></div>
                <div className="sidebar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
        </div>
    )
}

export default Navbar;