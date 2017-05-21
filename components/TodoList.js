import React     from 'react'
import PropTypes from 'prop-types'

import Derive   from '../state/derive'
import A        from '../state/actions'
import T        from '../state/types'
import Dispatch from '../state/dispatcher'

function Todo({ todo }) {
   const { task, id, done } = todo

   return (
      <li className='Todo'>
         {`${task} ${done ?  '-- done' : ''}`}
         <button type="button" onClick={Dispatch.todoToggle(id)}>Toggle</button>
         <button type="button" onClick={Dispatch.todoDelete(id)}>Delete</button>
      </li>
   )
}

function Todos({ todos }) {
   return (
      <ul id='Todos'>
         { todos.map((todo, index) => <Todo todo={todo} key={index} />) }
      </ul>
   )
}

const mapState = (state) => ({
   todos : Derive.todoVisibility(state.todos, state.view),
   view  : state.view,
})

export default connect(mapState)(Todos)