import React       from 'react'
import { connect } from 'react-redux'
import A           from '../state/actions'
import Button       from './Button'

// -----------------------------------------------------------------------------
// Component

class Input extends React.Component {
   constructor(props) {
      super(props)

      this.state   = { input: '' }
      this.todoAdd = this.props.todoAdd
   }

   render() {
      const {
         state: { input },
         onUpdate,
         onSubmit,
      } = this

      return (
         <div>
            <input value={input} onChange={onUpdate} name="input" />
            <Button text="submit" onClick={onSubmit} />
         </div>
      )
   }

   onUpdate = (event) => this.setState({
      [event.target.name]: event.target.value,
   })

   onSubmit = () => {
      const task = this.state.input
      if (task.length === 0) { return }
      this.todoAdd(task)
      this.setState({ input: '' })
   }
}

// -----------------------------------------------------------------------------
// Connection

const mapDispatch = (dispatch) => ({
   todoAdd: (task) => dispatch(A.todoAdd(task))
})

const Connection = connect(null, mapDispatch)(Input)

export default Connection
