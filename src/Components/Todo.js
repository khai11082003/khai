import React from 'react'


export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
    console.log(task);
  return (
    <div className='Todo'>
        <p onClick = {() => toggleComplete(task.id)}
        className = {`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
            <button
                style={
                    {
                        width: '40px',
                        cursor: 'pointer',
                    }
                }
                onClick={() => editTodo(task.id)}
            >sửa</button>
            <button  
                style={{marginLeft: '5px',
                cursor: 'pointer',
                        width: '40px'
                    }}
                onClick={() => deleteTodo(task.id)}    
                >
                xóa
            </button>
        </div>
    </div>
  )
}
