import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle = () => {
     return {
       background: '#f4f4f4',
       padding: '10px',
       borderBottom: '1px #ccc dotted',
       textDecoration: this.props.todo.completed ? 'line-through' : 'none'
     }
  }


  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}
//In-line styling needs double curly braces and camel case, no hyphens
/*If I need more styling options, to use it here
const itemStyle = {
  backgroundColor:'#f4f4f4',
  fontSize: '18px' 
}
*/
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}
export default Todoitem
