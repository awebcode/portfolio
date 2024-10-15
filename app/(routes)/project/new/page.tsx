import React from 'react'
import CreateProjectForm from '../components/CreateProjectForm'

const NewProject = ({params}:{params:{id:string}}) => {
  return (
    <div><CreateProjectForm  id={params.id}/></div>
  )
}

export default NewProject