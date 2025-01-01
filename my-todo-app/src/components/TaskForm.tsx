import React, { useState } from "react";
import { useAtom } from "jotai";
import { tasksAtom } from "../atoms";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const TaskForm: React.FC = () => {
    const [, setTasks] = useAtom(tasksAtom);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title,
            description,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        navigate('/');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="タイトル"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="詳細"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default TaskForm;
