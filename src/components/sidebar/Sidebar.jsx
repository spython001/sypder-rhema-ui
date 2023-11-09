import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="wrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <i className="sidebarIcon fa-solid fa-shuttle-space"></i>
                  <span className='sidebarText'>Home</span>
                </li>

                <li className="sidebarListItem">
                  <i className="sidebarIcon fa-solid fa-satellite"></i>
                  <span className="sidebarText">About</span>
                </li>

                <li className="sidebarListItem">
                  <i className="sidebarIcon fa-solid fa-satellite-dish"></i>
                  <span className="sidebarText">Contact</span>
                </li>

                <li className="sidebarListItem">
                  <i className="sidebarIcon fa-solid fa-file-word"></i>
                  <span className="sidebarText">Write</span>
                </li>

                <div className="li sidebarListItem">
                  <i className="sidebarIcon fa-solid fa-meteor fa-beat"></i>
                  <span className="sidebarText">Light</span>
                </div>
            </ul>
        </div>
    </div>
  )
}
