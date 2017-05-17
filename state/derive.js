import T from './types'

// -----------------------------------------------------------------------------
// Derived

class Derive {
   static todoVisibility(todos = [], view = T.VIEW_CURRENT) {
      switch (view) {
         case T.VIEW_ALL     : return todos
         case T.VIEW_CURRENT : return todos.filter(todo => !todo.done)
         case T.VIEW_DONE    : return todos.filter(todo => todo.done)
         default             : new TypeError(`Derive.view() received wrong input: `, todos, view)
      }
   }
}

export default Derive