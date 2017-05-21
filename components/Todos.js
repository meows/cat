import React     from 'react'
import PropTypes from 'prop-types'

import Derive   from '../state/derive'
import A        from '../state/actions'
import T        from '../state/types'
import Dispatch from '../state/dispatcher'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo: {task, id, done}}) {
   return (
      <li className='Todo'>
         {`${task} ${done ?  '-- done' : ''}`}
         <button type="button" onClick={Dispatch.todoToggle(id)}>Toggle</button>
         <button type="button" onClick={Dispatch.todoDelete(id)}>Delete</button>
      </li>
   )
}

// Todos :: ([]Todo, ViewType) -> JSX
function Todos({ todos, view }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} key={index} />) }
      </ul>
   )
}

const mapDerivedStateToProps = (state) => ({
   todos : Derive.todoVisibility(state.todos, state.view),
   view  : state.view,
})

const TodoList = connect(mapDerivedStateToProps)(Todos)

export default TodosList