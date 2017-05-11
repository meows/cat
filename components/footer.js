import React from 'react'
import T from '../state/types'
import A from '../state/actions'

function Footer() {
   const all     = A.goSee(T.VIEW_ALL)
   const current = A.goSee(T.VIEW_CURRENT)
   const done    = A.goSee(T.VIEW_DONE)

   return (
      <footer>

      </footer>
   )
}