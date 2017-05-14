import T from './types'

// -----------------------------------------------------------------------------
// Derived

const visibility = function(view_type, state) {
   switch (view_type) {
      case T.VIEW_ALL     : return state
      case T.VIEW_CURRENT : return state.filter(todo => !todo.done)
      case T.VIEW_DONE    : return state.filter(todo => todo.done)
   }
}

export {
   visibility,
}