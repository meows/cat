import React       from 'react'
import T           from '../state/types'
import A           from '../state/actions'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'

// -----------------------------------------------------------------------------
// Components

function Footer({ all, current, done, view }) {

   return (
      <footer>
         <button type="button" onClick={all}>All</button>
         <button type="button" onClick={current}>Current</button>
         <button type="button" onClick={done}>Done</button>
         <Button text="Hello All" onClick={all} disabled={true} />
      </footer>
   )
}

function Button ({ text, onClick, disabled }) {
   const status = disabled ? 'disabled' : null

   return (
      <button type="button" onClick={onClick} disabled={status}>{text}</button>
   )
}

// -----------------------------------------------------------------------------
// React Typing

Footer.PropTypes = {
   all     : PropTypes.func.isRequired,
   current : PropTypes.func.isRequired,
   done    : PropTypes.func.isRequired,
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

const Connected = connect(mapProps, mapDispatch)(Footer)

export default Connected