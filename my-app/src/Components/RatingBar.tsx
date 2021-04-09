import React, { useState } from 'react';
import './RatingBar.css'

const RatingBar = () => {
    const [rating, setRating] = useState(0)
    return (
        <div>
            {
                [...Array(10)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input hidden type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                            <span id={ratingValue <= rating ? "Color" : ""}><i className="fas fa-star">
                            </i></span>
                        </label> 
                    )
                })
            }
            <h1>{rating}</h1>
        </div>
    )
}

export default RatingBar;