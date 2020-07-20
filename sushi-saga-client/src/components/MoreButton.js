import React from 'react'

class MoreButton extends React.Component{



  render(){

    console.log(this.props.allSushi.slice(0, 4))
      return <button onClick={this.props.allSushi}>
              More sushi!
            </button>
  }
}

export default MoreButton