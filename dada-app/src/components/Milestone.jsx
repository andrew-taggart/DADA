import React,{useState,useContext} from 'react'
import { useAsyncError } from 'react-router-dom'

// ({ onAddMilestone, goalId })
export default function Milestone () {

    const [taskName,setTaskName] = useState('')
    const [dueDate,setDueDate] = useState('')
    const [accomplished,setAccomplished] = useState('')
    const [activeReminder,setActiveReminder] = useState('')
    const [description ,setDescription] = useState('')

    const handelSubmit= (e) => {
        e.preventDefault()
        if(!taskName || !dueDate ){
            return
        }

    }
    return(
        <h2>Milestones</h2>
    )

}