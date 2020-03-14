import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';

class App extends Component {
  render(){
    const {feed, sendMessage} = this.props;
    return (
      <div class="container">
        <h1>Welcome there!</h1>
        <u1>
          {feed.map(entry => <li>{entry.text}</li>)}
        </u1>
        <input type="text" onKeyDown={ e=> e.keyCode === 13 ? sendMessage(e.target.value) : null }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps, {
  sendMessage
})(App);
