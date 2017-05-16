import React    from 'react'
import T        from '../state/types'
import A        from '../state/actions'
import dispatch from '../state/dispatcher'

function Footer() {
   const all     = () => dispatch(A.goSee(T.VIEW_ALL))
   const current = () => dispatch(A.goSee(T.VIEW_CURRENT))
   const done    = () => dispatch(A.goSee(T.VIEW_DONE))
   const clear   = () => dispatch(A.clearDone())

   return (
      <footer>
         <button type="button" onClick={all}>All</button>
         <button type="button" onClick={current}>Current</button>
         <button type="button" onClick={done}>Done</button>
         <button type="button" onClick={clear}>Clear Done</button>
      </footer>
   )
}

export default Footer
