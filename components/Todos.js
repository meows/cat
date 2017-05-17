import React     from 'react'
import PropTypes from 'prop-types'

import Derive   from '../state/derive'
import A        from '../state/actions'
import T        from '../state/types'
import Dispatch from '../state/dispatcher'

// Todo :: (Todo, integer) -> JSX
function Todo({ todo: {task, id, done}}) {
   return (
      <li className='Todo'>
         {`${task} ${done ?  '-- done' : ''}`}
         <button type="button" onClick={() => Dispatch(A.toggleTodo(id))}>Toggle</button>
         <button type="button" onClick={() => Dispatch(A.deleteTodo(id))}>Delete</button>
      </li>
   )
}

// Todos :: ([]Todo, ViewType) -> JSX
function Todos({ todos, view }) {
   const derived = Derive.todoVisibility(todos, view)

   return (
      <ul id='Todos'>
         { derived.map((todo, index) => <Todo todo={todo} key={index} />) }
         {
            (view === T.VIEW_DONE && derived.length !== 0) ? (
               <button type="button" onClick={() => Dispatch(A.clearDone())}>Clear Done</button>
            ) : null
         }
      </ul>
   )
}

Todos.propTypes = {
   todos: PropTypes.array.isRequired,
   view: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
   todos: Derive.todoVisibility(state.todos, state.view),
})

const mapDispatchToProps = (dispatch) => ({
   todoToggle: (id) => dispatch({
      type: T.TODO_TOGGLE,
      data: id,
   })
})

export default Todos