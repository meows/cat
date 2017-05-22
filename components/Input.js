import React       from 'react'
import { connect } from 'react-redux'
import A           from '../state/actions'

// -----------------------------------------------------------------------------
// Component

class Input extends React.Component {
   state    = { input: '' }
   onClick = this.props.onClick

   constructor(props) { super(props) }

   render() {
      return (
         <div>
            <input value={this.state.input} onChange={this.update} />
            <button type="button" onClick={this.submit}>Submit</button>
         </div>
      )
   }

   update = (event) => this.setState({
      input: event.target.value,
   })

   submit = () => {
      const task = this.state.input
      if (task.length === 0) { return }

      this.onClick(task)
      this.setState({ input: '' })
   }
}

// -----------------------------------------------------------------------------
// Connection

const mapDispatch = (dispatch) => ({
   onClick: (task) => dispatch(A.todoAdd(task))
})

const Connection = connect(null, mapDispatch)(Input)

export default Connection
