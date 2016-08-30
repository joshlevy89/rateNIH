import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { get_posts_by_user_id, delete_post } from '../actions'
import Button from 'react-bootstrap/lib/Button';
require('../../styles/WallScreen.scss');
require('../../styles/index.scss')

import ImageAdder from '../components/ImageAdder.js';

var masonryOptions = {
    transitionDuration: 0
};

var WallScreen = React.createClass({

    componentDidMount: function() {
        const {dispatch} = this.props
                const urlUsername = this.props.params.user
        dispatch(get_posts_by_user_id(urlUsername));
    },

    render: function () {
        const { userPosts, dispatch, user_name } = this.props;

        const urlUsername = this.props.params.user

        if (urlUsername === 'undefined') {
            return (<div className="textLayout">Search for other walls or sign in to view your wall.</div>)
        }
        if (userPosts === undefined || userPosts.length === 0) {
            var childElements = (<div className="textLayout">No posts here yet.</div>)
        }
        else {
        var childElements = userPosts.map(function(imageUrl,index){
           return (
                <li key={index} className="post-container">
                    <img className = "image" src={imageUrl}/>
                    {user_name === urlUsername ? 
                    <div>
                        <Button bsStyle="danger"
                                onClick = {() => dispatch(delete_post(user_name, imageUrl))}>
                            Delete
                        </Button>
                    </div>
                    :null}
                </li>
            );
        })};

        return (
            <span>
            {user_name===urlUsername ? 
                <ImageAdder user_name = {user_name}/>:null}
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
            </span>
        );
    }
});

function mapStateToProps(state, ownProps) {
  const urlUsername = ownProps.params.user
  console.log(state.posts[urlUsername]);
  if (urlUsername === undefined) {
    return { 
        userPosts: [],
        user_name: undefined 
    }
    }
  else {
    return { 
        userPosts: state.posts[urlUsername],
        user_name: state.user_info.user_name 
    }
   }
}

export default connect(mapStateToProps)(WallScreen);




