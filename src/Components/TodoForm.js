import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [Value,setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(Value);
        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='what is the task today?'
        onChange={(e) => setValue(e.target.value)}
        value={Value}
        />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
