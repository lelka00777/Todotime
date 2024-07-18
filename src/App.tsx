import React from 'react';

import {TaskList} from './components/TaskList'

const App: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Todo Time</h1>
            <TaskList />
        </div>
    );
};

export default App;
