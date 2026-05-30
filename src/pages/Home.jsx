import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';

export const Home = () => {
    const WEB_URL = "https://my-node-app-xirq.onrender.com/get-reminders"

    const [reminders, setReminders] = useState([])
    const [showAll, setShowAll] = useState(false);

   const getReminders = async () => {
    try {
        const response = await fetch(WEB_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await response.json();

        const sortedReminders = data.record.reminders.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        setReminders(sortedReminders);

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

    const displayedReminders = showAll ? reminders : reminders.slice(0, 3);

    return (
    <>
        <div id="app-header">Remindly</div>

        <nav id="navbar">
            <Link to="/">Home</Link>
            <Link to="/create">Create Reminder</Link>
            <Link to="/track">Track Wellness</Link>
            <Link to="/about">About</Link>
        </nav>

        <div id="reminders-label">Reminders:</div>

        <div id="reminders-container">
            <ul id="reminders-list">
                {displayedReminders.map((reminder) => {
    return (
        <li className="reminder-item" key={reminder.id}>
            <span className="reminder-text">
                {reminder.reminder}
            </span>
            <span className="reminder-date">
                {reminder.date}
            </span>
        </li>
    );
})}
            </ul>
        {reminders.length > 3 && (
            <button
            id="show-more-btn"
                onClick={() => setShowAll(!showAll)}
                    >
                {showAll ? "Show Less" : "Show More"}
            </button>
)}
        </div>
    </>
);
}