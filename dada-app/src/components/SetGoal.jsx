import { useState, useContext, useEffect } from 'react'
import { GoalContext } from '../context/GoalContext'
import Milestone from './Milestone'
import axios from 'axios'



const GoalForm = () => {

  const { goals, addNewGoal } = useContext(GoalContext)

  const [milestones, setMilestones ] = useState([])
  
  const [user,setUser] = useState('')
  const [goalName, setGoalName] = useState('')
  const [notes, setDescription] = useState('12345')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isActive, setReminder] = useState(false)
  const [accomplished, setAccomplish] = useState(false)

  const [alertMessage, setAlertMessage] = useState('')


  useEffect(() => {



  const loadCurrentUser = async () => {
    let userId='65ef2b370ba628b5c1cd87d7'
    try{
        //const responseUser = await axios.get(`http://localhost:3001/users/${userId}`)
        // http://localhost:3001/users/65ef2b370ba628b5c1cd87d7
        //console.log("UserID",responseUser.data)
        setUser(userId)

      }catch(error){
        console.error("Error finding currentUser information:", error)
        setAlertMessage("Error finding currentUser information: ", error.message)
      }

}
loadCurrentUser()

  },[])

  const addMilestone = (newMilestone) => {
      setMilestones((currentMilestone) => [...currentMilestone, newMilestone])
      console.log('NewMilestone--',newMilestone)
    }

  const handleGoalNameChange = (e) => {

    const value = e.target.value

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
    const inStartDate = new Date(startDate)


    if (endDate >= inStartDate) {
      setEndDate(e.target.value)
      setAlertMessage('')
    } else {
      setAlertMessage('End date cannot be before the start date !')
    }

  }
  const handleReminderChange = (e) => setReminder(e.target.checked)
  const handleAccomplishChange = (e) => setAccomplish(e.target.checked)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!goalName || !startDate || !endDate) {
      setAlertMessage('Please fill in all required fields.')
      return // Exit the function if validation fails
    }
    console.log('Adding milestone inn to gole --',milestones)
    //addNewGoal(user,goalName, startDate, endDate, accomplished, isActive, notes)
    addNewGoal(user,goalName, startDate, endDate, accomplished, isActive, notes, milestones)

    
    // Clear form fields
    handelClearForm()

    setAlertMessage('Goal successfully registered!')

  }

  const handelClearForm = () => {
    setUser('')
    setGoalName('')
    setDescription('')
    setStartDate('')
    setEndDate('')
    setReminder(false)
    setAccomplish(false)

  }
  console.log( "Goals" ,goals)
  return (
    <div className="goal-registration-container">
      <form onSubmit={handleSubmit}>
        <div className='goal-title'><h2>Register New Goal</h2></div>
        
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
            id="notes"
            value={notes}
            onChange={handleDescriptionChange}
            placeholder='Enter any special notes'
          />
        </div>
        <div className='dates'>
        <br></br>
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
          <label htmlFor="Accomplished">Accomplished :</label>
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
            <Milestone onAddMilestone={addMilestone}/>
          </div>
        </div>
        {alertMessage && <div className='alt-msg'>{alertMessage}</div>}
        <div className='buttons'>
          <button type="button" className="btn-clear-register-goal" onClick={handelClearForm}>Clear</button>
          <button type="submit" className="btn-new-register-goal">Register</button>
          {/* <button type="button" className="btn-edit-register-goal">Modify</button>
          <button type="button" className="btn-discard-register-goal">Discard</button> */}
        </div> 
      </form>
    </div>
  )
}

export default GoalForm
