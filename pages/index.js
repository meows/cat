import React from 'react'
import store from '../state/store'
import Form  from '../components/form'

/* -----------------------
   Route : /
   Page  : index.js
   ----------------------- */

// -----------------------------------------------------------------------------
// Export

export default () => <Form todos={store.getState().todos} />