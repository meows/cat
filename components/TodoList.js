import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Derive   from '../state/derive'
import Dispatch from '../state/dispatcher'

function Todo({ todo, todoToggle }) {
   return (
      <li className='Todo'>
         {todo.task} {todo.done ?  ' (done)' : null}}
         <button type="button" onClick={() => todoToggle(todo.id)}>Toggle</button>
      </li>
   )
}

function Todos({ todos }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} key={index} />) }
      </ul>
   )
}

const mapState = (state) => ({
   todos : Derive.todoVisibility(state.todos, state.view),
   view  : state.view,
})

const mapDispatch = (dispatch) => ({
   todoToggle: Dispatch.todoToggle,
})

const TodoList = connect(mapState, mapDispatch)(Todos)

export default TodoList