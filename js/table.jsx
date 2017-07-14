import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: this.props.data,
      sortBy: null,
      descending: false,
      edit: null,
      inputVal:''
    }
  }
  sortContent = e =>{
    let column = e.target.cellIndex;
    let descending = this.state.sortBy === column && !this.state.descending;

    let newData = Array.from(this.state.data)
    newData.sort((a,b)=>{
      return descending
              ?(a[column] > b[column]? 1 :-1)
              :(a[column] < b[column]? 1 :-1)
    })
    this.setState({
      data: newData,
      sortBy: column,
      descending: descending,
    })
  }
  showEditor = e =>{
    this.setState({
      edit:{
        row: parseInt(e.target.dataset.row,10),
        cell: e.target.cellIndex
      }
    })
  }
  save = e =>{
    e.preventDefault();
    let input = e.target.firstChild;
    let newData = Array.from(this.state.data);
    newData[this.state.edit.row][this.state.edit.cell] = input.value;
    this.setState({
      data: newData,
      edit: null
    })
  }
  render(){
    return <div>
            <table>
              <thead onClick={this.sortContent}>
                <tr>
                  {this.props.header.map((elem,index)=>{
                    if(this.state.sortBy === index){
                      elem+=this.state.descending?' \u2191' : ' \u2193'
                    }
                      return <th key={index}>{elem}</th>
                  })}
                </tr>
              </thead>
              <tbody onDoubleClick={this.showEditor}>
                 <tr>{this.props.status ? this.props.header.map((ignore,index)=>{
                  return <td key={index}><input type="text" data-index={index}/>
                          </td>
                })
                : null
              }</tr>
                  {this.state.data.map((row,rowIndex)=>{
                    return (
                      <tr key={rowIndex}>{row.map((elem,cellIndex)=>{
                          let content = elem;
                          let edit= this.state.edit;
                          if(edit && edit.row === rowIndex && edit.cell === cellIndex){
                            content = <form onSubmit={this.save}>
                                        <input type="text" defaultValue={elem}/>
                                      </form>
                          }
                       return<td key={cellIndex} data-row={rowIndex}>{content}</td>
                   })}</tr>)
                })}
              </tbody>
          </table>
        </div>
  }
}

export default Table
