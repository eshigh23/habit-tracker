import './EnterIntervals.css'
import type { Habit } from '../../types/types'
import { useState } from 'react'

type EnterIntervalsProps = {
    habits: Habit[],
    setHabits:  React.Dispatch<React.SetStateAction<Habit[]>>,
    changeStep: (newStep: number) => void,
    onSave: (habits: Habit[]) => void
}

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function EnterIntervals({ habits, setHabits, changeStep, onSave }: EnterIntervalsProps) {
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

        setHabits(prev => prev.map((habit, i) => {
            if (index !== i) {  // if not target index, return habit as it was
                return habit
            }
            if (e.target.checked) { // if value of e.target is checked, append day
                return {
                    ...habit,
                    days: [...habit.days, e.target.value]
                }
            }
            return {
                ...habit,   // otherwise, remove day
                days: habit.days.filter(day => day !== e.target.value)
            }
        }))
    }

    const checkAndSaveHabits = () => {
        setError('')

        // check for habits without days
        const filtered = habits.filter(habit => habit.days.length === 0)

        if (filtered.length) {
            setError('Please choose at least one day for each habit')
            return
        }

        onSave(habits)
    }

    return(
        <div className="enter-intervals">
            { error && <p style={{ color: 'red' }}> {error} </p>}
            { habits.map((habit, i) => (
                <div key={habit.name}>
                    <p>{habit.name}</p>
                    {DAYS_OF_WEEK.map(day => (
                        <label key={day}> {day}:
                            <input
                                type={'checkbox'}
                                checked={habit.days.includes(day)}
                                value={day}
                                onChange={(e) => handleChange(e, i)}
                            />
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={() => changeStep(0)}>Back</button>
            <button onClick={checkAndSaveHabits}>Save habits</button>
        </div>
    )
}