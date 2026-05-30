import { Link } from "react-router-dom";
import "./CreateRemindly.css";

export const Track = () => {
    return (
        <div id="create-container">
            <div id="create-header">Track Wellness</div>

            <nav id="navbar">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/track">Track</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};