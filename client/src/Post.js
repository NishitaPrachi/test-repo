import img from './images/img1.jpeg'

import {format} from 'date-fns'
import {Link} from 'react-router-dom'
import flower from '../src/images/aroma.png'
export default function Post({_id,title,summary,cover,content,createdAt,author}){
    return(
      <div className='post'>
      <div className="image">
        <Link to={`/post/${_id}`}>
        <img src={'http://localhost:4000/'+cover} alt="" />
        </Link>
      
      </div>
      <div className="texts cursive">
      <Link to={`/post/${_id}`}>
      <h2>{title}</h2> 
      </Link>
      <p className="info">
      <img src={flower} alt=""  width={30} height={30}/>
       <a className="author" >
       
        {author.username}</a>
       <time > {format(new Date(createdAt),'MMM d,yyyy HH:mm')}</time>
      </p>
      <p className='summary '>{summary} </p>
      </div>
    </div>
    )
}