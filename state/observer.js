import ReactDOM from 'react-dom'
import store    from './store'
import App      from '../components/App'
import { Provider } from 'react-redux'

// -----------------------------------------------------------------------------
// Observer

const observer = () => {
   console.log(`Δstate :: `, store.getState())

   ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,

      document.getElementById('App')
   )
}

export default observer