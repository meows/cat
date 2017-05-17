import React from 'react'

import Input  from './input'
import Todos  from './todos'
import Footer from './footer'

// Form :: ({ Todo[], ViewType }) -> JSX
function Form() {
   return (
      <form id='Form'>
         <Input />
         <Todos />
         <Footer />
      </form>
   )
}

export default Form