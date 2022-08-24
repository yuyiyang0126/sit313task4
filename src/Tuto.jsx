import React from 'react'
import './columnlayout'

const Tutorial = (props) =>
{
    return <div className='column'>
     <h2>{props.title}</h2>
    <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>

    </div>
}

export default Tutorial