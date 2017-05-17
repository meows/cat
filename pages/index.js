import React    from 'react'
import RootView from '../components/RootView'

import store    from '../state/store'
import A        from '../state/actions'


/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

console.log(`state initial :: `, store.getState())

// -----------------------------------------------------------------------------
// Export

export default RootView