import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';

export const Home = () => {
    const WEB_URL = "https://my-node-app-xirq.onrender.com/get-reminders"

    const [reminders, setReminders] = useState([])

    const getReminders = async () => {
        try {
            const response = await fetch(WEB_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await response.json();

            console.log(data);
            setReminders(data.record.reminders);
            console.log(data);
        
        } catch (error) {
            console.log("Error saving data:", error.message);
        }
    };

    useEffect(() => {
        getReminders()
    }, [])

    if (reminders.length === 0 ) {
        return (<></>)
    }

    return (
        <>
            <div id="app-header">Remindly</div>

            <div id="reminders-label">Reminders:</div>

            <div id="reminders-container">
                {<ul id="reminders-list">
                    {reminders.map((reminder) => {
                        return (
                            <li className="reminder-item" key={reminder.id}>
                                <span className="reminder-text">{reminder.reminder}</span>
                                <span className="reminder-date">{reminder.date}</span>
                            </li>
                        )
                    })}
                </ul>}
            </div>
          <Link to = "/create" >Create Remindly</Link>  
        </>
    )
}