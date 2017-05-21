import React from 'react'
import { Provider } from 'react-redux'

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
   <Provider store={store}>
      <App />
   </Provider>
)