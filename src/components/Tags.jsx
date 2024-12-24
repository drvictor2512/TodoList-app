import React from 'react'
import './Tags.css'
const Tags = ({tagname, selectTags, selected}) => {
  const Tagsstyle = {
    Health : {backgroundColor : "#65B741"},
    Work : {backgroundColor : "#D04848"},
    Study : {backgroundColor : "#40A2E3"},
    Entertainment : {backgroundColor : "#FDF0D1"}
  }
  return (
    <button type='button' className='tag' style={selected ? Tagsstyle[tagname] : Tagsstyle.default} onClick={() => selectTags(tagname) }>{tagname}</button>
    
  )
}

export default Tags