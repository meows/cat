import React from 'react'

import dispatch from '../state/dispatcher'
import A        from '../state/actions'

class Input extends React.Component {
   state = { input: '' }

   constructor(props) { super(props) }

   render() {
      return (
         <input
            value={this.state.input}
            onChange={this.update.bind(this)}
         />
      )
   }

   update = (event) => setState({
      input: event.target.value,
   })

   addTodo = (state = this.state) => dispatch(A.addTodo(state))
}

export default Input
