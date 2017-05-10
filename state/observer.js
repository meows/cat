import store from './store'

const observer = (state = store.getState()) => {
   const { todos, view } = state

   console.log(`Δstate :: `, state)
}

export default observer