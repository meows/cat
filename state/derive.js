import T from './types'

// -----------------------------------------------------------------------------
// Derived

class Derive {
   static view(todos = [], view) {
      switch (view) {
         case T.VIEW_ALL     : return todos
         case T.VIEW_CURRENT : return todos.filter(todo => !todo.done)
         case T.VIEW_DONE    : return todos.filter(todo => todo.done)
         default             : throw new TypeError(`Derive.view() didn't receive expected string.`)
      }
   }
}

export default Derive