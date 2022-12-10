import React from "react";
import s from "./Todo.module.css"

const Todo = ({id, title, description}) => {
    return (
        <div className={s.todo}>
            <span>{id}</span>
            <span>{title}</span>
            <span>{description}</span>
        </div>
    )
}

export default Todo