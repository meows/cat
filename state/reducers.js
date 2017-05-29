import T from './types'
import { combineReducers } from 'redux'

// -----------------------------------------------------------------------------
// View Reducer

function viewReducer(state = T.VIEW_CURRENT, action) {
   switch (action.type) {
      case T.VIEW_CURRENT : return T.VIEW_CURRENT
      case T.VIEW_DONE    : return T.VIEW_DONE
      case T.VIEW_ALL     : return T.VIEW_ALL
      default             : return state
   }
}

// -----------------------------------------------------------------------------
// Todos Reducer

const flipProperty = (property) => (object) => Object.assign(
   {},
   object,
   { [property]: !object[property] },
)

const todoToggle = flipProperty('done')

function todosReducer(state = [], action) {
   switch (action.type) {
      case T.TODO_ADD    : return state.concat(action.bookmark)
      case T.TODO_DELETE : return state.filter(todo => todo.id !== action.id)
      case T.TODO_TOGGLE : return state.map(todo => todo.id === action.id ? todoToggle(todo) : todo)
      case T.TODO_CLEAR  : return state.filter(todo => !todo.done)
      default            : return state
   }
}

// -----------------------------------------------------------------------------
// Export

const reducers = combineReducers({
   view  : viewReducer,
   todos : todosReducer,
})

export default reducers
