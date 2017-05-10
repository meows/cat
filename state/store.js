import { createStore } from 'redux'
import reducers        from './reducers'
import observer        from './observer'

const store = createStore(reducers)
store.subscribe(observer)

export default store