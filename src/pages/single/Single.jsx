import './single.scss'
import SinglePost from '../../components/singlepost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Single() {
  return (
    <div className='single'>
        <Sidebar/>
        <SinglePost/>
    </div>
  )
}
