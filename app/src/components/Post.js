import React from 'react';
//import Button from 'react-bootstrap/lib/Button';
require('../../styles/Post.scss');


class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);
   } 
 
  render() {
    const { post } = this.props;
    return (
      <span>
       <img className="postImage" src = {post} />
      </span>
    )
  }
}


export default Post;




