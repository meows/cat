import React from 'react'

import Input  from './Input'
import Todos  from './Todos'
import Footer from './Footer'

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