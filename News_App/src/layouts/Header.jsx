import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const categories = useSelector(state => state.categories)
    return (
        <div className='sticky-top'>
            <nav className=" navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            {
                                categories.length > 0 && categories.map((item, index) => (
                                    <li className='nav-item nav-underline active' key={index}>
                                        <Link to={`/category/${item}`} className='nav-link  text-capitalize' key={index}>
                                            {item}
                                        </Link>
                                    </li>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
