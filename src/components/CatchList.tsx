import { getCatches } from "../services/storage";
import { useState, useEffect } from "react";
import type { Catch } from "../types/catch";

export default function CatchList() {
    const [catches, setCatches] = useState<Catch[]>([]);
    useEffect(() => {
        setCatches(getCatches());
    }, []);

    return (
        <div>
            {catches.length === 0 ? (
                <p>No catches yet. Add your first catch!</p>
            ) : (
                <ul>
                    {catches.map((catchItem) => (
                        <li key={catchItem.id}>
                            {catchItem.fish} caught at {catchItem.location} on {catchItem.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}