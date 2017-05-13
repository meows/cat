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
         input: '',
      }
   }

   addTodo(state = this.state) { 
      return dispatch(A.addTodo(state.input)) 
   }

   update(event) {
      return this.bind(this).setState({
         input: (event.target.value)
      })
   }

   render() {
      return (
         <div>
            <form>
               <input
                  value={this.state.input}
                  onChange={this.update}
               />
            
               <button onClick={this.addTodo}>Add Todo</button>
            </form>
         </div>
      )
   }
}

export default Input