import React from 'react'

import Input   from './Input'
import Todos   from './Todos'
import Footer  from './Footer'

function App() {
   return (
      <form id='Form'>
         <Input />
         <Todos />
         <Footer />
      </form>
   )
}

export default App