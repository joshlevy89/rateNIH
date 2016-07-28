import React from 'react';
import { connect } from 'react-redux';
//import AddImageModal from '../components/AddImageModal.js';
import Button from 'react-bootstrap/lib/Button';
//import { getPostsByUserId } from 'actions'
import Posts from '../components/Posts.js';
var Modal = require('react-modal');
require('../../styles/AddImageModal.scss');
import { save_post } from '../actions';
import { defaultImage } from './helpers/defaultImage.js';
 
 const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var MyWallScreen = React.createClass({
 
  getInitialState: function() {
    return { 
      modalIsOpen: false,
      imageUrl: "" 
    };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  afterOpenModal: function() {
    // references are now sync'd and can be accessed. 
    this.refs.subtitle.style.color = '#f00';
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  setUrl: function(e,val) 
  {
    if (e.keyCode === 13) 
        {
          this.setState({
            imageUrl: val
          });
        }
  },

  resetImageUrl: function()
  {
    this.setState({
      imageUrl: ""
    });
  },

  onError: function() {
    this.setState({
      imageUrl: defaultImage
    });
  },

 
  render: function() {
    const { userPosts, dispatch } = this.props;
    return (
      <div>
        <button onClick={this.openModal}>Add Image</button>

        {/* The meat of the modal. */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
 
        <div className="modalBox">
          <h2 className="modalBanner">Add an image link</h2>
          <input ref="urlInput" 
                className="modalInput"
                onKeyDown={e=>this.setUrl(e,this.refs.urlInput.value)}/>
          {this.state.imageUrl ?
            <img className="modalImage" 
                  src={this.state.imageUrl}
                  onError={() => this.onError()}/>
            :<div className="modalImage"></div>
          }
          <div>
            <Button className="modalButton" bsStyle = "success" 
                onClick = {() => {
                if (this.state.imageUrl==="") {
                  alert("Must enter an image link to post!");
                  return;
                }
                dispatch(save_post(0,this.state.imageUrl));
                this.closeModal();
                this.resetImageUrl();
                }}>
                Post
            </Button>
            <Button className="modalButton" bsStyle = "danger" 
                onClick = {() => {
                  this.closeModal();
                  this.resetImageUrl();
                }}>
                Cancel
            </Button>
          </div>
        </div>
        </Modal>


        <Posts posts={userPosts}/>
      </div>
    );
  }
});
 

function mapStateToProps(state, ownProps) {
  return {
    userPosts: state.posts[0]
  }
}


MyWallScreen = connect(mapStateToProps)(MyWallScreen);

export default MyWallScreen;



