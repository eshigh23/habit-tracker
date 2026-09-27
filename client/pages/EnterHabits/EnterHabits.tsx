import './EnterHabits.css'
import { useEffect, useState } from "react"


const habitPlaceholders = ['Gym', 'Read 10 pages', 'Eat breakfast']
const MAX_HABITS = 5

export default function EnterHabits() {
    const [habits, setHabits] = useState<string[]>(['', '', ''])

    const handleAddHabit = () => {
        if (habits.length >= MAX_HABITS) {
            return
        }

        setHabits(prev => [...prev, ''])
    }

    return (
        <div className="enter-habits">
            <p>What habits would you like to track?</p>
            <p>Enter up to {MAX_HABITS} habits</p>
            <div className="enter-habits--input-container">
                { habits.map((habit, i) => (
                    <input
                        key={i}
                        type="text"
                        value={habits[i]}
                        placeholder={habitPlaceholders[i] || ''}
                    />
                ))}
            </div>
            <button onClick={handleAddHabit}>Add habit</button>

        </div>
        
    )
}