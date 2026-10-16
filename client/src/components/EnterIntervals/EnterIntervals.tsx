import './EnterIntervals.css'
import type { Habit } from '../../types/types'
import { useState } from 'react'
import { MoveLeft, Save } from 'lucide-react'

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
        <div className="max-w-lg m-auto flex flex-col gap-8 text-center">
            { error && <p style={{ color: 'red' }}> {error} </p>}

            <div>
                <p className="text-base font-semibold">Which days will you do each habit?</p>
            </div>

            { habits.map((habit, i) => (
                <div className="mb-5" key={habit.name}>
                    <p className="text-lg font-semibold mb-3">{habit.name}</p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {DAYS_OF_WEEK.map(day => (
                            <div key={day}>
                                <label htmlFor="interval-checkbox" className="text-base" key={day}> {day} </label>
                                <input
                                    name="interval-checkbox"
                                    className="checkbox checkbox-sm rounded-sm"
                                    type={'checkbox'}
                                    checked={habit.days.includes(day)}
                                    value={day}
                                    onChange={(e) => handleChange(e, i)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex gap-3">
                <button className="btn btn-outline flex-1" onClick={() => changeStep(0)}>
                    <MoveLeft size={15} />
                    Back
                </button>
                <button className="btn btn-primary flex-1" onClick={checkAndSaveHabits}>
                    Save habits
                    <Save size={15} />
                </button>
            </div>
            
        </div>
    )
}