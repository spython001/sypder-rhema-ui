import Sidebar from '../../components/sidebar/Sidebar'
import './about.scss'

export default function About() {
  return (
    <div className='about'>
      <Sidebar/>
      
      <div className="wrapper">
        <div className="title">
          <span className='spanTitle'>SPYDER RHEMA</span>
        </div>
        
        <div className="spanContent">
            <span>
                See this as a working in progress
                though filled with imperfections would entertain you
            </span>
            <span>
                See this as a mini compendium of my thoughts
                to allow you transverse through some parts of my world ...
            </span>
        </div>
      </div>
    </div>
  )
}
