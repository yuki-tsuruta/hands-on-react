import React from "react";
import { useAtom } from "jotai";
import { tasksAtom } from "../atoms";
import { useParams } from "react-router-dom";

const TaskDetail: React.FC = () => {
    const [tasks] = useAtom(tasksAtom);
    const { id } = useParams();
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            {task.description && <p>{task.description}</p>}
        </div>
    )
}

export default TaskDetail;
