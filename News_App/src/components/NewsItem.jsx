import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsItem({ item }) {

    return (
        <div className="col-lg-3 col-md-4 col-sm-12 mt-4">
            <div className="card" >
                <img src={item.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                    <Link to={item.url} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}
