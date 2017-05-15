import React from 'react'
import { visible } from '../state/derived'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo }) {
   return (
      <li className='Todo'>{todo.task}</li>
   )
}

// Todos :: []Todo -> JSX
function Todos({ state }) {
   const { todos, view } = state
   console.log(`Todos are: `, todos)
   return (
      <ul id='Todos'>
         { visible(view, todos).map((todo, index) => <Todo todo={todo} key={index} />) }
      </ul>
   )
}

export default Todos