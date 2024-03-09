import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Sidebar({links}) {
    return(
        <div className="sidebar-list">
            {links.map(link=>(
                <a href="#" className='sidebar-link' key={links.name}>
                    <FontAwesomeIcon icon={link.icon}/>
                    {link.name}
                    </a>
            ))}
        </div>
    )
}
export default  Sidebar;



