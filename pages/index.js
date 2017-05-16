import React    from 'react'
import Form     from '../components/form'

import store    from '../state/store'
import A        from '../state/actions'


/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

console.log(`state initial :: `, store.getState())

// -----------------------------------------------------------------------------
// Export

export default () => {
   return (
      <div id='App'>
         <Form />
      </div>
   )
}