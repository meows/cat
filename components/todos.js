import React from 'react'
import Derive from '../state/derived'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo }) {
   return (
      <li className='Todo'>
         {todo.task}
         {todo.done}
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