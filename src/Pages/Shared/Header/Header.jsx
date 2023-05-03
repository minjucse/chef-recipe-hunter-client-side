import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
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
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="blog">Blog</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
            <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                <div className='applying'>
                    <button type="button" className="btn btn-primary btn-lg added-bg-btn">Sign In </button>
                </div>
            </div>
        </div>
    )
}

export default Header