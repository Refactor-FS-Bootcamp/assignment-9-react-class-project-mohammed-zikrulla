import React, { Component } from 'react'
import PostItem from './PostItem'
import "./Display.css"

export class Display extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    async componentDidMount(){
      const url="https://fakestoreapi.com/products"
      const res= await fetch(url)
      const data= await res.json()
      this.setState({posts:data})


    }

  render() {

    const{posts} = this.state;
    return (
      
      <div className='parent_container'>{posts.map(post=><PostItem key={post.id} post={post} />)}</div>
    )
  }
}

export default Display