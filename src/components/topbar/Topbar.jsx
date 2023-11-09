import './topbar.scss'
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topLeft"></div>
        
        <div className="topCenter">
            <img src="/assets/chryst.png" alt="head pic" />
        </div>
        
        <div className="topRight">
          <div className="profile">
            <i className="topIcon fa-solid fa-meteor fa-beat"></i>
            <div className="options">
                <span>Logout</span>
            </div>
          </div>

        </div>
    </div>
  )
}
