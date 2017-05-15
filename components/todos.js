import React from 'react'

import Derive   from '../state/derive'
import A        from '../state/actions'
import dispatch from '../state/dispatcher'

// Todo :: (Todo, integer) -> JSX

const deleteTodo = (id) => {
   console.log(`deleteTodo(id) received `, id)
   dispatch(A.deleteTodo(id))
}

function Todo({ todo }) {
   return (
      <li className='Todo'>
         {`${todo.task} ${todo.done ?  '-- done' : ''} ${todo.id}`}
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