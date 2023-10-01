import notesIcon from "./images/notes-icon.png";
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={notesIcon} alt="icon" className="navIcon" />
            <span className="naveTitle">Notes on Go</span>
        </nav>
    )
}
