import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Derive from '../state/derive'
import Todo   from './Todo'

// -----------------------------------------------------------------------------
// Component

const Todos = ({ todos }) => (
   <ul id='Todos'>
      { todos.map((todo, index) => <Todo todo={todo} key={index} />) }
   </ul>
)

// -----------------------------------------------------------------------------
// Type

Todos.PropTypes = {
   todos: PropTypes.array.isRequired,
}

// -----------------------------------------------------------------------------
// Connection

const mapState = ({ todos, view}) => ({
   todos: Derive.todoVisibility(todos, view),
})

const Connected = connect(mapState)(Todos)

export default Connected