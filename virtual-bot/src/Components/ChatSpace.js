import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chatAPI';
import "../chat.css"
class ChatSpace extends Component {
  render(){
    console.log(this.props)
    const {ourState, sendMessage} = this.props;
    return (
      <div class= "center mt-5 pt-5">
        <h5 class="text-center" > This is Arnold, he's ready when you are.</h5>
        <div class="chatBox" id="chatBox">
            {ourState.map(entry => <p>{entry.sender}: {entry.text}</p>)}
        </div>
        <input class="w3-input" id="mesbox" type="text" placeholder="Send message" onKeyDown={ e =>
          {
            if(e.keyCode === 13){
              return (
                sendMessage(e.target.value),
                e.target.value = "" //Empty textfield after pressing enter
              )
            }
            else
              return null
          }
        }
      />
      </div>
    );
  }


}

const mapStateToProps = state => ({
  ourState: state
});

export default connect(mapStateToProps,{sendMessage})(ChatSpace);
