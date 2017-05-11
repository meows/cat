import React from 'react'

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
   state = ''

   constructor(props) { super(props) }

   render() {
      return <input
         value={this.state}
         onChange={this.update}
      />
   }

   componentWillUnmount() { this.state = '' }

   update(event) {
      this.setState(event.target.value)
   }
}

export default Input