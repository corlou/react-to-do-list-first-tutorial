import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle = () => {
     if(this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
        }
     } else {
       return {
         textDecoration: 'none'
       }
     }
  }
  render() {
    return (
      
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title}</p>
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
export default Todoitem
