import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  render() {
    return (
      //In-line styling needs double curly braces and camel case, no hyphens
      <div style={{backgroundColor:'#f4f4f4'}}>
        <p>{ this.props.todo.title}</p>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todoitem
