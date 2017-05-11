import React from 'react'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo, key, fn }) {
   return (
      <li class='Todo' key={key} onClick={fn}>{todo}</li>
   )
}

// Todos :: []Todo -> JSX
function Todos({ todos }) {
   return (
      <section id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} key={index} />) }
      </section>
   )
}

export default Todos