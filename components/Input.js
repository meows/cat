import React       from 'react'
import { connect } from 'react-redux'
import A           from '../state/actions'

// -----------------------------------------------------------------------------
// Component

class Input extends React.Component {
   constructor(props) {
      super(props)

      this.state   = { input: '' }
      this.todoAdd = this.props.todoAdd
   }

   render() {
      return (
         <div>
            <input value={this.state.input} onChange={this.update} name="input" />
            <button type="button" onClick={this.submit}>submit</button>
         </div>
      )
   }

   update = (event) => this.setState({
      [event.target.name]: event.target.value,
   })

   submit = () => {
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
