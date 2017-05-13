import React from 'react'

import dispatch from '../state/dispatcher'
import A from '../state/actions'

// Input :: Fn -> JSX
function $Input({ onClick }) {
   return (
      <section id='Input'>
         <input name='task' />
         <button onClick={onClick} type='button'>Add Task</button>
      </section>
   )
}

class Input extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         input: ''
      }
   }

   render() {
      return (
         <input
            value={this.state.input}
            onChange={this.update}
         />
      )
   }

   update = (event) => {
      return this.setState({
         input: (event.target.value)
      })
   }

   addTodo = (state = this.state) => dispatch(A.addTodo(state))
}

export default Input