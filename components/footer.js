import React from 'react'
import T     from '../state/types'
import A     from '../state/actions'

function Footer() {
   const all     = () => dispatch(A.goSee(T.VIEW_ALL))
   const current = () => dispatch(A.goSee(T.VIEW_CURRENT))
   const done    = () => dispatch(A.goSee(T.VIEW_DONE))

   return (
      <footer>
         <View
            all={all}
            current={current}
            done={done}
         />
      </footer>
   )
}