import React from "react";
import TaskCard from "./taskcard";



const NewTask = () => {
  const tasks = [
    {
      title: "Task Title",
      description: "This is a brief description of the task.",
      assignedTo: "John Doe",
      dueDate: "October 10, 2024",
      status: "In Progress",
      priority: "High",
    },
    {
      title: "Task Title",
      description: "This is a brief description of the task.",
      assignedTo: "John Doe",
      dueDate: "October 10, 2024",
      status: "In Progress",
      priority: "High",
    },
    
    {
        title: "Task Title",
        description: "This is a brief description of the task.",
        assignedTo: "John Doe",
        dueDate: "October 10, 2024",
        status: "In Progress",
        priority: "High",
      },
  ];

  return (
    <div className="upcoming-tasks-section">
      <h4>Upcoming Tasks</h4>
      <div className="task-cards-container">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default NewTask;
