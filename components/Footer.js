import React    from 'react'
import T        from '../state/types'
import A        from '../state/actions'
import dispatch from '../state/dispatcher'

function Footer() {
   return (
      <footer>
         <button type="button" onClick={dispatch.goSee(T.VIEW_ALL)}>All</button>
         <button type="button" onClick={dispatch.goSee(T.VIEW_CURRENT)}>Current</button>
         <button type="button" onClick={dispatch.goSee(T.VIEW_DONE)}>Done</button>
      </footer>
   )
}

export default Footer
