import { useState } from "react";
import { saveCatch } from "../services/storage";


function CatchForm() {
        
        const [fish, setFish] = useState("");
        const [location, setLocation] = useState("");
        const [date, setDate] = useState("");
        const [notes, setNotes] = useState("");

        const handleSubmit = (e: React.FormEvent) => {
            if (!fish || !location || !date) {
                alert("Please fill in all required fields");
                return;
            }
            e.preventDefault();
            
            const newCatch = {
                id: Date.now().toString(),
                fish,
                location,
                date,
                notes
            };
            saveCatch(newCatch);
            setFish("");
            setLocation("");
            setDate("");
            setNotes("");
        }; 
    return (

        <form onSubmit={handleSubmit}>
            <input placeholder="Fish"
            value={fish}
            onChange={(e)=> setFish(e.target.value)}></input>
            <input placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}></input>
            <input type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}></input>
            <textarea placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}></textarea>
            <button type="submit">Add</button>
        </form>
    );
}
export default CatchForm;