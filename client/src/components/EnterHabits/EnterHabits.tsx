// import './EnterHabits.css'
import { useEffect, useState } from "react"
import type { Habit } from '../../types/types'
import { MoveRight, Plus } from "lucide-react"


const habitPlaceholders = ['Gym', 'Read 10 pages', 'Eat breakfast']
const MAX_HABITS = 5

type EnterHabitsProps = {
    habits: Habit[],
    setHabits:  React.Dispatch<React.SetStateAction<Habit[]>>,
    changeStep: (newStep: number) => void
}

export default function EnterHabits({ habits, setHabits, changeStep }: EnterHabitsProps) {

    useEffect(() => {
        console.log('habits:', habits)
    }, [habits])

    const [error, setError] = useState('')


    const handleAddHabit = () => {
        if (habits.length >= MAX_HABITS) {
            return
        }
        setHabits(prev => [...prev, { name: '', days: []}])
    }


    const changeHabit = (value: string, index: number) => {
        // if index of item === index, return updated habit
        setHabits(prev => {
            const habitsCopy = [...prev]
            habitsCopy[index].name = value
            return habitsCopy
        })
    }


    const handleNext = () => {
        const filteredHabits = habits.filter(item => item.name.trim() !== "")
        if (filteredHabits.length === 0 ) {
            setError('Please enter at least one habit.')
            return
        }
        setHabits(filteredHabits)
        changeStep(1)
    }




    return (
        <div className="max-w-lg m-auto flex flex-col gap-8 text-center">
            { error && <p style={{ color: 'red' }}>{ error }</p> }

            <div className="flex flex-col gap-3">
                <p className="text-base font-semibold">What habits would you like to track?</p>
                <p className="text-base">Enter up to {MAX_HABITS} habits</p>
            </div>

            <div className="flex flex-col gap-3">
                { habits.map((habit, i) => (
                    <input
                        // className="enter-habits--input"
                        className="input w-full"
                        key={i}
                        type="text"
                        value={habit.name}
                        placeholder={habitPlaceholders[i] || ''}
                        onChange={(e) => changeHabit(e.target.value, i)}
                    />
                ))}

            </div>
            
            <div className="flex gap-3">
                <button className="btn btn-outline flex-1" onClick={handleAddHabit}>
                    <Plus size={15}/>
                    Add habit
                </button>
                <button className="btn btn-neutral flex-1" onClick={handleNext}>
                    Next
                    <MoveRight size={15} />
                </button>
            </div>
            
        </div>
    )
}