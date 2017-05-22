import React from 'react'

import Dispatch from '../state/dispatcher'
import A from '../state/actions'

class Input extends React.Component {
   state = { input: '' }

   constructor(props) { super(props) }

   render() {
      return (
         <div>
            <input value={this.state.input} onChange={this.update} />
            <button type="button" onClick={this.addTodo}>Submit</button>
         </div>
      )
   }

   update = (event) => this.setState({
      input: event.target.value,
   })

   addTodo = () => {
      const task = this.state.input

      Dispatch(A.todoAdd(task))
      this.setState({ input: '' })
   }
}

export default Input
