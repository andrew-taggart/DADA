import { useState } from 'react'

const GoalRegistrationForm = ({ onGoalRegister }) => {
  const [goalName, setGoalName] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const handleGoalNameChange = (e) => setGoalName(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleStartDateChange = (e) => setStartDate(e.target.value)
  const handleEndDateChange = (e) => setEndDate(e.target.value)
  const handleReminderChange = (e) => setReminder(e.target.checked)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform form validation here

    // Create goal object
    const newGoal = {
      goalName,
      description,
      startDate,
      endDate,
      reminder
    }

    // Callback function to pass the new goal up to the parent component
    onGoalRegister(newGoal)

    // Clear form fields
    setGoalName('')
    setDescription('')
    setStartDate('')
    setEndDate('')
    setReminder(false)
  }

  return (
    <div className="goal-registration-container">
      <form onSubmit={handleSubmit}>
        <h2>Register New Goal</h2>
        <div className="form-group">
          <label htmlFor="goalName">Goal Name:</label>
          <input
            type="text"
            id="goalName"
            value={goalName}
            onChange={handleGoalNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="reminder">Set Reminder:</label>
          <input
            type="checkbox"
            id="reminder"
            checked={reminder}
            onChange={handleReminderChange}
          />
        </div>
        <button type="submit" className="btn-register-goal">Register Goal</button>
      </form>
    </div>
  )
}

export default GoalRegistrationForm
