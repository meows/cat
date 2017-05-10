import React from 'react'

// Input :: Fn -> JSX
function Input({ onClick }) {
   return (
      <section id='Input'>
         <input name='task' />
         <button onClick={onClick} type='button'>Add Task</button>
      </section>
   )
}

export default Input