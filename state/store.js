import { createStore } from 'redux'
import reducers        from './reducers'
import observer        from './observer'

// -----------------------------------------------------------------------------
// Store

const store = createStore(reducers)
store.subscribe(() => console.log(`Δstate :: `, store.getState()))

export default store