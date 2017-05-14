import { createStore } from 'redux'
import reducers        from './reducers'
import observer        from './observer'

// -----------------------------------------------------------------------------
// Store

const store = createStore(reducers)
store.subscribe(observer)

export default store