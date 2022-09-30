import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => { // Tasks being passed from App.js and caught here || ({ tasks }) = props.tasks but destructured 
  
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> // Pass in Task component we imported and then pass the prop task into that to map
      ))}
    </>
  )
}

export default Tasks