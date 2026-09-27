import './EnterHabits.css'
import { useEffect, useState } from "react"


const habitPlaceholders = ['Gym', 'Read 10 pages', 'Eat breakfast']
const MAX_HABITS = 5

export default function EnterHabits() {
    const [habits, setHabits] = useState<string[]>(['', '', ''])


    useEffect(() => {
        console.log('habits:', habits)
    }, [habits])


    const handleAddHabit = () => {
        if (habits.length >= MAX_HABITS) {
            return
        }
        setHabits(prev => [...prev, ''])
    }


    const changeHabit = (value: string, index: number) => {
        // if index of item === index, return updated habit
        setHabits(prev => {
            const habitsCopy = [...prev]
            habitsCopy[index] = value
            return habitsCopy
        })
    }


    const handleNext = () => {
        setHabits(prev => {
            return prev.filter(item => item.trim() !== "" )
        })

        // call next page
    }


    return (
        <div className="enter-habits">
            <p>What habits would you like to track?</p>
            <p>Enter up to {MAX_HABITS} habits</p>
            <div className="enter-habits--input-container">
                { habits.map((habit, i) => (
                    <input
                        className="enter-habits--input"
                        key={i}
                        type="text"
                        value={habits[i]}
                        placeholder={habitPlaceholders[i] || ''}
                        onChange={(e) => changeHabit(e.target.value, i)}
                    />
                ))}
            </div>

            <button onClick={handleAddHabit}>Add habit</button>
            <button onClick={handleNext}>Next</button>

        </div>
    )
}