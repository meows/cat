import React    from 'react'
import T        from '../state/types'
import A        from '../state/actions'
import Dispatch from '../state/dispatcher'

function Footer({ all, current, done }) {
   return (
      <footer>
         <button type="button" onClick={() => Dispatch(A.goSee(T.VIEW_ALL))}>All</button>
         <button type="button" onClick={() => Dispatch(A.goSee(T.VIEW_CURRENT))}>Current</button>
         <button type="button" onClick={() => Dispatch(A.goSee(T.VIEW_DONE))}>Done</button>
      </footer>
   )
}

const mapDispatch = () => ({

})

export default Footer
