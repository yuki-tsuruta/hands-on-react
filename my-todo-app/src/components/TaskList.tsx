import React from "react";
import { useAtom } from "jotai";
import { tasksAtom } from "../atoms";
import { Link } from "react-router-dom";

const TaskList: React.FC = () => {
    const [tasks] = useAtom(tasksAtom); 

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;
