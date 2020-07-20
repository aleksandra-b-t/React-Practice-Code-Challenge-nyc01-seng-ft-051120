import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    allSushi: []
  }


  getSushi = () => {
    fetch(`http://localhost:3000/sushis`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({allSushi: data})
    })
    
  }

  // getFourElements = (data) => {
  //   let begin = 0
  //   for(let i = begin; i => begin && i < begin + 4; i++){
  //       showSushi = data[i]

  //   }

  //}


  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.state.allSushi.map(sushi => 
          <Sushi 
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          price={sushi.price}
          img_url={sushi.img_url}
          />
          )}
          <MoreButton getSushi={this.getSushi} allSushi={this.state.allSushi.slice(0, 4)} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer