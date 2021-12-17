import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function Average() {

    const {feedback} = useContext(FeedbackContext)

    let avg_rating = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    
    avg_rating = avg_rating.toFixed(1).replace(/[.]0$/, "")

    return (
        <div className="average">
           <div className="total-ratings">{feedback.length} Reviews</div>
           <div className="avg-rating">Average Rating:{isNaN(avg_rating) ? '0' : avg_rating}</div>
        </div>
    )
}

export default Average
