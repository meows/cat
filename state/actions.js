import T from './types'

// -----------------------------------------------------------------------------
// Action Creators

class Actions {
   static addTodo = (task) => ({
      type: T.TODO_ADD,
      data: {
         task : task,
         id   : new Date().getTime(),
         done : false,
      },
   })

   static deleteTodo = (id) => ({
      type: T.TODO_DELETE,
      data: id,
   })

   static toggleTodo = (id) => ({
      type: T.TODO_TOGGLE,
      data: id,
   })

   static goSee = (view) => {
      switch (view) {
         case T.VIEW_CURRENT:
            return {
               type: T.VIEW_CURRENT,
               data: null,
            }
         case T.VIEW_DONE:
            return {
               type: T.VIEW_DONE,
               data: null,
            }
         default:
            throw new TypeError(`goSee() received: ${view}`)
      }
   }
}

export default Actions
