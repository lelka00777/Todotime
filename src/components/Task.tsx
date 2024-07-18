// src/components/Task.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Timer from './Timer';

interface TaskProps {
    task: string;
    time: number;
    onRemove: () => void;
}

 const Task: React.FC<TaskProps> = ({ task, time, onRemove }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: 1 }}>{task}</span>
            <Timer initialTime={time} />
            <Button onClick={onRemove} color="secondary">Remove</Button>
        </div>
    );
};

export default Task;