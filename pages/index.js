import React    from 'react'
import Form     from '../components/form'

import store    from '../state/store'
import A        from '../state/actions'
import T        from '../state/types'
import dispatch from '../state/dispatcher'

/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

dispatch(A.addTodo('buy milk'))
dispatch(A.addTodo('do homework'))
dispatch({ type: T.TODO_ADD, data: { task: 'feed dog', id: 13131322, done: true }})
dispatch({ type: T.TODO_ADD, data: { task: 'buy book', id: 11111111, done: true }})

// -----------------------------------------------------------------------------
// Export

export default (state = store.getState()) => (
   <div id='App'>
      <Form todos={state.todos} view={state.view} />
   </div>
)