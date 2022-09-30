import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


import './index.css'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study for Algebra test',
      day: 'June 1st at 6:00pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Dentist appointment',
      day: 'June 3rd at 3:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Presidential inauguration',
      day: 'June 8th at 11:00am',
      reminder: true,
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 //Makeshift ID, server would generate automatically

    const newTask = { id, ...task } 
    // newTask comprised of a random ID + the task, day, and reminder parameters that were passed
    setTasks([...tasks, newTask])
    // copy current tasks array and add new object
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) // returns new task array composed of tasks for which the above argument returned true 
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)) // recreates the task array but with the double clicked task reminder boolean reversed.
  }
  // ------------&& is shorthand ternary operator that lets you skip the else statement, if condition isn't met then nothing happens. showAddTask is a true or false boolean being controlled by setShowAddTask, this boolean controls the button color and whether or not the App renders the component
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
