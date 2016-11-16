import React, { Component } from 'react';

class Plot3Screen extends Component {

  render() {
    return (
     <div style={{'marginLeft':'20px'}}>
      <h3>Citations</h3>
      <img src={'./plots/citation_dist.png'} width='40%' height ='40%'/>
      <img src={'./plots/citations_vs_pubs.png'} width='40%' height ='40%'/>
     </div>
    );
  }
}

export default Plot3Screen