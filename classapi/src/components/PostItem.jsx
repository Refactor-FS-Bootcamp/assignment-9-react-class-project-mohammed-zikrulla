import React from 'react'
import "./Postitem.css"

const PostItem = ({post}) => {
  return (
    <div className='container'>
        <img src={post.image} alt="images" />
        <h2>{post.title}</h2>
        <h3>${post.price}</h3>
        
    </div>
  )
}

export default PostItem