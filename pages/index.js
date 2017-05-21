import React from 'react'
import App   from '../components/App'

import store from '../state/store'
import A     from '../state/actions'


/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

console.log(`state initial :: `, store.getState())

// -----------------------------------------------------------------------------
// Export

export default () => (
   <div id='RootView'>
      <App />
   </div>
)