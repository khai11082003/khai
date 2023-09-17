import React, { useState } from 'react'

export const EditTodoForm = ({editTodo,task}) => {

    const [Value,setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(Value,task.id  );
        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Updale Task'
        onChange={(e) => setValue(e.target.value)}
        value={Value}
        />
        <button type='submit' className='todo-btn'>Updale Task</button>
    </form>
  )
}
