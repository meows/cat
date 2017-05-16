import ReactDOM from 'react-dom'
import store    from './store'
import Form     from '../components/form'

// -----------------------------------------------------------------------------
// Observer

const observer = (state = store.getState()) => {
   const { todos, view } = state

   console.log(`Δstate :: `, state)

   ReactDOM.render(<Form todos={todos} view={view} />, document.getElementById('App'))
}

export default observer