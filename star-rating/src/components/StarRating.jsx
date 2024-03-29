import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css'

export default function StarRating({ noOfStar = 10 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }
    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);

    }

    const handleMouseLeave = () => {
        setHover(rating)

    }
    return (
        <>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index += 1
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        size={40}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                    />
                })
            }
        </>
    )
}
