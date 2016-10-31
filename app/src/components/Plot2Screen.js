import React, { Component } from 'react';

class Plot2Screen extends Component {

  render() {
    return (
     <div style={{'marginLeft':'20px'}}>
      <h3>Weight Distributions</h3>
      <img src={'./plots/weightDist.jpg'}/>
      <p style={{'marginRight':'100px'}}>
      Patient weight distributions for drug generics in the 
      open.fda.gov database with the lowest weight variability (sorted
      from low to high on y-axis).
      Low weight variability may implicate weight as a risk factor
      in taking a particular mediation. Denosumab (an osteoporosis
      medication), for instance, is associated with high rates of adverse
      events in low-weight patients (40-50kg).  It should be noted that
      this data is correlational and more data would be needed to make
      stronger claims. 
      </p>
     </div>
    );
  }
}

export default Plot2Screen