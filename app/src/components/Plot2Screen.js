import React, { Component } from 'react';

class Plot2Screen extends Component {

  render() {
    return (
     <div style={{'marginLeft':'20px'}}>
      <h3>Publications</h3>
      <img src={'./plots/R01_pub_dist.png'} width='40%' height ='40%'/>
      <img src={'./plots/R01_cost_per_pub.png'} width='40%' height ='40%'/>
      <img src={'./plots/pubs_vs_cost.png'} width='40%' height ='40%'/>
     </div>
    );
  }
}

export default Plot2Screen