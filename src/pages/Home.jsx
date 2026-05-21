 export const Home = () => {
    const WEB_URL = "https://my-node-app-xirq.onrender.com/get-reminders"
    const getReminders = async () => {
        try {
            const response = await fetch(WEB_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                // body: JSON.stringify({
                //     reminder: reminderInput,
                //     date: dateInput,
                // })
            });

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.log("Error saving data:", error.message);
        }
    };

    getReminders()



    return (
        <div>text in there, like hello</div>
    )
}
