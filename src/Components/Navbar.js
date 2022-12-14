import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}} > 
                    <h1 className="navbar-brand" >Blog Website</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to ='AddBlog' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <h5 className="nav-link active" aria-current="page" >Add Blog</h5>
                                </Link>
                            </li>
                          


                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar