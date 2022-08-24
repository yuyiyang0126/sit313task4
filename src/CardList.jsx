import React from 'react'
import Card from './Card'
import'./Card.css'
import stafflist from './stafflist'

function cardComponent (staff, i){
    return <Card 
    key = {staff.key}
    title = {staff.title}
    avatar = {staff.avatar}
    name = {staff.name}
    
  />

}


const CardList = () =>
{
    return <div className="row">
    {stafflist.map( (staff) =>
        <Card
        key = {staff.key}
        title = {staff.title}
        avatar ={staff.avatar}
        name = {staff.name}


        /> 
    )}
    </div>
}
export default CardList