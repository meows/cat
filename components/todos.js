import React from 'react'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo, key }) {
   return (
      <ul id='Todo' key={key}>
         <li>{`task : ${todo.task}`}</li>
         <li>{`id   : ${todo.id  }`}</li>
         <li>{`done : ${todo.done}`}</li>
      </ul>
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