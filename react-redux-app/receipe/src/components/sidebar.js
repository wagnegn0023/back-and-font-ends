import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Sidebar({links, close}) {
    return(
        <div onClick={close} className="sidebar-list">
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
