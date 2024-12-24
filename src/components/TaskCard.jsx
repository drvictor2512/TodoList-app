import React from 'react'
import './TaskCard.css'
import Tags from './Tags'
import Delete from '../assets/delete..jpg'
const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>

        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                {
                  tags.map((tag, index) => (<Tags key={index} tagname={tag} selected />))
                }
            </div>
            <div className='task_delete' onClick={() => handleDelete(index)}>
                <img src={Delete} className='delete_icon' />
            </div>
        </div>
    </article>
  )
}

export default TaskCard