import React       from 'react'
import { connect } from 'react-redux'

import Dispatch from '../state/dispatcher'
import A        from '../state/actions'

// -----------------------------------------------------------------------------
// Component

class Input extends React.Component {
   state    = { input: '' }
   dispatch = this.props.dispatch

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

      this.dispatch(A.todoAdd(task))
      this.setState({ input: '' })
   }
}

// -----------------------------------------------------------------------------
// Dependencies

const Connection = connect()(Input)

export default Connection
