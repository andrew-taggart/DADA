import React, { useState, useContext } from 'react'
// import { useAsyncError } from 'react-router-dom'

// ({ onAddMilestone, goalId })
export default function Milestone() {

    const [taskName, setTaskName] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [accomplished, setAccomplished] = useState(false)
    const [activeReminder, setActiveReminder] = useState(false)
    const [description, setDescription] = useState('')

    const handleTaskNameChange = (e) => setTaskName(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleDueDateChange = (e) => setDueDate(e.target.value)
    const handleActiveReminderChange = (e) => setActiveReminder(e.target.checked)
    const handleAccomplishedChange = (e) => setAccomplished(e.target.checked)

    const handelSubmit = (e) => {
        e.preventDefault()
        if (!taskName || !dueDate) {
            return
        }
        

    }
    return (

        <>
            <div className='main-container'>
                {/* <form> */}
                    <div className='body-container'>
                        <div className='header-container'>
                            <h2>Milestones</h2>
                            <button type="button" className='add-New-Milestone'>+</button>
                        </div>
                        <div className='form-group'>
                            <input
                                type="text"
                                id="taskName"
                                value={taskName}
                                onChange={handleTaskNameChange}
                                required
                                placeholder='Enter the Task name'
                            /><br />
                        </div>
                        <div className='form-group'>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}                            
                                placeholder='Enter the Task Description'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="dueDate">Due Date:</label>
                            <input
                                type="date"
                                id="dueDate"
                                value={dueDate}
                                onChange={handleDueDateChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reminder">Active Reminder:</label>
                            <input
                                type="checkbox"
                                id="activeReminder"
                                checked={activeReminder}
                                onChange={handleActiveReminderChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accomplished">Accomplished:</label>
                            <input
                                type="checkbox"
                                id="accomplished"
                                checked={accomplished}
                                onChange={handleAccomplishedChange}
                            />
                        </div>
                        <table className='table-milestone'>
                            <tr>
                                <th>Task Name</th>
                                <th>Due Date</th>
                                <th>Reminder</th>
                                <th>Accomplished</th>
                            </tr>

                        </table>
                        {/* <div className="form-group">
                            <button className='edit' type='button'>EDIT</button><button className='delete' type="button">DELETE</button>
                        </div> */}
                    </div>

                {/* </form> */}
            </div>
        </>

    )

}