import React, { Component } from 'react';

class Plot1Screen extends Component {

  render() {
    return (
     <div style={{'marginLeft':'20px'}}>
      <h3>Adjusted Gender Ratio</h3>
      <img src={'./plots/genderRatio.jpg'}/>
      <p style={{'marginRight':'100px'}}>
      Drug generics in the open.fda.gov database with
      the largest disparity of impact on men and women (as measured by
      the ratio of adverse event counts in men to women, adjusted for 
      overall base rates). Adjusted ratios farther from one indicate greater
      gender disparity.  Ratios above one indicate higher impact on men,
      and ratios below one indicate higher impact on women.  It is not surprising 
      that some highly-gendered drugs, like Levonogestrel (a pregnancy medication), 
      have ratios far from one.  It is interesting, however, that other drugs like
      clopidogrel bisulfate (a platelet aggregation medication) show large disparities.
      This may point to increased risk based on gender for certain drugs. 
      </p>
     </div>
    );
  }
}

export default Plot1Screen