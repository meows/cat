import React    from 'react'
import Form     from '../components/form'

import store    from '../state/store'

/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

// -----------------------------------------------------------------------------
// Export

export default (state = store.getState()) => {
   return (
      <div id='App'>
         <Form todos={state.todos} view={state.view} />
      </div>
   )
}