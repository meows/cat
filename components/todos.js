import React from 'react'

import Derive   from '../state/derive'
import A        from '../state/actions'
import T        from '../state/types'
import dispatch from '../state/dispatcher'
import store    from '../state/store'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo: {task, id, done}}) {
   return (
      <li className='Todo'>
         {`${task} ${done ?  '-- done' : ''}`}
         <button type="button" onClick={() => dispatch(A.toggleTodo(id))}>Toggle</button>
         <button type="button" onClick={() => dispatch(A.deleteTodo(id))}>Delete</button>
      </li>
   )
}

// Todos :: ([]Todo, ViewType) -> JSX
function Todos({ todos, view }) {
   const derived  = Derive.view(todos, view)
   return (
      <ul id='Todos'>
         { derived.map((todo, index) => <Todo todo={todo} key={index} />) }
         {
            (view === T.VIEW_DONE && derived.length !== 0) ? (
               <button type="button" onClick={() => dispatch(A.clearDone())}>Clear Done</button>
            ) : null
         }
      </ul>
   )
}

export default Todos