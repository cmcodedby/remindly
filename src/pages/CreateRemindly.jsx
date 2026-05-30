import {useState} from 'react'
import './CreateRemindly.css'
import { Link } from "react-router-dom";

export const CreateRemindly = () => {

    //Functions to keep track of the user input and save them as name and date variables.
    const [reminderInput, setReminderInput] = useState("")
    const [dateInput, setDateInput] = useState("")

    //render URL
    const WEB_URL = "https://my-node-app-xirq.onrender.com/create-reminder"

    // Functions to set the name and date variables to user input
    const handleReminderChange = (event) => {
       setReminderInput(event.target.value)
    }

    const handleDateChange = (event) => {
        setDateInput(event.target.value)
    }

    //function to send the name and date variables to JSON BIN
    const create = async () => {
        try {
            const response = await fetch(WEB_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    reminder: reminderInput,
                    date: dateInput,
                })
            });

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.log("Error saving data:", error.message);
        }
    };

    return (
    <>
        <div id="create-container">
            <div id="create-header">Create Remindly</div>

            <nav id="navbar">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/track">Track</Link>
                <Link to="/about">About</Link>
            </nav>

            <div id="create-form-card">
                <textarea
                    id="reminder-input"
                    placeholder="Add your reminder here..."
                    value={reminderInput}
                    onChange={handleReminderChange}
                ></textarea>

                <input
                    id="date-input"
                    placeholder="Input reminder date"
                    value={dateInput}
                    onChange={handleDateChange}
                />

                <button id="create-btn" onClick={create}>
                    Create
                </button>
            </div>
        </div>
    </>
);
}