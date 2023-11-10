import Posts from '../../components/posts/Posts'
import QuotesPage from '../../components/qoutesPage/QuotesPage'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
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
