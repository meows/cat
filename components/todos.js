import React from 'react'

import Derive   from '../state/derive'
import A        from '../state/actions'
import T        from '../state/types'
import dispatch from '../state/dispatcher'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo:{task, id, done} }) {
   return (
      <li className='Todo'>
         {`${task} ${done ?  '-- done' : ''}`}
         <button type="button" onClick={() => dispatch(A.toggleTodo(id))}>Toggle</button>
         <button type="button" onClick={() => dispatch(A.deleteTodo(id))}>Delete</button>
      </li>
   )
}

// Todos :: []Todo -> JSX
function Todos({ todos, view }) {
   return (
      <ul id='Todos'>
         { Derive.view(todos, view).map((todo, index) => <Todo todo={todo} key={index} />) }
         {
            view !== T.VIEW_DONE ? null : (
               <button type="button" onClick={() => dispatch(A.clearDone())}>Clear Done</button>
            )
         }
      </ul>
   )
}

export default Todos