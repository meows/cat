import ReactDOM from 'react-dom'
import store    from './store'
import Form     from '../components/form'
import RootView from '../components/RootView'

// -----------------------------------------------------------------------------
// Observer

const observer = () => {
   console.log(`Δstate :: `, store.getState())

   ReactDOM.render(<RootView />, document.getElementById('RootView'))
}

export default observer