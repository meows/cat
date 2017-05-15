import React    from 'react'
import Form     from '../components/form'

import store    from '../state/store'
import Action   from '../state/actions'
import dispatch from '../state/dispatcher'

/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

dispatch(Action.addTodo('buy milk'))
dispatch(Action.addTodo('do homework'))
dispatch({
   data: {
      task: 'feed dog',
      id: 13131322,
      done: true,
   },
   type: "TODO_ADD",
})

// -----------------------------------------------------------------------------
// Export

export default (state = store.getState()) => (
   <div id='App'>
      <Form todos={state.todos} view={state.view} />
   </div>
)