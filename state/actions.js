import T from './types'

// -----------------------------------------------------------------------------
// Action Creators

class Actions {
   static todoAdd = (task) => ({
      type: T.TODO_ADD,
      todo: {
         task : task,
         id   : new Date().getTime(),
         done : false,
      },
   })

   static todoDelete = (id) => ({
      type: T.TODO_DELETE,
      id,
   })

   static todoToggle = (id) => ({
      type: T.TODO_TOGGLE,
      id,
   })

   static todoClear = () => ({ type: T.TODO_CLEAR })

   static goSee = (view) => {
      switch (view) {
         case T.VIEW_CURRENT : return { type: T.VIEW_CURRENT }
         case T.VIEW_DONE    : return { type: T.VIEW_DONE }
         case T.VIEW_ALL     : return { type: T.VIEW_ALL }
         default             : throw new TypeError(`goSee() received: ${view}`)
      }
   }
}

export default Actions
