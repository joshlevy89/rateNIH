import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
var Modal = require('react-modal');

import { save_post } from '../actions';
import { defaultImage } from './helpers/defaultImage.js';
require('../../styles/AddImageModal.scss');
 
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

var ImageAdder = React.createClass({
 
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
    //this.refs.subtitle.style.color = '#f00';
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
    const { dispatch } = this.props;
    return (
      <div>

        <div className = "addImageActionPanel">
          <Button bsStyle = "primary"
                  onClick={this.openModal}>Add Image
          </Button>
          <div>Add a nature image</div>
        </div>

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

      </div>
    );
  }
});
 
export default connect()(ImageAdder);



