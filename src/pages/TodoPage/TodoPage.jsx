import React from 'react';
import s from "./TodoPage.module.css"
import TodoForm from "../../components/TodoForm/TodoForm";
import Todos from "../../components/Todos/Todos";


const TodoPage = () => {

    return (
        <div className={s.todo}>
            <div className={s.todo_block}>
                <TodoForm />
                <Todos />
            </div>
        </div>
    );
}

export default TodoPage;