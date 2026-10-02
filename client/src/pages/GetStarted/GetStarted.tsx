
import EnterHabits from "../../components/EnterHabits/EnterHabits"
import EnterIntervals from "../../components/EnterIntervals/EnterIntervals"
import { useState } from "react"
import type { Habit } from "../../types/types"


export default function GetStarted() {
    const [habits, setHabits] = useState<Habit[]>([
        { name: '', days: []}, // initialize state with three empty objects
        { name: '', days: []}, 
        { name: '', days: []}, 
    ])
    const [step, setStep] = useState(0)

    return (
        <div>
            { step === 0 && (
                <EnterHabits 
                    habits={habits} 
                    setHabits={setHabits}
                /> 
            )}
            { step === 1 && <EnterIntervals /> }
        </div>
    )
    
}