import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </li>
    )
}

export default TodoItem;

