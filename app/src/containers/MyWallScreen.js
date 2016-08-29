import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { get_posts_by_user_id, delete_post } from '../actions'
import Button from 'react-bootstrap/lib/Button';
require('../../styles/MyWallScreen.scss');

import ImageAdder from '../components/ImageAdder.js';

var masonryOptions = {
    transitionDuration: 0
};

var MyWallScreen = React.createClass({

    componentDidMount: function() {
        const {dispatch} = this.props
        dispatch(get_posts_by_user_id(0));
    },

    render: function () {
        const { userPosts, dispatch } = this.props;
        if (userPosts == null) return (<div></div>)
        var childElements = userPosts.map(function(imageUrl,index){
           return (
                <li key={index} className="post-container">
                    <img className = "image" src={imageUrl}/>
                    <div>
                        <Button bsStyle="danger"
                                onClick = {() => dispatch(delete_post(0, imageUrl))}>
                            Delete
                        </Button>
                    </div>
                </li>
            );
        });

        return (
            <span>
            <ImageAdder />
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

function mapStateToProps(state) {
  return {
    userPosts: state.posts[0]
  }
}

export default connect(mapStateToProps)(MyWallScreen);




