import React from 'react'

import Input     from './input'
import Todos     from './todos'
import Footer    from './footer'

import A         from '../state/actions'
import dispatch  from '../state/dispatcher'
import store     from '../state/store'

import DATA from '../state/data'

const onClick = () => document.getElementById('Form')

// Form :: () -> JSX
function Form({ state }) {
   return (
      <form id='Form'>
         <Input />
         <Todos state={state} />
         <Footer />
      </form>
   )
}

export default Form