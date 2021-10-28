import React, {useState} from 'react';


export interface TaskProps {
    task: {
        id: string;
        title: string;
        state: string;
        updatedAt: Date;
    },
    onArchiveTask: (id: string) => void,
    onPinTask: (id: string) => void,
}

const Task = ({task,onArchiveTask, onPinTask}:TaskProps) => {
    return (
        <div className={`list-item ${task.state}`}>
            <label className="checkbox">
                <input 
                    type= "checkbox"
                    defaultChecked= {task.state === 'TASK_ARCHIVED'}
                    disabled= {true}
                    name= "checked"
                />
                <span className="checkbox-custom" onClick={()=>onArchiveTask(task.id)} />
            </label>
            <div className="title">
                <input type="text" value={task.title} readOnly={true} placeholder="Input title" />
            </div>
            <div className="actions" onClick={(e: React.MouseEvent<HTMLInputElement>)=> e.stopPropagation()}>
                {task.state !== 'TASK_ARCHIVED' && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={()=>onPinTask(task.id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default Task;