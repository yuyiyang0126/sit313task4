import React from 'react'
import Card from './Card'
import'./Card.css'
import tutolist from './tutolist'

function cardComponent (tutt, i){
    return <Card 
    key = {tutt.key}
    title = {tutt.title}
    avatar = {tutt.avatar}
    name = {tutt.name}
    
  />

}


const TutorialList = () =>
{
    return <div className="row">
    {tutolist.map( (tutt) =>
        <Card
        key = {tutt.key}
        title = {tutt.title}
        avatar ={tutt.avatar}
        name = {tutt.name}


        /> 
    )}
    </div>
}
export default TutorialList