import { createStore } from 'redux'
import reducers        from './reducers'
import observer        from './observer'

// -----------------------------------------------------------------------------
// Store

const store = createStore(reducers)

export default store