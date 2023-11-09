import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <i className="sidebarIcon fa-duotone fa-shuttle-space"></i>
                  <span className='sidebarText'>Home</span>
                </li>

                <li className="sidebarListItem">
                  <i className="sidebarIcon fa-duotone fa-satellite"></i>
                </li>
            </ul>
        </div>
    </div>
  )
}
