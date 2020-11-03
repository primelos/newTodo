import React from 'react'


const Form = ({ inputText, setInputText, todos, setTodos, setStatus, }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(x => x = e.target.value)
        
    }
    const submitToDoHandler = (e) => {
        e.preventDefault()
        setTodos(x =>  x = 
            [...todos, { text: inputText, completed: false, id: Math.floor(Math.random()*1000)}, ]
        )
        setInputText(x => x = '')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    console.log('form')
    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={(e) => inputTextHandler(e)} />
            <button onClick={(e) => submitToDoHandler(e)} className="todo-button" type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" id="" className="filter-todo">
                    <option value='all'>All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        
    )
}

export default Form
