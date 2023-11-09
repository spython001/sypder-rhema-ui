import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="wrapper">
            <ul className="sidebarList">
                <li>
                  <i className="sidebarIcon fa-solid fa-shuttle-space"></i>
                  <span className='sidebarText'>Home</span>
                </li>

                <li>
                  <i className="sidebarIcon fa-solid fa-satellite"></i>
                  <span className="sidebarText">About</span>
                </li>

                <li>
                  <i className="sidebarIcon fa-solid fa-satellite-dish"></i>
                  <span className="sidebarText contact">Contact</span>
                </li>

                <li>
                  <i className="sidebarIcon fa-solid fa-file-word"></i>
                  <span className="sidebarText">Write</span>
                </li>

                <li className='lastChild'>
                  <i className="sidebarIcon fa-solid fa-meteor fa-beat"></i>
                  <span className="sidebarText">Light</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
