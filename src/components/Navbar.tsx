import React from 'react';
import { Link } from 'react-router-dom';

interface IState{};
interface IProps{};

let Navbar:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4">
                <div className="container">
                    <Link to={'/'} className="navbar-brand text-white">Laurenz's Simple App</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/users'} className="nav-link text-white">User List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/posts'} className="nav-link text-white">Posts and Comments</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;