import './singlepost.scss'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='wrapper'>
            <img src='/assets/post.png' alt=''/>
            <h1>Lorem ipsum dolor
              <div className='singlePostEdit'>
                <i className="icon edit fa-solid fa-thermometer"></i>
                <i className="icon delete fa-solid fa-trash-can"></i>
              </div>
            </h1>

            <div className='singlePostInfo'>
              <span>Author: <b>Spython</b></span>
              <span className='date'>1 day ago</span>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis ullam omnis error provident soluta ratione 
              alias itaque nulla quo. Sint ipsam impedit non doloribus! Aspernatur magni consequatur rem eum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum repellendus fuga tempora voluptates, aperiam reprehenderit repudiandae 
              illo minus dicta dolore voluptas commodi illum obcaecati? Omnis aut consequuntur facere fuga!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas magnam non ab ipsam corporis, quos expedita dolore officiis, 
              consequatur sunt ipsum laudantium voluptate, quisquam deserunt laborum reiciendis aspernatur possimus.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi vero eius adipisci provident excepturi eaque temporibus, 
              soluta, voluptatem enim fugiat obcaecati sed. Atque voluptas aspernatur molestiae libero autem vitae?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores earum natus 
              dolorum dolore vitae ipsa quidem exercitationem 
              ea non provident laborum, aliquam facere voluptatum. Quaerat corporis blanditiis harum delectus.
            </p>
        </div>
    </div>
  )
}
