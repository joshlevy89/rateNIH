import React from 'react';
import { connect } from 'react-redux';
import Post from './Post.js';
//import Button from 'react-bootstrap/lib/Button';


class Posts extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);
   } 
 
  render() {
    const { posts } = this.props;
    return (
      <div>
      {/* List of results */}
      {posts.map(post=>{
        return <span key={post}><Post post={post} /></span>
      })}
      </div>
    )
  }
}

export default Posts;



