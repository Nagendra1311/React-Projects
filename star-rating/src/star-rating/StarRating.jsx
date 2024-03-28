import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
export default function starRating({ noOfStar = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            <div className='Star-rating'>
                {
                    [...Array(noOfStar)].map((_, index) => {
                        return <FaStar key={index} />
                    })
                }

            </div>

        </div>
    )
}
