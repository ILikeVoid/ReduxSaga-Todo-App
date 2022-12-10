import React from 'react';
import s from "./Todos.module.css";
import {useSelector} from "react-redux";
import Todo from "./Todo/Todo";


const Todos = () => {
    const todos = useSelector((state) => state.todo.todos)

    const elementsTodo = todos.map(t => <Todo key={t.id} id={t.id} title={t.title} description={t.description}/>)

    return (
        <div className={s.todos}>
            {elementsTodo}
        </div>
    )
}

export default Todos;