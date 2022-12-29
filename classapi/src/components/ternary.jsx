import React, { Component } from 'react'

export class Ternary extends Component {

     constructor(props) {
       super(props)
     
       this.state = {
          isLoggenIn:true
       }
     }

  render() {
    return this.state.isLoggenIn && <h1>Welcome Bala</h1> 
}
}

export default Ternary