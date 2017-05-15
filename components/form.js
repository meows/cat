import React from 'react'

import Input     from './input'
import Todos     from './todos'
import Footer    from './footer'

import A         from '../state/actions'
import dispatch  from '../state/dispatcher'
import store     from '../state/store'

import DATA from '../state/data'

// Form :: ({ Todo[], ViewType }) -> JSX
function Form({ todos, view }) {
   return (
      <form id='Form'>
         <Input />
         <Todos todos={todos} view={view} />
         <Footer />
      </form>
   )
}

export default Form