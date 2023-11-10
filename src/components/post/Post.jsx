import './post.scss'

export default function Post() {
  return (
    <div className='post'>
        <img src="/assets/post.png" alt="" />

        <div className="postInfo">
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero deserunt accusamus dignissimos, reiciendis recusandae dolorem eius possimus? 
            Dicta, est. Sapiente, suscipit animi? 
            Adipisci eveniet soluta minima odio commodi possimus eaque?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Laboriosam sapiente voluptatum atque delectus est magni sit natus non deleniti rem, 
            officiis porro doloribus tenetur exercitationem ullam recusandae labore saepe. Fuga.
        </p>
    </div>
  )
}
