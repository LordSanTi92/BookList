import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './toolbar.jsx';
import Table from './table.jsx';
require("../scss/style.scss");
document.addEventListener("DOMContentLoaded",()=>{
let headers = ["Title","Author","Language","First Published","Sales"];
let data = [["Don Quixote","Miguel de Cervantes","Spanish","1605","500 million"],
            ["A Tale of Two Cities","Charles Dickens","English","1859","200 million"],
            ["The Lord of the Rings","J. R. R. Tolkien","English","1954–1955","150 million"],
            ["Harry Potter and the Philosopher's Stone","J. K. Rowling","English","1997","107 million"],
            ["Le Petit Prince",	"Antoine de Saint-Exupéry","French","1943","140 million"],
            ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"]
          ]

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isClicked:false
    }
  }
  toggleSearch = status =>{
    if(status){
      this.setState({
        isClicked: false
      })
    }
    else{
      this.setState({
        isClicked: true
      })
    }
    console.log(this.state.isClicked);
  }
  render(){
    return <div>
              <Toolbar checkStatus={this.toggleSearch}  />
              <Table status={this.state.isClicked} header={this.props.header} data={this.props.data}/>
            </div>
  }
}
ReactDOM.render(
    <App header={headers} data={data}/>,
  document.getElementById("app")
)


















})
