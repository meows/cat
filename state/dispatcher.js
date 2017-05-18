import store from './store'
import A     from './actions'

// -----------------------------------------------------------------------------
// Dispatchers

const dispatch = (action) => store.dispatch(action)

class Dispatchers {
   static todoAdd    = (task) => dispatch(A.addTodo(task))
   static todoToggle = (id)   => dispatch(A.toggleTodo(id))
   static todoDelete = (id)   => dispatch(A.toggleTodo(id))
   static goSee      = (view) => dispatch(A.goSee(view))
   static clearDone  = ()     => dispatch(A.clearDone())
}

export default dispatch