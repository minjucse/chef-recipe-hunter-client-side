import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className='row align-items-center header-menu'>
            <div className='col-xl-3 col-lg-2'>
                <div className='logo'>
                    <Link to="/">Delicious Food</Link>
                </div>
            </div>
            <div className='col-xl-6 col-lg-7'>
                <div className='main-menu'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className={location.pathname === '/'? 'nav-link text-warning': 'nav-link'} to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={location.pathname === '/blog'? 'nav-link text-warning': 'nav-link'} to="/blog">Blog</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
            <div className='col-xl-3 col-lg-3 '>
                <div className='applying d-flex'>
                    {
                        user && <div className='user-profile'>
                            <img src={user.photoURL} alt="" />
                        </div>
                    }
                    {user ?
                        <button onClick={handleLogOut} type="button" className="btn btn-primary btn-lg added-bg-btn">Sign Out </button>
                        :
                        <Link to="/sign-in">
                            <button type="button" className="btn btn-primary btn-lg added-bg-btn">Sign In </button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Header