import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Navbar() {
    return (
        <nav className="max-w-[200px] w-[100%] p-4 bg-[#FFFFFF] space-x-4 rounded-2xl shadow-lg flex flex-col">
            <Link to="/" className="hover:underline">Главная</Link>
            <Link to="/log-in" className="hover:underline">Sign in</Link>
            <Link to="/employees" className="hover:underline">Employees</Link>
        </nav>
    )
}

export default Navbar