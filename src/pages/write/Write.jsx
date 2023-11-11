import './write.scss'
export default function Write() {
  return (
    <div className='write'>
        <img src="/assets/post.png" alt="" />

        <form>
            <div>
                <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id='fileInput' style={{display: 'none'}}/>
                <input type="text" className="writeInput" placeholder='Title' autoFocus={true}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell your story ...' type='text' autoFocus={true}></textarea>
            </div>

            <button type='submit'>
              <i className="button fa-solid fa-rocket fa-beat"></i>
            </button>
        </form>
    </div>
  )
}
