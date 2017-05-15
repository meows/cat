import T from './types'

// -----------------------------------------------------------------------------
// Derived

const visible = function(view_type, todos = []) {
   switch (view_type) {
      case T.VIEW_ALL     : return todos
      case T.VIEW_CURRENT : return todos.filter(todo => !todo.done)
      case T.VIEW_DONE    : return todos.filter(todo => todo.done)
      default             : return todos
   }
}

export {
   visible,
}