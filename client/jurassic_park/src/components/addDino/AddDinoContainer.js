import React, { Component } from 'react';
import NewDinoList from './AddDinoList';

class AddDinoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <NewDinoList newDinos={this.props.newDinos}/>
     );
  }
}
 
export default AddDinoContainer;