import React       from 'react'
import T           from '../state/types'
import A           from '../state/actions'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'

// -----------------------------------------------------------------------------
// Components

function Footer({ all, current, done }) {
   return (
      <footer>
         <button type="button" onClick={all}>All</button>
         <button type="button" onClick={current}>Current</button>
         <button type="button" onClick={done}>Done</button>
      </footer>
   )
}

function Button ({ text, onClick, is_disabled }) {
   const status = is_disabled ? 'disabled' : null

   return (
      <button type="button" onClick={onClick} disabled={status}>{text}</button>
   )
}

// -----------------------------------------------------------------------------
// React Typing

Footer.PropTypes = {
   all: PropTypes.func.isRequired,
   current: PropTypes.func.isRequired,
   done: PropTypes.func.isRequired,
}

// -----------------------------------------------------------------------------
// Store Connection

const mapProps = (state) => ({
   view: state.view,
})

const mapDispatch = (dispatch) => ({
   all     : () => dispatch(A.goSee(T.VIEW_ALL)),
   current : () => dispatch(A.goSee(T.VIEW_CURRENT)),
   done    : () => dispatch(A.goSee(T.VIEW_DONE)),
})

const Connected = connect(null, mapDispatch)(Footer)

export default Connected