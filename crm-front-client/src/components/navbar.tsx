import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Navbar() {
    return (
        <nav className="max-w-[200px] p-4 bg-[#FFFFFF] space-x-4 rounded-2xl shadow-lg">
            <Link to="/" className="hover:underline">Главная</Link>
            <Link to="/log-in" className="hover:underline">Sign in</Link>
        </nav>
    )
}

export default Navbar