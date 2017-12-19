import React, {Component} from 'react';

class ContentBody extends Component {

  render(){
    return(
      <div
        class='content-body'>
        <form>
          Username: <input type='text'/><br/>
          Password: <input type='text'/><br/>
        </form>
      </div>
    )
  }
}

export default ContentBody;
