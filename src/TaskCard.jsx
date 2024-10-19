import React from 'react';


function TaskCard(props) {
  const { title, description, assignedTo, dueDate, status, priority } = props;

  return (
    <div className="task-card">
      <h5>{title}</h5>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Assigned To:</strong> {assignedTo}</p>
      <p><strong>Due Date:</strong> {dueDate}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Priority:</strong> {priority}</p>
      <div className="task-card-actions">
        <button className="edit-btn">Edit Task</button>
        <button className="delete-btn">Delete Task</button>
        <button className="project-member-btn">Project Member</button>
      </div>
    </div>
  );
}

export default TaskCard;

