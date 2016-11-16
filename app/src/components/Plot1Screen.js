import React, { Component } from 'react';

class Plot1Screen extends Component {

  render() {
    return (
     <div style={{'marginLeft':'20px'}}>
      <h3>Grant types</h3>
      <img src={'./plots/grant_types.png'} width='40%' height ='40%'/>
      <img src={'./plots/R01_cost_dist.png'} width='40%' height ='40%'/>
     </div>
    );
  }
}

export default Plot1Screen