import React from 'react'

import Derive   from '../state/derive'
import A        from '../state/actions'
import dispatch from '../state/dispatcher'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo }) {
   const deleteTodo = (id) => dispatch(A.deleteTodo(id))

   return (
      <li className='Todo'>
         {todo.task} {todo.done ?  '-- done' : null}
         <button type="button" onClick={deleteTodo}>Delete</button>
      </li>
   )
}

// Todos :: []Todo -> JSX
function Todos({ todos, view }) {
   return (
      <ul id='Todos'>
         { Derive.view(todos, view).map((todo, index) => <Todo todo={todo} key={index} />) }
      </ul>
   )
}

export default Todos