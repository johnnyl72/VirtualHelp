import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chatAPI';

class ChatSpace extends Component {
  render(){
    const {feed, sendMessage} = this.props;
    return (
      <div class= "center mt-5 pt-5">
        <h5 class="text-center" > This is Arnold, he's ready when you are.</h5>
        <div class="chatBox" id="chatBox">
            {feed.map(entry => <p>{entry.text}</p>)}
        </div>
        <input class="w3-input" id="mesbox" type="text" placeholder="Send message" onKeyDown={ e=> e.keyCode === 13 ? sendMessage(e.target.value) : null }/>
      </div>
    );
  }


}

const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps, {
  sendMessage
})(ChatSpace);
