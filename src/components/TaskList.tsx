// src/components/TaskList.tsx
import React, { useState } from 'react';
// import Timer from './Task';
import { TextField, Button } from '@material-ui/core';
import  Task  from './Task';

interface Task {
    id: number;
    task: string;
    time: number;
}

export const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState('');
    const [timeInput, setTimeInput] = useState<number>(0);

    const addTask = () => {
        if (taskInput && timeInput > 0) {
            setTasks([...tasks, { id: Date.now(), task: taskInput, time: timeInput }]);
            setTaskInput('');
            setTimeInput(0);
        }
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <TextField
                    label="Task"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <TextField
                    label="Time (minutes)"
                    type="number"
                    value={timeInput}
                    onChange={(e) => setTimeInput(parseInt(e.target.value))}
                />
                <Button onClick={addTask} color="primary">Add Task</Button>
            </div>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task.task}
                    time={task.time}
                    onRemove={() => removeTask(task.id)}
                />
            ))}
        </div>
    );
};


export default TaskList;