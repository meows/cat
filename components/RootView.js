import React from 'react'
import store from '../state/store'

import Input  from './input'
import Todos  from './todos'
import Footer from './footer'

const RootView = function() {
   const { todos, view } = store.getState()
   return (
      <div id='RootView'>
         <Input />
         <Todos todos={todos} view={view} />
         <Footer />
      </div>
   )
}

export default RootView