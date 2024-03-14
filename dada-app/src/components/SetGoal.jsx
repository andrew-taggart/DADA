import React, { useState, useContext } from 'react'
import { GoalContext } from '../context/GoalContext'
import Milestone from './Milestone'

const GoalForm = () => {
  const { addNewGoal } = useContext(GoalContext)
  const [milestones, setMilestones] = useState([])
  const [goalName, setGoalName] = useState('')
  const [notes, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isActive, setReminder] = useState(false)
  const [accomplished, setAccomplish] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const addMilestone = (newMilestone) => {
    setMilestones((currentMilestone) => [...currentMilestone, newMilestone])
  }

  const handleGoalNameChange = (e) => {
    setGoalName(e.target.value)
    setAlertMessage('')
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
    setAlertMessage('')
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
    setAlertMessage('')
  }

  const handleReminderChange = (e) => {
    setReminder(e.target.checked)
  }

  const handleAccomplishChange = (e) => {
    setAccomplish(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = localStorage.getItem('userId')
    if (!user) {
      setAlertMessage('User is not signed in')
      return
    }

    if (!goalName || !startDate || !endDate) {
      setAlertMessage('Please fill in all required fields.')
      return
    } else if (milestones.length === 0) {
      setAlertMessage('Please add at least one milestone.')
      return
    }

    addNewGoal(user, goalName, startDate, endDate, accomplished, isActive, notes, milestones)
      .then(() => {
        clearForm()
        setAlertMessage('Goal and Milestones are successfully registered!')
      })
      .catch(error => {
        console.error('Unable to register goal', error)
        setAlertMessage('Unable to register goal!')
      })
  }

  const clearForm = () => {
    setGoalName('')
    setDescription('')
    setStartDate('')
    setEndDate('')
    setReminder(false)
    setAccomplish(false)
    setMilestones([])
    setAlertMessage('')
  }

  return (
    <div className="goal-registration-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="setgoal_form">
          <div className='goal-title'>Register New Goal</div>

          <div className="form-group">
            <label htmlFor="goalName">Goal Name:</label>
            <input
              type="text"
              id="goalName"
              value={goalName}
              onChange={handleGoalNameChange}
              required
              placeholder='Enter goal name'
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="notes"
              value={notes}
              onChange={handleDescriptionChange}
              placeholder='Enter any special notes'
            />
          </div>

          <div className='dates'>
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                required
              />
            </div>
          </div>

          <div className='checked-box'>
            <div className="form-group">
              <label htmlFor="reminder">Reminder:</label>
              <input
                type="checkbox"
                id="isActive"
                checked={isActive}
                onChange={handleReminderChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Accomplished">Accomplished:</label>
              <input
                type="checkbox"
                id="isAccomplished"
                checked={accomplished}
                onChange={handleAccomplishChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className='milestone'>
              <Milestone onAddMilestone={addMilestone} clearMilestones={() => setMilestones([])} milestones={milestones} />
            </div>
          </div>

          {alertMessage && <div className='alert-message'>{alertMessage}</div>}

          <div className="form-action-buttons">
            <button type="button" className="form-btn clear" onClick={clearForm}>Clear</button>
            <button type="submit" className="form-btn submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GoalForm
