type TODO_ADD     = 'TODO_ADD'
type TODO_DELETE  = 'TODO_DELETE'
type TODO_TOGGLE  = 'TODO_TOGGLE'   // toggle done :: true <=> false

type VIEW_CURRENT = 'VIEW_CURRENT'
type VIEW_DONE    = 'VIEW_DONE'

type ERROR = 'ERROR'

type ViewTypes = VIEW_CURRENT | VIEW_DONE
type TodoTypes = TODO_ADD | TODO_DELETE | TODO_TOGGLE
type AllType = ViewTypes | TodoTypes | ERROR

interface Todo {
   task : string,
   id   : number,
   done : boolean,
}

interface Props {
   todos: Todo[]
}

interface AppStore {
   view  : VIEW_CURRENT | VIEW_DONE,
   todos : Todo[],
}


// // -----------------------------------------------------------------------------
// // Actions

interface Action {
   type  : AllType,
   data? : any,
}

interface ViewAction {
   type : VIEW_CURRENT | VIEW_DONE,
   data : null,
}

interface TodoAction {
   type : TODO_ADD | TODO_DELETE | TODO_TOGGLE,
   data : Todo | number,
}

interface TodoAdd {
   type: TODO_ADD,
   data: Todo,
}

interface TodoDelete {
   type: TODO_DELETE,
   data: number,
}

interface TodoToggle {
   type: TODO_TOGGLE,
   data: number,
}