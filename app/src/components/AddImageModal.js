import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
const enhanceWithClickOutside = require('react-click-outside');
require('../../styles/AddImageModal.scss');
import { save_post } from '../actions'


class AddImageModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ""
    };
    this.setUrl = this.setUrl.bind(this);
  }

  setUrl(e,val) 
  {
    if (e.keyCode === 13) 
        {
          this.setState({
            imageUrl: val
          });
        }
  }

  render() {
    const { parentState, parentObj, dispatch } = this.props;
    if (parentState.isModalOn) {
      return(
        <div className="modalBox">

          <h2 className="modalBanner">Add an image link</h2>

          <input ref="urlInput" 
                className="modalInput"
                onKeyDown={e=>this.setUrl(e,this.refs.urlInput.value)}/>

          {this.state.imageUrl ?
            <img className="modalImage" src={this.state.imageUrl}/>
            :<div className="modalImage"></div>
          }

          <div>
            <Button className="modalButton" bsStyle = "success" onClick = {() => {
                        dispatch(save_post(0,this.state.imageUrl));
                        parentObj.turnModalOff();
                       }}>
            Post</Button>
            
            <Button className="modalButton" bsStyle = "danger" onClick = {() => parentObj.turnModalOff()}>
                Cancel</Button>
          </div>

        </div>
        )
    }
    else {
        return (<div></div>)
    }
}

  handleClickOutside() {
      var { parentState, parentObj} = this.props;
      parentObj.turnModalOff();
  }
}

AddImageModal = enhanceWithClickOutside(AddImageModal);
export default connect()(AddImageModal)


