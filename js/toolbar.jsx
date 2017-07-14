import React from 'react';
import ReactDOM from 'react-dom';

class Toolbar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      status: false
    }
  }
  checkStatus = () =>{
    if(this.state.status){
      this.setState({
        status: false
      })
    }
    else{
      this.setState({
        status: true
      })
    }
    if(typeof this.props.checkStatus === "function"){
      this.props.checkStatus(this.state.status)
    }
  }
  render(){
    return <button onClick={this.checkStatus} className="toolbar">Search</button>
  }
}

export default Toolbar
