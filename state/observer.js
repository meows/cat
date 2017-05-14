import store from './store'
import ReactDOM from 'react-dom'
import Form from '../components/form'

// -----------------------------------------------------------------------------
// Observer

const observer = (state = store.getState()) => {
   const { todos, view } = state

   console.log(`Δstate :: `, state)

   ReactDOM.render(<Form todos={todos} view={view} />, document.body)
}

export default observer