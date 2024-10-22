import React, { useState } from 'react';

function AddTask() {
  const [task, setTask] = useState({
    name: '',
    duration: '',
    budget: '',
    description: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Added:', task);
    setTask({ name: '', duration: '', budget: '', description: '' });
  };
  return (
    <div className="container">
      <h1 className="title">New Task List</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Task Name:</label>
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Task Duration:</label>
          <input
            type="text"
            name="duration"
            value={task.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Budget:</label>
          <input
            type="number"
            name="budget"
            value={task.budget}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Full Project Description:</label>
          <textarea
            name="description"
            rows="4"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn-primary">Add Task</button>
      </form>
      <div className="team-section">
        <h4>Add Team Member</h4>
        <button className="btn-secondary">Add Team Member</button>
      </div>
    </div>
  );
}
export default AddTask;