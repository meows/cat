import React from 'react'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo }) {
   return (
      <li className='Todo'>{todo.task}</li>
   )
}

// Todos :: []Todo -> JSX
function Todos({ todos }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} key={index} />) }
      </ul>
   )
}

export default Todos