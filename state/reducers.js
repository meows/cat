import T from './types'
import { combineReducers } from 'redux'

// -----------------------------------------------------------------------------
// Reducers

function viewReducer(state = T.VIEW_CURRENT, action) {
   switch (action.type) {
      case T.VIEW_CURRENT : return T.VIEW_CURRENT
      case T.VIEW_DONE    : return T.VIEW_DONE
      case T.VIEW_ALL     : return T.VIEW_ALL
      default             : return state
   }
}

const flipProperty = (property) => (object) => Object.assign(
   {},
   object,
   { [property]: !object[property] },
)

const todoToggle = flipProperty('done')

function todosReducer(state = [], action) {
   switch (action.type) {
      case T.TODO_ADD    : return state.concat(action.data)
      case T.TODO_DELETE : return state.filter(todo => todo.id !== action.data)
      case T.TODO_TOGGLE : return state.map(todo => action.data === todo.id ? todoToggle(todo) : todo)
      case T.TODO_CLEAR  : return state.filter(todo => !todo.done)
      default            : return state
   }
}

const reducers = combineReducers({
   view  : viewReducer,
   todos : todosReducer,
})

export default reducers
