import Posts from '../../components/posts/Posts'
import QuotesPage from '../../components/qoutesPage/QuotesPage'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="wrapper">
        <div className="homeQuotes">
          <QuotesPage/>
        </div>
        
        <div className="homePosts">
          <Posts/>
        </div>
      </div>
    </div>
  )
}
