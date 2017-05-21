import React from 'react'
import store from '../state/store'

import Input  from './Input'
import Todos  from './Todos'
import Footer from './Footer'

const RootView = function() {
   return (
      <div id='RootView'>
         <Input />
         <Todos todos={todos} view={view} />
         <Footer />
      </div>
   )
}

export default RootView