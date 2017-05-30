import React       from 'react'
import { connect } from 'react-redux'

import T           from '../state/types'
import A           from '../state/actions'
import D           from '../state/derive'
import Button      from './Button'

// -----------------------------------------------------------------------------
// Components

function Footer({ all, current, done, clear, view, all_done }) {
   const same = (fn) => fn.name === view
   const clearButton = <Button onClick={clear} disabled={same(clear)} />

   return (
      <footer>
         <Button text="all"     onClick={all}     disabled={same(all)} />
         <Button text="current" onClick={current} disabled={same(current)} />
         <Button text="done"    onClick={done}    disabled={same(done)} />
         {
            all_done && view === 'done' ? clearButton : null
         }
      </footer>
   )
}

// -----------------------------------------------------------------------------
// Connection

const mapProps = (state) => ({
   view     : D.footerVisibility(state.view),
   all_done : state.todos.filter(todo => todo.done).length !== 0,
})

const mapDispatch = (dispatch) => ({
   all     : () => dispatch(A.goSee(T.VIEW_ALL)),
   current : () => dispatch(A.goSee(T.VIEW_CURRENT)),
   done    : () => dispatch(A.goSee(T.VIEW_DONE)),
   clear   : () => dispatch(A.todoClear())
})

const Connected = connect(mapProps, mapDispatch)(Footer)

export default Connected