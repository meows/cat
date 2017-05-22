import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Derive   from '../state/derive'
import Dispatch from '../state/dispatcher'
import A from '../state/actions'
import T from '../state/types'

function Todo({ todo, onClick }) {
   return (
      <li className='Todo'>
         {todo.task} {todo.done ?  ' (done)' : null}
         <button type="button" onClick={() => onClick(todo.id)}>Toggle</button>
      </li>
   )
}

function Todos({ todos, onClick }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} onClick={onClick} key={index} />) }
      </ul>
   )
}

const mapState = (state) => ({
   todos : Derive.todoVisibility(state.todos, state.view),
   view  : state.view,
})

const mapDispatch = (dispatch) => ({
   onClick: (id) => dispatch(A.todoToggle(id)),
})

const TodoList = connect(mapState, mapDispatch)(Todos)

export default TodoList