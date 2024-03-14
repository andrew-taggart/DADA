import React, { useState, useContext,useEffect } from 'react'


export default function Milestone({ onAddMilestone }) {



    const [taskName, setTaskName] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [accomplished, setAccomplished] = useState(false)
    const [activeReminder, setActiveReminder] = useState(false)
    const [description, setDescription] = useState('')

    const [alertMessage, setAlertMessageM] = useState('')
    const [milestones, setMilestones] = useState([])

    const handleTaskNameChange = (e) => setTaskName(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleDueDateChange = (e) => setDueDate(e.target.value)
    const handleActiveReminderChange = (e) => setActiveReminder(e.target.checked)
    const handleAccomplishedChange = (e) => setAccomplished(e.target.checked)

    const clearMilestones = () => {
        setTaskName('')
        setDueDate('')
        setAccomplished(false)
        setActiveReminder(false)
        setDescription('')
        setAlertMessageM('')
        setMilestones([])
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        try {
            if (!taskName || !dueDate) {
                setAlertMessageM('Task name and due date are required.')
                return
            }
            const newMilestone = {
                taskName, dueDate, accomplished, activeReminder, description
            }

            setMilestones([...milestones, newMilestone])

            //Passing set of Milestones into parent (Goal) components
            onAddMilestone(newMilestone)

           
            // setMilestones('')
            setTaskName('')
            setDueDate('')
            setAccomplished(false)
            setActiveReminder(false)
            setDescription('')
            setAlertMessageM('')

        } catch (error) {
            // setAlertMessage('Unable to add milestone.', error.message)
        }

    }
   
    const deleteMilestone = (indexToDelete) => {
        setMilestones(milestones.filter((_, index) => index !== indexToDelete));
    }

    return (

        <>
            <div className='milestone-container'>
                {/* <form> */}
                    <div className='body-container'>
                        <div className='milestone-header'>
                            <label>Milestones:</label>
                            <input
                                type="text"
                                id="taskName"
                                value={taskName}
                                onChange={handleTaskNameChange}
                                placeholder='enter task name'
                            />
                            <button type="button" className='add-New-Milestone' onClick={handelSubmit}>+</button>
                        </div>
                        <div className='form-group'>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}                            
                                placeholder='enter task description'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="dueDate">Due Date:</label>
                            <input
                                type="date"
                                id="dueDate"
                                value={dueDate}
                                onChange={handleDueDateChange}
                                
                            />
                        </div>
                        <div className='checked-box'>
                            <div>
                                <button type='button'id="clear-btn" className='clear-milestone' onClick={() => clearMilestones()}>Clear</button>
                                {/* {alertMessage && <div className='alt-msg'>{alertMessage}</div>} */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="reminder">Reminder:</label>
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
                        </div>
                    <table className='table-milestone'>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Due Date</th>
                                {/* <th>Description</th> */}
                                <th>Reminder</th>
                                <th>Accomplished</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                milestones.map((milestone, index) => (
                                    <tr key={index}>
                                        <td>{milestone.taskName}</td>
                                        <td>{milestone.dueDate}</td>
                                        {/* <td>{milestones.description}</td> */}
                                        <td><input type='checkbox' checked={milestone.activeReminder} readOnly /></td>
                                        <td><input type='checkbox' checked={milestone.accomplished} readOnly /></td>
                                        <td>
                                            {/* <div className='edit-milestone'><i className="fa-regular fa-pen-to-square"></i></div>     */}
                                            <div className='delete-milestone' onClick={() => deleteMilestone(index)} ><i className="fa-solid fa-trash"></i></div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                    
                </div>
                    {alertMessage && <div className='alt-msg'>{alertMessage}</div>}
                    
                {/* </form> */}
            </div>
        </>

    )

}