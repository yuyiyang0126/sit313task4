import React from 'react'
import './Card.css'

const Article = (props) =>
{
    return <div className='column'>
     <h2>{props.title}</h2>
    <img src={props.avatar} alt="Article" />
    <h3>{props.name}</h3>

    </div>
}

export default Article