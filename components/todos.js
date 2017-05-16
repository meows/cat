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

// Todos :: []Todo -> JSX
function Todos() {
   const { todos, view } = store.getState()
   const derived_todos  = Derive.view(todos, view)
   const is_todos_empty = derived_todos.length === 0
   const is_view_done   = view === T.VIEW_DONE

   return (
      <ul id='Todos'>
         { derived_todos.map((todo, index) => <Todo todo={todo} key={index} />) }
         {
            (is_view_done) && (!is_todos_empty) ? (
               <button type="button" onClick={() => dispatch(A.clearDone())}>Clear Done</button>
            ) : null
         }
      </ul>
   )
}

export default Todos