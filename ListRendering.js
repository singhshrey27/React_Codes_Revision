import React from 'react'

function ListRendering() {
    // const names=['shrey','arjun','mayank']
    // const print=names.map(name=><h2>{name}</h2>)


    // example of mutliple objects here
    const persons=[
        {
            id:1,
            name:'Brue',
            age:20,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Vishwas',
            age:23,
            skill:'Vuejs'
        },
        {
            id:4,
            name:'shrey',
            age:21,
            skill:'nodejs'
        }
    ]

    const personList=persons.map(person=> <h2>I am {person.name} and age is {person.age} and skilled in {person.skill}</h2>)
    
  return (
    
    <div>{personList}</div>
  )
}

export default ListRendering
