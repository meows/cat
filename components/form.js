import React from 'react'

import Input     from './input'
import Todos     from './todos'
import A         from '../state/actions'
import dispatch  from '../state/dispatcher'

import DATA from '../state/data'

const onClick = () => document.getElementById('Form')

// Form :: () -> JSX
function Form() {
   return (
      <form id='Form'>
         <Input onClick={() => dispatch(A.addTodo('meow'))} />
         <Todos todos={DATA}/>
      </form>
   )
}

export default Form