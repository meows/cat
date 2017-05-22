import React       from 'react'
import T           from '../state/types'
import A           from '../state/actions'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'


function Footer({ all, current, done }) {
   return (
      <footer>
         <button type="button" onClick={() => all()}>All</button>
         <button type="button" onClick={() => current()}>Current</button>
         <button type="button" onClick={() => done()}>Done</button>
      </footer>
   )
}

// -----------------------------------------------------------------------------
// Store

const mapDispatch = (dispatch) => ({
   all     : () => dispatch(A.goSee(T.VIEW_ALL)),
   current : () => dispatch(A.goSee(T.VIEW_CURRENT)),
   done    : () => dispatch(A.goSee(T.VIEW_DONE)),
})

const Connected = connect(null, mapDispatch)(Footer)

// -----------------------------------------------------------------------------
// React Typing



export default Connected