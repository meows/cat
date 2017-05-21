import React from 'react'

import Input    from './Input'
import TodoList from './TodoList'
import Footer   from './Footer'

function App() {
   return (
      <form id='Form'>
         <Input />
         <TodoList />
         <Footer />
      </form>
   )
}

export default App