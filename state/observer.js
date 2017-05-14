import store from './store'

// -----------------------------------------------------------------------------
// Observer

const observer = (state = store.getState()) => {
   const { todos, view } = state

   console.log(`Δstate :: `, state)
}

export default observer