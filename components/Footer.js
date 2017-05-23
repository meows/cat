import React       from 'react'
import T           from '../state/types'
import A           from '../state/actions'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'
import D           from '../state/derive'

// -----------------------------------------------------------------------------
// Components

function Footer({ all, current, done, view }) {
   const same = (fn) => view === done.name ? true : false

   return (
      <footer>
         <button type="button" onClick={all} disabled={!same(all)}>All</button>
         <button type="button" onClick={current} disabled={!same(current)}>Current</button>
         <button type="button" onClick={done} disabled={same(done)}>Done</button>
      </footer>
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
})

const mapDispatch = (dispatch) => ({
   all     : () => dispatch(A.goSee(T.VIEW_ALL)),
   current : () => dispatch(A.goSee(T.VIEW_CURRENT)),
   done    : () => dispatch(A.goSee(T.VIEW_DONE)),
})

const Connected = connect(mapProps, mapDispatch)(Footer)

export default Connected