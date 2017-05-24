import React       from 'react'
import T           from '../state/types'
import A           from '../state/actions'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'
import D           from '../state/derive'

// -----------------------------------------------------------------------------
// Components

function Footer({ all, current, done, clear, view, zero_done_todos }) {
   const same = (fn) => view === fn.name ? true : false
   const clearButton = <button type="button" onClick={clear} disabled={same(clear)}>Clear</button>

   return (
      <footer>
         <button type="button" onClick={all}     disabled={same(all)}>All</button>
         <button type="button" onClick={current} disabled={same(current)}>Current</button>
         <button type="button" onClick={done}    disabled={same(done)}>Done</button>
         {
            zero_done_todos && view === 'done' ? clearButton : null
         }
      </footer>
   )
}

function FooterButton({ message, onClick, view, todos }) {
   return (
      <button type="button" onClick={onClick} disabled={false}>{message}</button>
   )
}

// -----------------------------------------------------------------------------
// React Typing

Footer.PropTypes = {
   all     : PropTypes.func.isRequired,
   current : PropTypes.func.isRequired,
   done    : PropTypes.func.isRequired,
   view    : PropTypes.string.isRequired,
}

// -----------------------------------------------------------------------------
// Store Connection

const mapProps = (state) => ({
   view: D.footerVisibility(state.view),
   zero_done_todos: state.todos.filter(todo => todo.done).length !== 0
})

const mapDispatch = (dispatch) => ({
   all     : () => dispatch(A.goSee(T.VIEW_ALL)),
   current : () => dispatch(A.goSee(T.VIEW_CURRENT)),
   done    : () => dispatch(A.goSee(T.VIEW_DONE)),
   clear   : () => dispatch(A.todoClear())
})

const Connected = connect(mapProps, mapDispatch)(Footer)

export default Connected