import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Derive from '../state/derive'
import Action from '../state/actions'

// -----------------------------------------------------------------------------
// Components

function Todo({ todo, onToggle, onDelete }) {
   return (
      <li className='Todo'>
         {todo.task} {todo.done ?  ' (done) ' : null}
         <button type="button" onClick={onToggle(todo.id)}>Toggle</button>
         <button type="button" onClick={onDelete(todo.id)}>Delete</button>
      </li>
   )
}

function Todos({ todos, onToggle, onDelete }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} onToggle={onToggle} onDelete={onDelete} key={index} />) }
      </ul>
   )
}

// -----------------------------------------------------------------------------
// React Typing

Todo.PropTypes = {
   todo    : PropTypes.object.isRequired,
   onClick : PropTypes.func.isRequired,
}

Todos.PropTypes = {
   todos   : PropTypes.array.isRequired,
   onClick : PropTypes.func.isRequired,
}

// -----------------------------------------------------------------------------
// Connection

const mapState = (state) => ({
   todos : Derive.todoVisibility(state.todos, state.view),
   view  : state.view,
})

const mapDispatch = (dispatch) => ({
   onToggle: (id) => () => dispatch(Action.todoToggle(id)),
   onDelete: (id) => () => dispatch(Action.todoDelete(id)),
})

const Connected = connect(mapState, mapDispatch)(Todos)

export default Connected