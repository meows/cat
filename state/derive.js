import T from './types'

// -----------------------------------------------------------------------------
// Derived

class Derive {
   static todoVisibility(todos = [], view = T.VIEW_CURRENT) {
      switch (view) {
         case T.VIEW_ALL     : return todos
         case T.VIEW_CURRENT : return todos.filter(todo => !todo.done)
         case T.VIEW_DONE    : return todos.filter(todo => todo.done)
         default             : new TypeError(`Derive.todos() received wrong input: `, todos, view)
      }
   }

   static footerVisibility(view) {
      switch (view) {
         case T.VIEW_ALL     : return 'all'
         case T.VIEW_CURRENT : return 'current'
         case T.VIEW_DONE    : return 'done'
         default             : new TypeError(`Derive.footer() received wrong input: `, view)
      }
   }

   static viewToText = {
      [T.VIEW_ALL]: 'all',
      [T.VIEW_CURRENT]: 'current',
      [T.VIEW_DONE]: 'done',
   }
}



export default Derive