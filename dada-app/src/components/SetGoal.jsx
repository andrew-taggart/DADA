import { useState, useContext } from 'react'
import { GoalContext } from '../context/GoalContext'


// const GoalForm = ({ onGoalRegister }) => {
const GoalForm = () => {

  const {goalContext}= useContext(GoalContext)

  const [goals, setGoals] = useState([])
  const [goalName, setGoalName] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reminder, setReminder] = useState(false)
  const [accomplish, setAccomplish] = useState(false)

  const [alertMessage, setAlertMessage] = useState('')

  const handleGoalNameChange = (e) =>{

    const value = e.target.value;

    if (!value) {
      // Update the alert message state instead of using alert
      setAlertMessage('The goal name cannot be empty !')
    }
    // Assuming goal names are textual and checking if the input is purely numeric
    else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      setAlertMessage('The goal name must not be a number !')
    } else {
      // Clear any existing alert message and set the goal name
      setAlertMessage('')
      setGoalName(value)
    }
    }
     
  const handleDescriptionChange = (e) => setDescription(e.target.value)



  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value)
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)

    if (startDate >= currentDate) {
      setStartDate(e.target.value)
      setAlertMessage('') 
    } else {
      setAlertMessage('Start date cannot be in the past !')
    }
    
  }
  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value)
    const inStartDate = new Date(startDate);
    

    if (endDate >= inStartDate) {
      setEndDate(e.target.value)
      setAlertMessage('') 
    }else {
      setAlertMessage('End date cannot be before the start date !')
    }

  }
  const handleReminderChange = (e) => setReminder(e.target.checked)
  const handleAccomplishChange = (e) => setAccomplish(e.target.checked)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform form validation here

    // Create goal object
    const newGoal = {
      goalName,
      description,
      startDate,
      endDate,
      reminder,
      accomplish
    }

    setGoals(newGoal)

    // Callback function to pass the new goal up to the parent component
    // onGoalRegister(newGoal)

    // Clear form fields
    setGoalName('')
    setDescription('')
    setStartDate('')
    setEndDate('')
    setReminder(false)
    setAccomplish(false)
  }

  console.log(goals)
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
            placeholder='Enter the Goal name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder='Enter any special notes'
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
        <div className="form-group">
          <label htmlFor="Accomplished">Accomplished :</label>
          <input
            type="checkbox"
            id="isAccomplished"
            checked={accomplish}
            onChange={handleAccomplishChange}
          />
        </div>
        <div className="form-group">
    <label htmlFor="goalName">Goal Name:</label>
    <input
      list="goalsList"
      type="text"
      id="goalName"
      value={goalName}
      onChange={handleGoalNameChange}
      required
      placeholder="Enter or select the Goal name"
    />
     <datalist id="goalsList">
      {/* Dynamically list options here */}
      {/* Example: */}
      {/* <option value="Goal 1"></option> */}
      {/* <option value="Goal 2"></option> */}
      {/* Add more options based on your data */}
    </datalist>
   
  </div>
        {alertMessage && <div className='alt-msg'>{alertMessage}</div>}
        <div className='buttons'>
          <button type="submit" className="btn-new-register-goal">Register Goal</button>
          <button type="submit" className="btn-edit-register-goal">Modify Goal</button>
          <button type="submit" className="btn-discard-register-goal">Discard Goal</button>
        </div>
      </form>
    </div>
  )
}

export default GoalForm
