import T from './types'

// -----------------------------------------------------------------------------
// Action Creators

class Actions {
   static todoAdd = (task) => ({
      type: T.TODO_ADD,
      data: {
         task : task,
         id   : new Date().getTime(),
         done : false,
      },
   })

   static todoDelete = (id) => ({
      type: T.TODO_DELETE,
      data: id,
   })

   static todoToggle = (id) => ({
      type: T.TODO_TOGGLE,
      data: id,
   })

   static todoClear = () => ({
      type: T.TODO_CLEAR,
      data: null,
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
         case T.VIEW_ALL:
            return {
               type: T.VIEW_ALL,
               data: null,
            }
         default:
            throw new TypeError(`goSee() received: ${view}`)
      }
   }
}

export default Actions
