import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/add">Add Catch</Link>
        </div>
    );
}