import React, {useState} from 'react'
import './TaskForm.css'
import Tags from './Tags'
const TaskForm = ({setTask}) => {
  const [taskData, settaskData] = useState({
        task: "",
        status: "todo",
        tags: []
  })
  const checkTags = (tag) => {
        return taskData.tags.some(item => item === tag)
  }
  const selectTags = (tag) => {
        if(taskData.tags.some(item => item === tag)){
            const filterTags = taskData.tags.filter(item => item !== tag)
            settaskData(prev => {
                return {...prev, tags : filterTags}
            })
        }
        else{
            settaskData(prev => {
                return {...prev, tags : [...prev.tags, tag]}
            })
        }
  }
  const handleChange = (e) => {
        const {name, value} = e.target;
        settaskData((prev) => {
            return{...prev, [name] : value}
        })
  }
  const handleSubmit = (e) => {
        e.preventDefault();
        setTask(prev => {
            return[...prev, taskData]
        });
        settaskData({
            task: "",
            status: "todo",
            tags: [],
        });
  }
  return (
    <header className='app-header'>
        <form onSubmit={handleSubmit}>
            <input type="text" className='task_input' placeholder='Enter your task' value={taskData.task} onChange={handleChange} name="task"/>
            <div className='task_form_bottom_line'>
                <div>
                    <Tags tagname="Health" selectTags={selectTags} selected={checkTags("Health")}/>
                    <Tags tagname="Study"selectTags={selectTags} selected={checkTags("Study")}/>
                    <Tags tagname="Work"selectTags={selectTags} selected={checkTags("Work")}/>
                    <Tags tagname="Entertainment"selectTags={selectTags} selected={checkTags("Entertainment")}/>
                </div>
                <div>
                    <select className='task_status' value={taskData.status} onChange={handleChange} name="status">
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit' className='task_submit'>Add task</button>
                </div>
            </div>

        </form>
    </header>
  )
}

export default TaskForm