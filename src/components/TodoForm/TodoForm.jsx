import React, {useState} from "react";
import s from "./TodoForm.module.css"
import {addTodo} from "../../redux/todoReducer";
import {useDispatch, useSelector} from "react-redux";


const TodoForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const todos = useSelector(state => state.todo.todos)

    const newId = Number(todos.slice(-1).map((index) => index.id + 1))

    const dispatch = useDispatch()

    const handleTitle = (e) => {
        const newTitle = e.target.value
        setTitle(newTitle)
    }

    const handleDescription = (e) => {
        const newDescription = e.target.value
        setDescription(newDescription)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(newId, title, description))
        setTitle("")
        setDescription("")
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.title}><input onChange={(e) => handleTitle(e)} value={title} id='title' type='text' placeholder='Title'/></div>
            <div className={s.description}><textarea onChange={(e) => handleDescription(e)} value={description} id='description' placeholder="Description"/></div>
            <button>Add</button>
        </form>
    )
}

export default TodoForm