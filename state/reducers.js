import T from './types'
import { combineReducers } from 'redux'

function viewReducer(state = T.VIEW_CURRENT, action) {
   switch (action.type) {
      case T.VIEW_CURRENT : return T.VIEW_CURRENT
      case T.VIEW_DONE    : return T.VIEW_DONE
      default             : return state
   }
}

function todoToggle(todo) {
   return Object.assign(
      Object.create(null),
      todo,
      { done: todo.done === true ? false : true },
   )
}

function todosReducer(state = [], action) {
   switch (action.type) {
      case T.TODO_ADD    : return state.concat(action.data)
      case T.TODO_DELETE : return state.filter(todo => todo.id !== action.data)
      case T.TODO_TOGGLE : return state.map(todo => action.data === todo.id ? todoToggle(todo) : todo)
      default            : return state
   }
}

const reducers = combineReducers({
   view  : viewReducer,
   todos : todosReducer,
})

export default reducers