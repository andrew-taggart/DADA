import { useState } from 'react'
import Goals from './components/GoalPage'
import Home from './components/Main'
import GoalForm from './components/GoalPage'

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/goals" element={<Goals />} />
    <Route path="/register" element={<SiginIn />} />
    <Route path="/setgoal" element={<GoalForm />} />
</Routes>