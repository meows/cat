import store from './store'
import A     from './actions'

// -----------------------------------------------------------------------------
// Dispatchers

const dispatch = (action) => store.dispatch(action)

class Dispatchers {
   static todoAdd    = (task) => dispatch(A.addTodo(task))
   static todoToggle = (id)   => dispatch(A.toggleTodo(id))
   static todoDelete = (id)   => dispatch(A.toggleTodo(id))
   static clearDone  = ()     => dispatch(A.clearDone())
   static goSee      = (view) => dispatch(A.goSee(view))
}

export default dispatch