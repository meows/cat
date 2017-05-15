import React from 'react'
import Derive from '../state/derive'
import A from '../state/actions'
import dispatch from '../state/dispatcher'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo }) {
   return (
      <li className='Todo'>
         {todo.task} {todo.done ?  '-- done' : null}
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